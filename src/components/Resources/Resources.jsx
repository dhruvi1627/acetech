import React, { useState, useEffect } from "react";

// Utility functions (copied from Blogs.jsx)
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

export default function Resources() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://acetechinside.tech/wp-json/wp/v2/posts?per_page=6&_embed"
        );
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        // Process blogs like in Blogs.jsx
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
        setBlogs(processedBlogs);
      } catch {
        setError("Failed to load blogs.");
      }
    };
    fetchBlogs();
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://acetechinside.tech/wp-json/wp/v2/categories"
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data);
      } catch {
        setError("Failed to load categories.");
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-start py-12">
      <div className="flex flex-col md:flex-row gap-8 text-white max-w-7xl w-full">
        {/* Left: Blog Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.length === 0 && !error && (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-gray-400">Loading blogs...</p>
            </div>
          )}
          {error && <div className="col-span-full text-red-500">{error}</div>}
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group font-roboto bg-gray-800 overflow-hidden transition-all duration-500 ease-in-out cursor-pointer flex flex-col"
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
                <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
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
                  <h2 className="text-xl mb-2 line-clamp-2 hover:text-blue-400 transition-colors duration-200">
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
        {/* Right: Categories */}
        <div className="w-full md:w-1/3 p-8 rounded-lg">
          <h2 className="text-xl font-bold mb-4 font-bebas tracking-wider">
            CATEGORIES
          </h2>
          {categories.length === 0 && !error && (
            <div>Loading categories...</div>
          )}
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className="text-gray-200 font-bebas flex justify-between hover:text-[#de60ca] hover:cursor-pointer"
              >
                <span className="uppercase">{cat.name}</span>
                <span className="ml-2">({cat.count})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
