import React from "react";
import aceTechimage from "../assets/images/acetech_image.png";
import acetech_worldwide from "../assets/images/acetech_worldwide.png";
import bgstartup from "../assets/images/bg-gr-4-startup.png"; 

export default function Hero() {
  return (
    <div
      className="text-white py-20 relative overflow-hidden bg-right bg-no-repeat tracking-wider"
      style={{
        backgroundImage: `
                    url(${bgstartup})
                  `,
        backgroundPosition: `
                    right -100px top 10px,
                    right center
                  `,
      }}
    >
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-4 pb-8 mx-auto w-full">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 font-bebas">
        <p className="text-2xl md:text-xl text-white tracking-wide uppercase">
          OPTIMIZE YOUR BUSINESS GROWTH
        </p>
        <h1 className="text-6xl md:text-6xl font-semibold leading-tight text-white">
          LAUNCHING<br />YOUR STARTUP<br />JOURNEY
        </h1>
        <br></br>
        <button className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-8 py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg">
          GET STARTED
          <span>→</span>
        </button>
      </div>

      {/* Right: Image with Overlay */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end mr-12">
        <div className="relative">
          {/* Main image */}
          <img 
            src={aceTechimage} 
            alt="Ace Tech image"
            className="w-full h-full object-cover shadow-2xl"
          />
          {/* Overlay image */}
          <img
            src={acetech_worldwide}
            alt="Overlay"
            className="absolute left-[-80px] bottom-[100px] w-[300px] h-[300px] object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
    </div>
  );
}