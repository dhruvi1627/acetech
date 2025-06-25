import React, { useState, useEffect } from "react";
import whyUsDataAi from "../../assets/images/our-expertise/why-us-data-ai-soliution.jpg";
import { ArrowRight } from "lucide-react";

const WhyChooseAti = () => {
  const [openAccordion, setOpenAccordion] = useState("proven-track");
  const [displayText, setDisplayText] = useState("");
  const fullText = "FOR DATA & AI SOLUTIONS?";
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 2000;

    const type = () => {
      if (isTyping && !isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
          timeout = setTimeout(type, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, pauseDuration);
        }
      } else if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
          timeout = setTimeout(type, deletingSpeed);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(type, pauseDuration);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting]);

  const accordionData = [
    {
      id: "cutting-edge",
      title: "CUTTING-EDGE EXPERTISE",
      content: "Our data scientists, AI experts, and engineers are at the forefront of the latest data and AI technologies advancements, ensuring that you benefit from the most innovative solutions available."
    },
    {
      id: "tailored",
      title: "TAILORED SOLUTIONS",
      content: "We understand that every business is unique. That's why we develop customized data and AI strategies that align with your specific goals and requirements."
    },
    {
      id: "agile-lean",
      title: "AGILE AND LEAN METHODOLOGIES",
      content: "We apply agile and lean principles to deliver data and AI solutions that are efficient, scalable, and cost-effective, ensuring you get the maximum return on your investment."
    },
    {
      id: "proven-track",
      title: "PROVEN TRACK RECORD",
      content: "ATI has a history of successfully delivering data and AI solutions that drive real business results. Our clients trust us to deliver the insights and automation they need to stay competitive and thrive in a data-driven world."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="text-white py-8 px-12 mt-8 bg-[#620e6e]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-bebas tracking-wider text-center mb-8">
            WHY CHOOSE ATI {displayText}
            <span className="animate-pulse">_</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={whyUsDataAi}
                  alt="ATI's data and AI expertise in action"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-12">
              {/* Challenge Section */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bebas tracking-wider">
                  CHALLENGE
                </h3>
                <p className="text-gray-300 leading-relaxed font-roboto">
                  Integrating and leveraging advanced data and AI technologies can be complex and resource-intensive, often requiring specialized expertise and significant investment.
                </p>
              </div>

              {/* ATI's Solution Section */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bebas tracking-wider">
                  ATI'S SOLUTION
                </h3>
                <p className="text-gray-300 leading-relaxed font-roboto">
                  ATI's Data & AI Solutions are designed to overcome these challenges, providing businesses with the expertise, tools, and support needed to successfully harness the power of data and AI.
                </p>
              </div>

              {/* Accordion Features List */}
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
                          openAccordion === item.id ? "rotate-90" : "group-hover:translate-x-2"
                        }`}
                      />
                    </div>
                    <div 
                      className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
                        openAccordion === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pb-4 text-gray-300 font-roboto leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div>
                <button className="bg-white text-[#620e6e] hover:bg-[#e156e6] hover:text-white font-bebas px-12 py-4 text-xl transition duration-300 tracking-wider">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAti; 