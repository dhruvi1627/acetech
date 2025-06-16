import React from "react";
import aceTechimage from "../assets/acetech_image.png";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-4 pb-8 mx-auto w-full">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
        <p className="text-xs md:text-sm text-white font-semibold tracking-wide uppercase">
          OPTIMIZE YOUR BUSINESS GROWTH
        </p>
        <h1 className="text-6xl md:text-6xl font-bold leading-tight text-white">
          LAUNCHING<br />YOUR STARTUP<br />JOURNEY
        </h1>
        <br></br>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-8 py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg">
          GET STARTED
          <span>→</span>
        </button>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img src={aceTechimage} alt="Ace Tech image" className="" />
      </div>
    </div>
  );
}
