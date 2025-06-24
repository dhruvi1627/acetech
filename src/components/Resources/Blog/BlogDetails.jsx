import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Utility functions
const decodeHtmlEntities = (text) => {
  if (!text) return "";
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#038;/g, "&")
    .replace(/&#8211;/g, "-")
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, "...");
};

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://acetechinside.tech/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        if (!response.ok) throw new Error("Failed to fetch post");
        const data = await response.json();

        if (data.length > 0) {
          const postData = data[0];
          setPost({
            id: postData.id,
            title: decodeHtmlEntities(postData.title.rendered),
            content: postData.content.rendered,
            date: formatDate(postData.date),
            category:
              postData._embedded?.["wp:term"]?.[0]?.[0]?.name ||
              "Uncategorized",
            image:
              postData._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "https://placeholder.com/800x400",
            tags: postData._embedded?.["wp:term"]?.[1] || [],
            comments: postData.comment_count || 0,
          });
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://acetechinside.tech/wp-json/wp/v2/categories?per_page=100"
        );
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        const filteredCategories = data.filter(
          (cat) => cat.count > 0 && cat.name.toLowerCase() !== "uncategorized"
        );
        setCategories(filteredCategories);
      } catch (err) {
        console.error("Failed to load categories:", err);
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
        const filteredTags = data.filter((tag) => tag.count > 0);
        setTags(filteredTags);
      } catch (err) {
        console.error("Failed to load tags:", err);
      }
    };
    fetchTags();
  }, []);

  // Handle category click
  const handleCategoryClick = (category) => {
    navigate(`/category/${category.slug}`);
  };

  // Handle tag click
  const handleTagClick = (tag) => {
    navigate(`/tag/${tag.slug}`);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-black">
        <div className="text-center">
          <p className="text-xl text-gray-400">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-black">
        <div className="text-center">
          <p className="text-xl text-red-500">{error || "Post not found"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Blog Title Header */}
        <div className=" mb-12 w-4/5">
          <div className="flex gap-4 text-gray-400 text-sm mb-4">
            <span className="bg-[#de60ca] text-white px-3 py-1  uppercase font-bebas">
              {post.category}
            </span>
          </div>
          <h1 className="font-bebas text-4xl md:text-5xl tracking-wider uppercase mb-4">
            {post.title}
          </h1>
          <div className="flex gap-4 text-gray-400 text-sm">
            <span>{post.date}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Blog Content */}
          <div className="flex-1 lg:w-2/3">
            {/* Featured Image */}
            {post.image && (
              <div className="mb-8 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = "https://placeholder.com/800x400";
                  }}
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="">
              <div
                className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-white prose-headings:font-bebas prose-headings:tracking-wider prose-headings:uppercase
                  prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:border-b prose-h1:border-gray-600 prose-h1:pb-3
                  prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-6 prose-h2:text-white prose-h2:font-bebas
                  prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-5 prose-h3:text-gray-100 prose-h3-font-bebas
                  prose-h4:text-lg prose-h4:mb-2 prose-h4:mt-4 prose-h4:text-gray-200 prose-h4:font-bebas
                  prose-h5:text-base prose-h5:mb-2 prose-h5:mt-3 prose-h5:text-gray-300 prose-h5:font-bebas
                  prose-h6:text-sm prose-h6:mb-2 prose-h6:mt-3 prose-h6:text-gray-400
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-lg prose-p:font-roboto
                  prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:font-roboto
                  prose-strong:text-white prose-strong:font-bebas
                  prose-em:text-gray-200 prose-em:italic
                  prose-ul:text-gray-300 prose-ul:mb-4 prose-ul:pl-6
                  prose-ol:text-gray-300 prose-ol:mb-4 prose-ol:pl-6
                  prose-li:text-gray-300 prose-li:mb-2 prose-li:leading-relaxed
                  prose-li:marker:text-white
                  prose-blockquote:border-l-4 prose-blockquote:border-l-white prose-blockquote:text-gray-300 
                  prose-blockquote:bg-gray-700 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:italic
                  prose-code:text-white prose-code:bg-gray-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                  prose-table:text-gray-300 prose-thead:bg-gray-700 prose-th:text-white prose-th:font-bebas prose-th:tracking-wider
                  prose-td:border-gray-600 prose-th:border-gray-600
                  prose-img:rounded-lg prose-img:shadow-lg prose-img:mb-6
                  prose-hr:border-gray-600 prose-hr:my-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Post Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="font-bebas text-xl tracking-wider mb-4">
                    POST TAGS
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.id}
                        onClick={() => handleTagClick(tag)}
                        className="border border-gray-400 px-3 py-1 text-xs font-bebas uppercase tracking-wide text-gray-200 hover:text-[#de60ca] hover:border-[#de60ca] transition-colors duration-200 cursor-pointer"
                      >
                        {decodeHtmlEntities(tag.name)}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Categories & Tags Sidebar */}
          <div className="w-full lg:w-1/3 p-8 bg-[#242222] rounded-lg h-fit">
            {/* Categories Section */}
            <h2 className="text-xl font-bold mb-4 font-bebas tracking-wider">
              CATEGORIES
            </h2>
            {categories.length === 0 ? (
              <div className="text-gray-400 mb-8">Loading categories...</div>
            ) : (
              <ul className="space-y-2 mb-8">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat)}
                    className="text-gray-200 font-bebas flex justify-between hover:text-[#de60ca] hover:cursor-pointer transition-colors duration-200 py-1"
                  >
                    <span className="uppercase">
                      {decodeHtmlEntities(cat.name)}
                    </span>
                    <span className="ml-2">({cat.count})</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tags Section */}
            <h2 className="text-xl font-bold mb-4 font-bebas tracking-wider">
              TAGS
            </h2>
            {tags.length === 0 ? (
              <div className="text-gray-400">Loading tags...</div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.id}
                    onClick={() => handleTagClick(tag)}
                    className="border border-gray-400 px-3 py-1 text-xs font-bebas uppercase tracking-wide text-gray-200 hover:text-[#de60ca] hover:border-[#de60ca] transition-colors duration-200 cursor-pointer"
                  >
                    {decodeHtmlEntities(tag.name)}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
