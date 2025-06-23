import React from "react";
import ATIservices2 from "../../../assets/images/services/end-to-end/ATI-services-2.png";
import bggrmarketing from "../../../assets/images/services/end-to-end/bg-gr-1-marketing-410x547.png";
// Import your left side images
import leftBg1 from "../../../assets/images/services/end-to-end/ATI-services-1.png";
import leftBg2 from "../../../assets/images/services/end-to-end/bg-gr-2-marketing-410x756.png";

export default function EndToEndHero() {
  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-right bg-no-repeat hide-bg-sm"
        style={{
          backgroundImage: `
            url(${leftBg1}),
            url(${leftBg2}),
            url(${ATIservices2}),
            url(${bggrmarketing})
          `,
          backgroundPosition: `
            left -400px top 200px,
            left center,
            right -400px top 50px,
            right center
          `,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        }}
      >
        {/* Main content */}
        <div className="relative z-10 text-left mx-auto px-6 font-bebas">
          <div className="text-white tracking-wide flex space-x-2">
            <div className="text-7xl md:text-9xl -translate-x-20 transform">
              Comprehensive
            </div>
            <div className="text-5xl tracking-wide pt-4">
              End-to-end startup
            </div>
          </div>

          <div className="text-white text-7xl md:text-9xl ml-[14rem] md:ml-[16rem]">
            <div>support your partner</div>
          </div>

          <div className="text-7xl md:text-9xl tracking-wide mb-20 mx-auto w-fit ">
            <div className="bg-[#e156e6] bg-clip-text text-transparent">
              from idea to scale
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
