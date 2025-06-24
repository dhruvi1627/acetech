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
            left -200px top 200px,
            left center,
            right -200px top 50px,
            right center
          `,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
          backgroundSize: "auto 60%, auto 80%, auto 60%, auto 80%",
        }}
      >
        {/* Main content */}
        <div className="relative z-10 text-left mx-auto px-4 sm:px-6 font-bebas">
          <div className="text-white tracking-wide flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-20 transform">
              Comprehensive
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide sm:pt-2 md:pt-4">
              End-to-end startup
            </div>
          </div>

          <div className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl sm:ml-8 md:ml-12 lg:ml-[14rem] xl:ml-[16rem] mt-2 sm:mt-0">
            <div>support your partner</div>
          </div>

          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wide mb-12 sm:mb-16 md:mb-20 mx-auto w-fit mt-4 sm:mt-0">
            <div className="bg-[#e156e6] bg-clip-text text-transparent">
              from idea to scale
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="w-6 h-8 sm:w-8 sm:h-12 border-2 border-white rounded-full flex justify-center items-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </div>
    </>
  );
}
