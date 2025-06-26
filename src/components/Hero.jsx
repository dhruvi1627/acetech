import React from "react";
import aceTechimage from "../assets/images/acetech_image.png";
import acetech_worldwide from "../assets/images/acetech_worldwide.png";
import bgstartup from "../assets/images/bg-gr-4-startup.png";

export default function Hero() {
  return (
    <div
      className="text-white py-16 sm:py-20 relative overflow-hidden bg-no-repeat tracking-wider"
      style={{
        backgroundImage: `url(${bgstartup})`,
        backgroundPosition: `right -100px top 10px`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 mx-auto max-w-screen-xl">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 sm:space-y-6 font-bebas">
          <p className="text-lg sm:text-xl md:text-2xl uppercase">
            OPTIMIZE YOUR BUSINESS GROWTH
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            LAUNCHING
            <br />
            YOUR STARTUP
            <br />
            JOURNEY
          </h1>

          <button className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base transition duration-300 inline-flex items-center gap-2 shadow-lg">
            GET STARTED
            <span>→</span>
          </button>
        </div>

        {/* Right: Image with Overlay */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-[90%] sm:w-[80%] md:w-[100%]">
            <img
              src={aceTechimage}
              alt="Ace Tech"
              className="w-full h-auto object-cover shadow-2xl"
            />
            <img
              src={acetech_worldwide}
              alt="Overlay"
              className="absolute left-[-40px] sm:left-[-60px] md:left-[-80px] bottom-[60px] sm:bottom-[80px] md:bottom-[100px] w-[180px] sm:w-[220px] md:w-[300px] h-auto object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
