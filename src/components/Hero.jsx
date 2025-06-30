import React from "react";
import { useNavigate } from "react-router-dom";
import aceTechimage from "../assets/images/acetech_image.png";
import acetech_worldwide from "../assets/images/acetech_worldwide.png";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 mx-auto text-white">
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 sm:space-y-6 font-bebas">
        <p className="text-[19px] md:text-[18px] lg:text-[17px]">
          OPTIMIZE YOUR BUSINESS GROWTH
        </p>
        <h1 className="text-[77px] md:text-[66px] lg:text-[80px] leading-none">
          <span className="block">LAUNCHING</span>
          <span className="block">YOUR STARTUP</span>
          <span className="block">JOURNEY</span>
        </h1>

        <button
          onClick={() => navigate(`/contact-us`)}
          className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base transition duration-300 inline-flex items-center gap-2 shadow-lg"
        >
          GET STARTED
          <span>→</span>
        </button>
      </div>

      {/* Right: Image with Overlay */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <div className="relative w-full max-w-[500px]">
          <img
            src={aceTechimage}
            alt="Ace Tech"
            className="w-full h-auto object-cover shadow-2xl"
          />
          <img
            src={acetech_worldwide}
            alt="Overlay"
            className="absolute left-[-30px] sm:left-[-40px] md:left-[-60px] bottom-[40px] sm:bottom-[60px] md:bottom-[80px] w-[80px] sm:w-[150px] md:w-[200px] h-auto object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
