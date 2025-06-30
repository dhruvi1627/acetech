import React from "react";
import { ArrowRight } from "lucide-react";
import serviceImage from "../../assets/images/services/Services_ati.png";
import { useNavigate } from "react-router-dom";

const Approach = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen text-white relative overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10 lg:ml-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden shadow-2xl transform transition-transform duration-700">
              {/* Main Image */}
              <div className="aspect-[4/3] relative">
                <img
                  src={serviceImage}
                  alt="Digital creative workspace with futuristic elements"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Header tag */}
            <div className="inline-block">
              <span className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-widest font-bebas">
                Creative Approach
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight font-bebas tracking-widest">
              <span className="block">WE ARE THE DIGITAL</span>
              <span className="block">GENERATION, READY FOR</span>
              <span className="">CRAZY IDEAS AND</span>
              <br />
              <span className="">EXPERIMENTS</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mt-4 md:mt-6 font-roboto">
              We are the digital generation, embracing bold ideas and
              experiments to innovate and shape a transformative future
              together.
            </p>

            {/* CTA Button */}
            <div className="pt-4 md:pt-6">
              <button
                onClick={() => navigate(`/about-us`)}
                className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg font-bebas tracking-wider rounded"
              >
                ABOUT US
                <span className="hidden sm:inline">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
