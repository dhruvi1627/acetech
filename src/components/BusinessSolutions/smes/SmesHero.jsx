import React from "react";

const SmesHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 text-left max-w-6xl mx-auto px-6 font-bebas tracking-wider">
        <div className="mt-16">
          {/* First line with STARTUP WITH inline */}
          <div className="flex items-start gap-8">
            <div className="text-white text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
              EMPOWER YOUR  
            </div>
            <div className="text-white text-lg md:text-6xl font-normal tracking-widest mt-2">
              SME WITH 
            </div>
          </div>

          {/* Second line - right aligned */}
          <div className="flex justify-end mt-4">
            <div className="text-white text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
              TOP TALENT AND 
            </div>
          </div>

          {/* Third line - left aligned with purple color */}
          <div className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mt-4 mb-20">
            <div className="bg-[#e156e6] bg-clip-text text-transparent">
              ADVANCED TECH
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmesHero;
