import React from "react";
import aceTechimage from "../assets/images/acetech_image.png";
import acetech_worldwide from "../assets/images/acetech_worldwide.png";
import bgstartup from "../assets/images/bg-gr-4-startup.png";

export default function Hero() {
  return (
    <div
      className="text-white py-12 md:py-20 relative overflow-hidden bg-right bg-no-repeat tracking-wider"
      style={{
        backgroundImage: `url(${bgstartup})`,
        backgroundPosition: `
                    right -100px top 10px,
                    right center
                  `,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 pt-4 pb-8 mx-auto w-full max-w-7xl">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 md:space-y-6 font-bebas">
          <p className="text-lg sm:text-xl md:text-2xl text-white tracking-wide uppercase">
            OPTIMIZE YOUR BUSINESS GROWTH
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white">
            LAUNCHING
            <br />
            YOUR STARTUP
            <br />
            JOURNEY
          </h1>
          <button className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg">
            GET STARTED
            <span>→</span>
          </button>
        </div>

        {/* Right: Image with Overlay */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end md:mr-12">
          <div className="relative w-[90vw] max-w-[350px] sm:max-w-[400px] md:max-w-[450px]">
            {/* Main image */}
            <img
              src={aceTechimage}
              alt="Ace Tech image"
              className="w-full h-auto object-cover shadow-2xl rounded-xl"
            />
            {/* Overlay image */}
            <img
              src={acetech_worldwide}
              alt="Overlay"
              className="
                absolute 
                left-1/2 
                -translate-x-1/2 
                md:left-[-80px] md:translate-x-0
                bottom-[-40px] md:bottom-[100px]
                w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px]
                object-cover shadow-xl
                rounded-full
                z-10
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
