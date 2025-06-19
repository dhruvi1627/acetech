import React from "react";
import heroTalent from "../../assets/images/talents/AI-network-revolution-and-connectivity.png";

export default function TalentsHero() {
  return (
    <>
      <section className="py-10 md:py-20">
        <div className="text-white font-roboto flex flex-col items-center tracking-wider px-4 max-w-5xl mx-auto">
          {/* First Row */}
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start max-w-5xl">
            <div className="mt-4">
              <p className="bg-[#9752e5] rounded-lg p-3 text-center font-bebas inline-block">
                Discover Our Talent Hub Now!
              </p>
            </div>
            <div className="font-bebas md:ml-auto">
              <p className="text-4xl md:text-6xl lg:text-[120px] uppercase leading-none">
                REVOLUTIONIZING
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center max-w-5xl mt-4 md:mt-0">
            <div className="font-bebas">
              <p className="text-4xl md:text-6xl lg:text-[120px] uppercase leading-none">
                SKILL MATCHING
              </p>
            </div>
            <div className="md:ml-auto">
              <img
                src={heroTalent}
                alt="Ace Tech Logo"
                className="w-32 md:w-60 h-auto"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end max-w-5xl">
            <div className="order-2 md:order-1 mb-4">
              <p className="text-[#a8a8a9] text-center md:text-left text-lg md:text-xl">
                Connect with Top Talent for Seamless
                <br />
                Project Success, Growth, and Innovation
              </p>
            </div>
            <div className="font-bebas order-1 md:order-2 md:ml-auto">
              <p className="text-4xl md:text-6xl lg:text-[120px] uppercase leading-none">
                AND SOLUTIONS
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
