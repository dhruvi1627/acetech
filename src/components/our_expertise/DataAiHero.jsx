import React from "react";
import dataDrivenInnovation from "../../assets/images/our-expertise/Data-Driven-Innovation.jpg";
import dataDrivenInnovation2 from "../../assets/images/our-expertise/Data-Driven-Innovation-2.jpg";

const DataAiHero = () => {
  return (
    <section className="text-white min-h-screen flex items-center px-12 mx-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start pt-20">
          {/* Left Side Content */}
          <div className="space-y-8 tracking-wider">
            <div className="space-y-4">
              <p className="text-lg font-medium tracking-wider uppercase font-bebas">
                DATA & AI SOLUTIONS
              </p>
              <h1 className="text-5xl font-bold mb-4 font-bebas">
                UNLOCKING THE POWER OF
                <br />
                DATA-DRIVEN INNOVATION
              </h1>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-2xl font-roboto">
              In today's digital age, data is one of the most valuable assets a
              business can possess. Leveraging advanced data analytics and
              artificial intelligence (AI) can provide insights that drive
              smarter decisions, optimize operations, and fuel innovation. At
              ATI, we specialize in harnessing the power of data and AI to
              transform businesses, delivering cutting-edge solutions that give
              you a competitive edge in the marketplace.
            </p>

            {/* Right-aligned image inside left content */}
            <div className="flex justify-end">
              <div className="relative overflow-hidden shadow-2xl mt-8 w-1/2">
                <img
                  src={dataDrivenInnovation2}
                  alt="Data-driven innovation visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side Image - Sticky */}
          <div className="sticky top-0">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={dataDrivenInnovation}
                alt="Data and AI solutions visualization"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAiHero;
