import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Utility functions
const stripHtml = (html) => {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const getKeywords = (post) => {
  const keywords = [];
  if (post._embedded && post._embedded["wp:term"]) {
    const terms = post._embedded["wp:term"];
    terms.forEach((termGroup) => {
      if (termGroup && Array.isArray(termGroup)) {
        termGroup.forEach((term) => {
          if (term.name && term.name.toLowerCase() !== "uncategorized") {
            keywords.push(term.name);
          }
        });
      }
    });
  }
  return keywords.slice(0, 1);
};

export default function CategoryBlogs() {
  const [blogs, setBlogs] = useState([]);
  // Removed unused category state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { categorySlug } = useParams();
  const navigate = useNavigate();

  // Fetch category details by slug
  const fetchCategory = async (slug) => {
    const response = await fetch(
      `https://acetechinside.tech/wp-json/wp/v2/categories?slug=${slug}`
    );
    if (!response.ok) throw new Error("Failed to fetch category");
    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Category not found");
    }

    return data[0];
  };

  // Fetch blogs by category ID
  const fetchBlogsByCategory = async (categoryId) => {
    const response = await fetch(
      `https://acetechinside.tech/wp-json/wp/v2/posts?categories=${categoryId}&per_page=20&_embed`
    );
    if (!response.ok) throw new Error("Failed to fetch blogs");
    const data = await response.json();

    // Process blogs
    const processedBlogs = data.map((post) => {
      let featuredImage = "https://placeholder.com/300x200";
      if (post._embedded && post._embedded["wp:featuredmedia"]) {
        featuredImage =
          post._embedded["wp:featuredmedia"][0]?.source_url || featuredImage;
      }
      return {
        id: post.id,
        title: stripHtml(post.title.rendered),
        description: stripHtml(post.excerpt.rendered).substring(0, 150) + "...",
        date: formatDate(post.date),
        image: featuredImage,
        link: post.link,
        slug: post.slug,
        keywords: getKeywords(post),
        comments: post.comment_count || 0,
      };
    });

    return processedBlogs;
  };

  // Main data fetching effect
  useEffect(() => {
    const fetchData = async () => {
      if (!categorySlug) {
        setError("No category specified");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Fetch category details first
        const categoryData = await fetchCategory(categorySlug);
        // setCategory(categoryData); // Removed unused setter

        // Then fetch blogs for this category
        const blogsData = await fetchBlogsByCategory(categoryData.id);
        setBlogs(blogsData);
      } catch (err) {
        setError(err.message || "Failed to load content");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorySlug]);

  // Handle blog card click (you can customize this)
  const handleBlogClick = (blog) => {
    // Navigate to blog detail page using the slug
    navigate(`/${blog.slug}`);
  };
  // Handle back to resources
  const handleBackToResources = () => {
    navigate("/resources");
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center py-12">
        <div className="text-center">
          <div className="animate-pulse text-xl text-gray-400">
            Loading category blogs...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center py-12">
        <div className="text-center text-white">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <button
            onClick={handleBackToResources}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition-colors duration-200"
          >
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-white">
        {/* Blogs Grid */}
        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400 mb-4">
              No blogs found in this category.
            </p>
            <button
              onClick={handleBackToResources}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition-colors duration-200"
            >
              Browse All Resources
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog)}
                className="group font-roboto bg-gray-800 overflow-hidden transition-all duration-500 ease-in-out cursor-pointer flex flex-col hover:bg-gray-750"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://placeholder.com/300x200";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  {/* Keywords */}
                  {blog.keywords.length > 0 && (
                    <div className="mb-3 font-bebas">
                      <div className="flex items-center gap-2 mb-2 tracking-wider">
                        <div className="w-8 h-0.5 bg-white"></div>
                        {blog.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="text-white px-2 py-1 rounded uppercase tracking-wide text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <div className="font-bebas tracking-wider flex-1">
                    <h2 className="text-xl mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                      {blog.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center text-gray-400 text-sm mt-auto">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.comments} Comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button (optional) */}
        {blogs.length >= 20 && (
          <div className="text-center mt-12">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded transition-colors duration-200 font-bebas tracking-wider uppercase">
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
