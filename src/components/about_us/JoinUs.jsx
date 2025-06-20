import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import about from "../../assets/images/about_us/about-s.jpg";

const JoinUs = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Main Content Container */}
      <div className="flex min-h-screen">
        {/* Left Side - Image */}
        <div className="w-1/3 ml-auto relative">
          <img
            src={about}
            alt="Professional business meeting with handshake"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 flex flex-col justify-center px-16 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className=" text-xl font-semibold tracking-wide uppercase mb-4 font-bebas">
              JOIN US
            </h1>
            <h1 className="text-5xl font-semibold mb-8 font-bebas tracking-wider">
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
                className="flex items-center justify-between cursor-pointer py-6 transition-colors"
                onClick={() => toggleSection("careers")}
              >
                <h2 className="text-2xl font-bold font-bebas tracking-wider">
                  CAREERS AT ATI
                </h2>
                <ArrowRight
                  className={`w-6 h-6 transition-transform ${
                    openSection === "careers" ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openSection === "careers" && (
                <div className="pb-6 -mt-2 hover:text-purple-400">
                  <p className="text-lg leading-relaxed font-bebas">
                    WE ARE ALWAYS LOOKING FOR PASSIONATE, TALENTED INDIVIDUALS
                    TO JOIN OUR TEAM. IF YOU'RE READY
                    <br />
                    TO MAKE A DIFFERENCE AND WORK ON EXCITING PROJECTS THAT
                    SHAPE THE FUTURE, EXPLORE OUR
                    <br />
                    CAREER OPPORTUNITIES AND BECOME A PART OF THE ATI FAMILY.
                  </p>
                </div>
              )}
            </div>

            {/* Partner with Us */}
            <div className="border-b border-gray-700">
              <div
                className="flex items-center justify-between cursor-pointer py-6 transition-colors"
                onClick={() => toggleSection("partner")}
              >
                <h2 className="text-2xl font-bold font-bebas tracking-wider">
                  PARTNER WITH US
                </h2>
                <ArrowRight
                  className={`w-6 h-6 transition-transform ${
                    openSection === "partner" ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openSection === "partner" && (
                <div className="pb-6 -mt-2 hover:text-purple-400 ">
                  <p className="text-lg leading-relaxed font-bebas tracking-wider">
                    At ATI, we believe in the power of collaboration. If you’re
                    interested in partnering with us
                    <br />
                    to deliver innovative solutions to businesses worldwide,
                    we’d love to hear from you.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <div className="border-b border-gray-700">
              <div
                className="flex items-center justify-between cursor-pointer py-6 transition-colors"
                onClick={() => toggleSection("contact")}
              >
                <h2 className="text-2xl font-bold font-bebas tracking-wider">
                  CONTACT US
                </h2>
                <ArrowRight
                  className={`w-6 h-6 transition-transform ${
                    openSection === "contact" ? "rotate-90" : ""
                  }`}
                />
              </div>
              {openSection === "contact" && (
                <div className="pb-6 -mt-2 hover:text-purple-400">
                  <p className="text-lg leading-relaxed font-bebas tracking-wider">
                    Whether you’re a business looking for cutting-edge solutions
                    or a professional seeking new
                    <br />
                    opportunities, ATI is here to help. Reach out to us today
                    and discover how we can work
                    <br />
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
