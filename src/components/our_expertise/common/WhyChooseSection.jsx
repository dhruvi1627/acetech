import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const WhyChooseSection = ({
  title,
  animatedText,
  challengeTitle,
  challengeContent,
  solutionTitle,
  solutionContent,
  accordionData = [],
  image,
  imageAlt = "Why choose us",
  buttonText,
  buttonAction,
  backgroundColor = "#620e6e",
  buttonHoverColor = "#e156e6",
}) => {
  const [openAccordion, setOpenAccordion] = useState(
    accordionData[0]?.id || null
  );
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!animatedText) {
      setDisplayText("");
      return;
    }

    let timeout;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 2000;

    const type = () => {
      if (isTyping && !isDeleting) {
        if (displayText.length < animatedText.length) {
          setDisplayText(animatedText.slice(0, displayText.length + 1));
          timeout = setTimeout(type, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, pauseDuration);
        }
      } else if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(animatedText.slice(0, displayText.length - 1));
          timeout = setTimeout(type, deletingSpeed);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(type, pauseDuration);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting, animatedText]);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="text-white py-8 mt-8" style={{ backgroundColor }}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {title && (
            <h2 className="text-5xl font-bold font-bebas tracking-wider text-center mb-8">
              {title}
              {animatedText && " "}
              {displayText}
              {animatedText && <span className="animate-pulse">_</span>}
            </h2>
          )}

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Image */}
            {image && (
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

            {/* Right Side - Content */}
            <div className={`space-y-12 ${!image ? "lg:col-span-2" : ""}`}>
              {/* Challenge Section */}
              {challengeTitle && challengeContent && (
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bebas tracking-wider">
                    {challengeTitle}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-roboto">
                    {challengeContent}
                  </p>
                </div>
              )}

              {/* Solution Section */}
              {solutionTitle && solutionContent && (
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bebas tracking-wider">
                    {solutionTitle}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-roboto">
                    {solutionContent}
                  </p>
                </div>
              )}

              {/* Accordion Features List */}
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
                              ? "rotate-45"
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

              {/* Button */}
              {buttonText && (
                <div>
                  <button
                    onClick={buttonAction}
                    className="font-bebas px-12 py-4 text-xl transition duration-300 tracking-wider"
                    style={{
                      backgroundColor: "white",
                      color: backgroundColor,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = buttonHoverColor;
                      e.target.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = backgroundColor;
                    }}
                  >
                    {buttonText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
