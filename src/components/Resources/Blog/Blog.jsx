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

export default function Blog() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const params = useParams();
  const navigate = useNavigate();

  // Get current page from URL params, default to 1
  const currentPage = parseInt(params.page) || 1;
  const blogsPerPage = 9;

  // Fetch all blogs with pagination info
  useEffect(() => {
    const fetchAllBlogs = async () => {
      setLoading(true);
      try {
        // First, get total count
        const initialResponse = await fetch(
          "https://acetechinside.tech/wp-json/wp/v2/posts?per_page=1"
        );
        if (!initialResponse.ok) throw new Error("Failed to fetch blogs");

        const totalCount = parseInt(
          initialResponse.headers.get("X-WP-Total") || "0"
        );
        setTotalPages(Math.ceil(totalCount / blogsPerPage));

        // Then fetch all blogs (or a reasonable limit)
        const maxBlogs = Math.min(totalCount, 100); // Limit to 100 blogs for performance
        const response = await fetch(
          `https://acetechinside.tech/wp-json/wp/v2/posts?per_page=${maxBlogs}&_embed`
        );
        if (!response.ok) throw new Error("Failed to fetch blogs");

        const data = await response.json();

        // Process blogs
        const processedBlogs = data.map((post) => {
          let featuredImage = "https://placeholder.com/300x200";
          if (post._embedded && post._embedded["wp:featuredmedia"]) {
            featuredImage =
              post._embedded["wp:featuredmedia"][0]?.source_url ||
              featuredImage;
          }
          return {
            id: post.id,
            title: stripHtml(post.title.rendered),
            description:
              stripHtml(post.excerpt.rendered).substring(0, 150) + "...",
            date: formatDate(post.date),
            image: featuredImage,
            link: post.link,
            slug: post.slug,
            keywords: getKeywords(post),
            comments: post.comment_count || 0,
          };
        });

        setAllBlogs(processedBlogs);
        setTotalPages(Math.ceil(processedBlogs.length / blogsPerPage));
      } catch {
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllBlogs();
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://acetechinside.tech/wp-json/wp/v2/categories?per_page=100"
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        // Filter out categories with 0 posts and uncategorized
        const filteredCategories = data.filter(
          (cat) => cat.count > 0 && cat.name.toLowerCase() !== "uncategorized"
        );
        setCategories(filteredCategories);
      } catch {
        setError("Failed to load categories.");
      }
    };
    fetchCategories();
  }, []);

  // Fetch tags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(
          "https://acetechinside.tech/wp-json/wp/v2/tags?per_page=100"
        );
        if (!response.ok) throw new Error("Failed to fetch tags");
        const data = await response.json();
        // Filter out tags with 0 posts
        const filteredTags = data.filter((tag) => tag.count > 0);
        setTags(filteredTags);
      } catch {
        setError("Failed to load tags.");
      }
    };
    fetchTags();
  }, []);

  // Validate current page and redirect if invalid
  useEffect(() => {
    if (allBlogs.length > 0 && totalPages > 0) {
      if (currentPage > totalPages) {
        navigate("/blog");
      } else if (currentPage < 1) {
        navigate("/blog");
      }
    }
  }, [currentPage, totalPages, allBlogs.length, navigate]);

  // Get current page blogs
  const getCurrentPageBlogs = () => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return allBlogs.slice(startIndex, endIndex);
  };

  // Navigation handlers
  const handleCategoryClick = (category) => {
    navigate(`/category/${category.slug}`);
  };

  const handleTagClick = (tag) => {
    navigate(`/tag/${tag.slug}`);
  };

  const handleBlogClick = (blog) => {
    // Navigate to blog detail page using the slug
    navigate(`/${blog.slug}`);
  };

  // Pagination handlers
  const handlePageChange = (pageNumber) => {
    if (pageNumber === 1) {
      navigate("/blog");
    } else {
      navigate(`/blog/page/${pageNumber}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const currentBlogs = getCurrentPageBlogs();

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-12">
      <div className="flex flex-col md:flex-row gap-8 text-white max-w-7xl w-full">
        {/* Left: Blog Cards */}
        <div className="flex-1">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {loading && (
              <div className="col-span-full text-center py-16">
                <p className="text-xl text-gray-400">Loading blogs...</p>
              </div>
            )}
            {error && <div className="col-span-full text-red-500">{error}</div>}
            {currentBlogs.map((blog) => (
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
                  <div className="mb-3 font-bebas">
                    <div className="flex items-center gap-2 mb-2 tracking-wider">
                      <div className="w-8 h-0.5 bg-white"></div>
                      {blog.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="text-white px-2 py-1 rounded uppercase tracking-wide"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="font-bebas tracking-wider flex-1">
                    <h2 className="text-xl mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                      {blog.title}
                    </h2>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mt-2">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.comments} Comments</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && !loading && (
            <div className="flex gap-2 mt-8">
              {/* Previous Button */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded font-bebas tracking-wider ${
                  currentPage === 1
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
                }`}
              >
                PREV
              </button>

              {/* Page Numbers */}
              {getPaginationNumbers().map((number, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof number === "number" && handlePageChange(number)
                  }
                  disabled={number === "..."}
                  className={`px-3 py-2 rounded font-bebas tracking-wider ${
                    number === currentPage
                      ? "bg-[#de60ca] text-white"
                      : number === "..."
                      ? "bg-transparent text-gray-400 cursor-default"
                      : "bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
                  }`}
                >
                  {number}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded font-bebas tracking-wider ${
                  currentPage === totalPages
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
                }`}
              >
                NEXT
              </button>
            </div>
          )}
        </div>

        {/* Right: Categories and Tags */}
        <div className="w-full md:w-1/3 p-8 bg-[#242222]">
          <h2 className="text-xl font-bold mb-4 font-bebas tracking-wider">
            CATEGORIES
          </h2>
          {categories.length === 0 && !error && (
            <div className="text-gray-400">Loading categories...</div>
          )}
          <ul className="space-y-2 mb-8">
            {categories.map((cat) => (
              <li
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                className="text-gray-200 font-bebas flex justify-between hover:text-[#de60ca] hover:cursor-pointer transition-colors duration-200 py-1"
              >
                <span className="uppercase">{cat.name}</span>
                <span className="ml-2">({cat.count})</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-4 font-bebas tracking-wider">
            TAGS
          </h2>
          {tags.length === 0 && !error && (
            <div className="text-gray-400">Loading tags...</div>
          )}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.id}
                onClick={() => handleTagClick(tag)}
                className="border border-gray-400 px-3 py-1 text-xs font-bebas uppercase tracking-wide text-gray-200 hover:text-[#de60ca] hover:border-[#de60ca] transition-colors duration-200 cursor-pointer"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
