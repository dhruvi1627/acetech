import React from "react";
import { ArrowRight } from "lucide-react";

const FeatureSection = ({
  title,
  animatedText,
  image,
  imageAlt,
  imageLeft = true,
  sections = [],
  accordionData = [],
  openAccordion,
  toggleAccordion,
  buttonText,
  onButtonClick,
}) => (
  <section className="text-white pb-20 px-12 mb-8">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold font-bebas tracking-wider text-center mb-8">
          {title} {animatedText}
          {animatedText && <span className="animate-pulse">_</span>}
        </h2>
        <div className={`grid lg:grid-cols-2 gap-16 items-start mb-8`}>
          {/* Image Side */}
          {imageLeft && (
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
          {/* Content Side */}
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div className="space-y-4" key={idx}>
                <h3 className="text-2xl lg:text-3xl font-bebas tracking-wider">
                  {section.heading}
                </h3>
                <p className="text-gray-300 leading-relaxed font-roboto">
                  {section.text}
                </p>
              </div>
            ))}
            {/* Accordion */}
            {accordionData.length > 0 && (
              <div className="space-y-6">
                {accordionData.map((item) => (
                  <div key={item.id} className="border-b border-gray-700">
                    <div
                      onClick={() => toggleAccordion(item.id)}
                      className="flex items-center justify-between pb-4 cursor-pointer group"
                    >
                      <h4 className="text-xl font-bebas tracking-wider">
                        {item.title}
                      </h4>
                      <ArrowRight
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          openAccordion === item.id
                            ? "rotate-90"
                            : "group-hover:translate-x-2"
                        }`}
                      />
                    </div>
                    <div
                      className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
                        openAccordion === item.id
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-4 text-gray-300 font-roboto leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* If image is on the right */}
          {!imageLeft && (
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
        {/* Button */}
        {buttonText && (
          <div className="flex justify-center">
            <button
              className="border border-[#e156e6] text-[#e156e6] hover:bg-[#e156e6] hover:text-black font-bebas px-12 py-4 text-xl transition duration-300 tracking-wider"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default FeatureSection;
