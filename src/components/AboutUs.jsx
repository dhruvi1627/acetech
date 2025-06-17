import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-[#0a0b13] text-white py-16 px-8">
      {/* Header Section */}
      <div className="mb-12">
        <span className="font-bebas text-sm tracking-wider">ABOUT US</span>
        <h1 className="font-bebas text-4xl md:text-5xl uppercase max-w-4xl mt-4 mb-6">
          SOLVING STARTUP CHALLENGES WITH EXPERTISE AND INNOVATION
        </h1>
      </div>
      <div>
        <div></div>
        <div>
          <p className="font-roboto text-gray-400 max-w-2xl leading-relaxed">
            Startups face unique challenges that require tailored solutions. At
            ATI, we address these challenges by offering expert talent and
            innovative technology solutions designed to drive growth and
            success.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mt-12">
        <div className="grid gap-8 bg-[#9752e5] p-12 font-roboto max-w-5xl">
          {/* Talent Acquisition Card */}
          <div className="space-y-4 pb-8">
            <h3 className="text-2xl uppercase font-bebas tracking-wider">
              Talent Acquisition
            </h3>
            <div className="w-12 h-0.5 bg-white"></div>
            <p className="text-white leading-relaxed font-roboto text-lg max-w-2xl">
              We connect startups with the right talent, ensuring they have the
              expertise needed to innovate and grow.
            </p>
          </div>

          {/* Technology Integration Card */}
          <div className="space-y-4 pb-8">
            <h3 className="text-2xl uppercase font-bebas tracking-wider">
              Technology Integration
            </h3>
            <div className="w-12 h-0.5 bg-white"></div>
            <p className="text-white font-roboto leading-relaxed text-lg max-w-2xl">
              We help startups integrate advanced technologies seamlessly,
              improving efficiency and competitiveness.
            </p>
          </div>

          {/* Scaling Operations Card */}
          <div className="space-y-4">
            <h3 className="text-2xl uppercase font-bebas tracking-wider">
              Scaling Operations
            </h3>
            <div className="w-12 h-0.5 bg-white"></div>
            <p className="text-white font-roboto leading-relaxed text-lg max-w-2xl">
              Our agile and lean strategies support startups in scaling their
              operations efficiently, reducing costs and maximizing impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
