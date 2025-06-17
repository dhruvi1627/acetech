import React, { useState, useEffect } from "react";
import decor2Startup from "../assets/images/decor_2_startup.webp";
import footerbgstartup from "../assets/images/footer-bg-startup.png";
import colorBg from "../assets/images/bg-gr-1-startup.png";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);

  // Function to extract text content from HTML string
  const stripHtml = (html) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Function to get keywords from tags or categories
  const getKeywords = (post) => {
    const keywords = [];

    // Extract from categories if available
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

    // Fallback to extracting from yoast_head_json if available
    if (
      keywords.length === 0 &&
      post.yoast_head_json &&
      post.yoast_head_json.schema
    ) {
      const schema = post.yoast_head_json.schema;
      if (schema["@graph"]) {
        const article = schema["@graph"].find(
          (item) => item["@type"] === "Article"
        );
        if (article && article.keywords) {
          keywords.push(...article.keywords);
        }
      }
    }

    return keywords.slice(0, 1); // Limit to 1 keyword for better display
  };

  // Fetch blogs from WordPress API
  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://acetechinside.tech/wp-json/wp/v2/posts?per_page=12&_embed"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Process the blog data
      const processedBlogs = data.map((post) => {
        let featuredImage = "https://placeholder.com/300x200";

        // Get featured image from _embedded data
        if (post._embedded && post._embedded["wp:featuredmedia"]) {
          featuredImage =
            post._embedded["wp:featuredmedia"][0]?.source_url || featuredImage;
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
        };
      });

      setBlogs(processedBlogs);
      setError(null);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to load blogs. Please try again later.");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3 >= blogs.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - 3 < 0 ? Math.max(blogs.length - 3, 0) : prev - 3
    );
  };

  return (
    <>
      <div
        className="text-white min-h-screen bg-right bg-no-repeat relative"
        style={{
          backgroundImage: `
            url(${decor2Startup}),
            url(${colorBg})
          `,
          backgroundPosition: `
            right -400px top 50px,
            right center
          `,
          backgroundSize: "auto, cover",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="font-bebas text-center py-10 space-y-4">
          <h1 className="text-xl">OUR BLOG</h1>
          <h1 className="text-5xl">LATEST NEWS</h1>
        </div>
        {error && (
          <div className="container mx-auto px-4 mb-6">
            <div className="bg-red-600 text-white p-4 rounded-lg text-center">
              {error}
            </div>
          </div>
        )}
        <div className="container mx-auto px-4 relative">
          {blogs.length > 3 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
              aria-label="Previous blogs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(currentSlide, currentSlide + 3).map((blog) => (
              <div
                key={blog.id}
                className="font-roboto bg-gray-800 rounded-lg overflow-hidden transition-all duration-500 ease-in-out hover:transform hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://placeholder.com/300x200";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Content section with keywords, date, and title */}
                <div className="p-4">
                  {/* Keywords and Date */}
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
                      {blog.keywords.length > 0 && (
                        <span className="text-gray-400 text-sm">•</span>
                      )}
                      <span className="text-gray-400 text-sm ">
                        {blog.date}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="font-bebas tracking-wider">
                    <h2 className="text-xl mb-2 line-clamp-2 hover:text-blue-400 transition-colors duration-200">
                      {blog.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {blogs.length > 3 && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
              aria-label="Next blogs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {blogs.length > 3 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(blogs.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-200 ${
                      currentSlide / 3 === index
                        ? "bg-white w-6"
                        : "bg-gray-500 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentSlide(index * 3)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                )
              )}
            </div>
          )}

          {blogs.length === 0 && !error && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">Loading blogs...</p>
            </div>
          )}

          {blogs.length === 0 && error && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">No blogs found.</p>
            </div>
          )}
        </div>
        <div className="mt-[-200px] -z-10">
          <img
            src={footerbgstartup}
            alt="footerbgstartup"
            className="w-full mt-10"
          />
        </div>
      </div>
    </>
  );
}
