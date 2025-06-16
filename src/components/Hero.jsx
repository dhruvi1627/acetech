import React from "react";
import aceTechimage from "../assets/acetech_image.png";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 pt-4 pb-8 max-w-7xl mx-auto">
      {/* Left: Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <p className="text-lg text-white">OPTIMIZE YOUR BUSINESS GROWTH</p>
        <h1 className="text-7xl md:text-7xl font-bold leading-tight">
          <span className="text-white">LAUNCHING YOUR STARTUP JOURNEY</span>
        </h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={aceTechimage} alt="Ace Tech image" className="" />
      </div>
    </section>
  );
}
