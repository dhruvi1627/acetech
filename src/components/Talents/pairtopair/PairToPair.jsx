import React from "react";
import AtiService from "../../../assets/images/talents/pairtopair/ATI-services-1.png";

const PairToPair = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Left side abstract image
      <div className="absolute left-0 top-0 w-1/3 h-full opacity-30 transform -translate-x-1/4 translate-y-1/4">
        <img
          src={AtiService}
          alt="Abstract wireframe left"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Right side abstract image
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-30">
        <img
          src="/api/placeholder/400/800"
          alt="Abstract wireframe right"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Main content */}
      <div className="relative z-10 text-left max-w-4xl mx-auto px-6 font-bebas tracking-wider">
        <div className="text-white text-7xl md:text-9xl tracking-tight">
          <div>EXPERT SKILL</div>
        </div>

        <div className="text-white text-7xl md:text-9xl ml-[14rem] md:ml-[16rem]">
          <div>MATCHING FOR</div>
        </div>

        <div className="text-7xl md:text-9xl leading-tight tracking-tight mb-20">
          <div className="bg-[#e156e6] bg-clip-text text-transparent leading-tight tracking-tight transform translate-x-8">
            YOUR UNIQUE NEEDS
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/3">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PairToPair;
