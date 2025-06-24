import React from "react";
import AtiService from "../../../assets/images/talents/pairtopair/ATI-services-1.png";

const EntrepreneursHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-bebas">
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div>
          {/* First line - left aligned */}
          <div className="text-left">
            <div className="text-white text-5xl md:text-7xl lg:text-9xl xl:text-9xl tracking-tight leading-none font-bebas">
              UNLOCK YOUR ENTREPRENEURIAL
            </div>
          </div>

          {/* Second line - nudged slightly to the right */}
          <div className="text-left ml-60 md:ml-56">
            <div className="text-white text-lg md:text-xl lg:text-8xl font-normal tracking-tight uppercase">
              POTENTIAL WITH
            </div>
          </div>

          {/* Third line - right aligned */}
          <div className="text-right">
            <div className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none font-bebas">
              EXPERT GUIDANCE &
            </div>
          </div>

          {/* Fourth line - left aligned, purple gradient */}
          <div className="text-left">
            <div className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none font-bebas">
              <span className="bg-[#e156e6] bg-clip-text text-transparent">
                STRATEGIC SOLUTIONS
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepreneursHero;
