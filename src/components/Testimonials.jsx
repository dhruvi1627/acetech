import React, { useState } from "react";
import testimonials from "../assets/testimonials.png";

const testimonialData = [
  {
    id: 1,
    quote:
      "ATI's dedicated team brought unparalleled expertise to project. Their focus on collaboration and efficiency delivered outstanding results on time and within budget.",
    name: "Ronals May",
    position: "Enthrepreneur",
  },
  {
    id: 2,
    quote:
      "Working with ATI was seamless. Their deep understanding of cutting-edge technologies like Al and blockchain made a huge difference in our project. Exceptional support!",
    name: "Michelle Smith",
    position: "SME CEO",
  },
  {
    id: 3,
    quote:
      "Ace Tech Inside has transformed our business operations with their innovative solutions. Their agile approach helped us scale quickly and stay ahead of the competition. We highly recommend their services!",
    name: "Linda Miller",
    position: "Startup Founder",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-[#0a0a1a] text-white px-8 relative overflow-hidden font-roboto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Testimonials */}
        <div className="text-center lg:text-center flex flex-col items-center justify-center">
          <h2 className="text-xl text-gray-400 mb-4 uppercase tracking-wider font-bebas">
            TESTIMONIALS
          </h2>
          <h1 className="text-5xl mb-16 font-bebas">SUCCESS STORIES</h1>

          <div className="relative text-2xl mb-12">"</div>

          <div className="max-w-xl px-4">
            <blockquote className="mb-8">
              <p className="text-xl leading-relaxed mb-12 text-center font-roboto">
                {testimonialData[currentSlide].quote}
              </p>
              <footer className="mt-8">
                <h3 className="text-2xl uppercase mb-2 font-bebas">
                  {testimonialData[currentSlide].name}
                </h3>
                <p className="text-gray-400 font-roboto ">
                  {testimonialData[currentSlide].position}
                </p>
              </footer>
            </blockquote>

            <div className="flex justify-center gap-4 mt-12">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 
                      ${
                        currentSlide === index ? "bg-purple-500" : "bg-gray-800"
                      }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative">
          <img src={testimonials} alt="testimonials" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
