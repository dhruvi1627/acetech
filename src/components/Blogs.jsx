import React, { useState, useEffect } from "react";
import footerbgstartup from "../assets/images/footer-bg-startup.png";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample blog data - Replace this with actual API call
  const sampleBlogs = [
    {
      id: 1,
      title: "Getting Started with React",
      description: "Learn the basics of React development",
      date: "2025-06-16",
      image: "https://placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Modern Web Development",
      description: "Explore modern web development practices",
      date: "2025-06-15",
      image: "https://placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Modern Web Development",
      description: "Explore modern web development practices",
      date: "2025-06-15",
      image: "https://placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Modern Web Development",
      description: "Explore modern web development practices",
      date: "2025-06-15",
      image: "https://placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Modern Web Development",
      description: "Explore modern web development practices",
      date: "2025-06-15",
      image: "https://placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Modern Web Development",
      description: "Explore modern web development practices",
      date: "2025-06-15",
      image: "https://placeholder.com/300x200",
    },
  ];

  useEffect(() => {
    // Replace this with your actual API fetch
    setBlogs(sampleBlogs);
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
      <div className="text-white min-h-screen">
        <div className=" font-bebas text-center py-10 space-y-4">
          <h1 className="text-xl">OUR BLOG</h1>
          <h1 className="text-5xl">LATEST NEWS</h1>
        </div>

        <div className="container mx-auto px-4 relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full"
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

          <div className="grid grid-cols-3 gap-6 overflow-hidden">
            {blogs.slice(currentSlide, currentSlide + 3).map((blog) => (
              <div
                key={blog.id}
                className="font-roboto bg-gray-800 rounded-lg overflow-hidden transition-transform duration-500 ease-in-out"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="font-bebas p-4">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-300 mb-2">{blog.description}</p>
                  <span className="text-sm text-gray-400">{blog.date}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full"
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

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(blogs.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    currentSlide / 3 === index ? "bg-white" : "bg-gray-500"
                  }`}
                  onClick={() => setCurrentSlide(index * 3)}
                />
              )
            )}
          </div>
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
