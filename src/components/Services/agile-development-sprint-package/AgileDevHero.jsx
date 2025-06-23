import React from "react";
import ATIservices2 from "../../../assets/images/services/end-to-end/ATI-services-2.png";

export default function AgileDevHero() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Main content */}
        <div className="relative z-10 text-left mx-auto px-6 font-bebas">
          <div className="text-white tracking-wide flex space-x-2">
            <div className="text-7xl md:text-9xl -translate-x-20 transform">
              Agile Development
            </div>
            <div className="text-5xl tracking-wide pt-4">Sprint package</div>
          </div>

          <div className="text-white text-7xl md:text-9xl ml-[14rem] md:ml-[16rem]">
            <div>Accelerate Your</div>
          </div>

          <div className="text-7xl md:text-9xl tracking-wide mb-20 mx-auto w-fit ">
            <div className="bg-[#e156e6] bg-clip-text text-transparent">
              product development
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </>
  );
}
