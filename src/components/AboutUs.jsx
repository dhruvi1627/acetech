import React from "react";
import aboutUsImage from "../assets/images/Solving-Startup-Challenges-with-Expertise-and-Innovation-scaled.jpg";

export default function AboutUs() {
  return (
    <div className="bg-[#0a0b13] text-white py-16 px-8">
      {/* Header Section */}
      <div className="mb-12">
        <span className="font-bebas text-sm tracking-wider">ABOUT US</span>
        <h1 className="font-bebas text-4xl md:text-5xl uppercase max-w-4xl mt-4">
          SOLVING STARTUP CHALLENGES WITH EXPERTISE AND INNOVATION
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section - Takes up more space */}
        <div className="lg:w-2/3">
          <img
            src={aboutUsImage}
            alt="Team meeting in purple-lit room"
            className="w-full"
          />
        </div>

        {/* Description Section - Takes up less space */}
        <div className="lg:w-1/3">
          <p className="font-roboto text-gray-300 leading-relaxed">
            Startups face unique challenges that require tailored solutions. At
            ATI, we address these challenges by offering expert talent and
            innovative technology solutions designed to drive growth and
            success.
          </p>
        </div>
      </div>

      {/* Services Grid - Positioned to overlap the image */}
      <div className="mt-[-150px] mr-[-300px] relative z-10">
        <div className="grid md:grid-cols-3 gap-8 bg-[#9752e5] p-8 font-roboto max-w-3xl mx-auto">
          {/* Talent Acquisition */}
          <div className="space-y-4">
            <h3 className="text-xl uppercase font-bebas tracking-wider">
              TALENT ACQUISITION
            </h3>
            <div className="w-12 h-0.5 bg-white"></div>
            <p className="text-white leading-relaxed font-roboto">
              We connect startups with the right talent, ensuring they have the
              expertise needed to innovate and grow.
            </p>
          </div>

          {/* Technology Integration */}
          <div className="space-y-4">
            <h3 className="text-xl uppercase font-bebas tracking-wider">
              TECHNOLOGY INTEGRATION
            </h3>
            <div className="w-12 h-0.5 bg-white"></div>
            <p className="text-white leading-relaxed font-roboto">
              We help startups integrate advanced technologies seamlessly,
              improving efficiency and competitiveness.
            </p>
          </div>

          {/* Scaling Operations */}
          <div className="space-y-4">
            <h3 className="text-xl uppercase font-bebas tracking-wider">
              SCALING OPERATIONS
            </h3>
            <div className="w-12 h-0.5 bg-white"></div>
            <p className="text-white leading-relaxed font-roboto">
              Our agile and lean strategies support startups in scaling their
              operations efficiently, reducing costs and maximizing impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
