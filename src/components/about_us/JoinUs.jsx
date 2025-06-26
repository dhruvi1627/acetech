import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import about from "../../assets/images/about_us/about-s.jpg";

const JoinUs = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen text-white bg-transparent">
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row min-h-screen justify-center">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/3 relative h-64 sm:h-80 md:h-96 lg:h-auto">
          <img
            src={about}
            alt="Professional business meeting with handshake"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 py-10 lg:py-0">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-lg sm:text-xl font-semibold tracking-wide uppercase mb-2 sm:mb-4 font-bebas">
              JOIN US
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 font-bebas tracking-wider">
              OPPORTUNITIES FOR COLLABORATION
              <br />
              AND GROWTH AT ATI
            </h1>
          </div>

          {/* Navigation Sections */}
          <div className="space-y-0">
            {/* Careers at ATI */}
            <div className="border-b border-gray-700">
              <div
                className="flex items-center justify-between cursor-pointer py-4 sm:py-6 transition-colors"
                onClick={() => toggleSection("careers")}
              >
                <h2 className="text-xl sm:text-2xl font-bold font-bebas tracking-wider">
                  CAREERS AT ATI
                </h2>
                <ArrowRight
                  className={`w-6 h-6 transition-transform ${
                    openSection === "careers" ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openSection === "careers" && (
                <div className="pb-4 sm:pb-6 -mt-2 hover:text-purple-400">
                  <p className="text-base sm:text-lg leading-relaxed font-bebas">
                    WE ARE ALWAYS LOOKING FOR PASSIONATE, TALENTED INDIVIDUALS
                    TO JOIN OUR TEAM. IF YOU'RE READY
                    <br className="hidden sm:block" />
                    TO MAKE A DIFFERENCE AND WORK ON EXCITING PROJECTS THAT
                    SHAPE THE FUTURE, EXPLORE OUR
                    <br className="hidden sm:block" />
                    CAREER OPPORTUNITIES AND BECOME A PART OF THE ATI FAMILY.
                  </p>
                </div>
              )}
            </div>

            {/* Partner with Us */}
            <div className="border-b border-gray-700">
              <div
                className="flex items-center justify-between cursor-pointer py-4 sm:py-6 transition-colors"
                onClick={() => toggleSection("partner")}
              >
                <h2 className="text-xl sm:text-2xl font-bold font-bebas tracking-wider">
                  PARTNER WITH US
                </h2>
                <ArrowRight
                  className={`w-6 h-6 transition-transform ${
                    openSection === "partner" ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openSection === "partner" && (
                <div className="pb-4 sm:pb-6 -mt-2 hover:text-purple-400 ">
                  <p className="text-base sm:text-lg leading-relaxed font-bebas tracking-wider">
                    At ATI, we believe in the power of collaboration. If you’re
                    interested in partnering with us
                    <br className="hidden sm:block" />
                    to deliver innovative solutions to businesses worldwide,
                    we’d love to hear from you.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <div className="border-b border-gray-700">
              <div
                className="flex items-center justify-between cursor-pointer py-4 sm:py-6 transition-colors"
                onClick={() => toggleSection("contact")}
              >
                <h2 className="text-xl sm:text-2xl font-bold font-bebas tracking-wider">
                  CONTACT US
                </h2>
                <ArrowRight
                  className={`w-6 h-6 transition-transform ${
                    openSection === "contact" ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openSection === "contact" && (
                <div className="pb-4 sm:pb-6 -mt-2 hover:text-purple-400">
                  <p className="text-base sm:text-lg leading-relaxed font-bebas tracking-wider">
                    Whether you’re a business looking for cutting-edge solutions
                    or a professional seeking new
                    <br className="hidden sm:block" />
                    opportunities, ATI is here to help. Reach out to us today
                    and discover how we can work
                    <br className="hidden sm:block" />
                    together to achieve your goals.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
