import React from "react";
import aboutUsImage from "../../assets/images/about_us/aboutus_1.jpg";
import aboutUs from "../../assets/images/about_us/aboutus_2.jpg";
import { Brain, Disc } from "lucide-react";

const AboutUsHero = () => {
  return (
    <section className="text-white min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 mx-2 sm:mx-4 md:mx-8">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center pt-10 md:pt-16 lg:pt-20">
          {/* Left Side Content */}
          <div className="max-h-[70vh] md:max-h-screen overflow-y-auto pr-0 md:pr-2 mt-10 md:mt-20 hide-scrollbar space-y-6 md:space-y-8 tracking-wider">
            <h1 className="text-3xl sm:text-[26px] lg:text-5xl xl:text-[57px] font-semibold leading-tight font-bebas sm:w-full">
              ATI - DRIVING INNOVATION THROUGH AGILE AND LEAN SOLUTIONS
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-full md:max-w-2xl sm:text-[15px] font-roboto text-base md:text-lg">
              At ATI, we believe in empowering businesses to drive innovation
              and create transformative solutions. As a leading tech company
              specializing in agile methodologies and lean principles, we are
              constantly helping startups, enterprises, and organizations
              navigate the complexities of the digital landscape. Our mission is
              to empower businesses with the tools, talent, and technology they
              need to thrive in a rapidly evolving world.
            </p>

            {/* Right-aligned image inside left content */}
            <div className="flex justify-end">
              <div className="relative overflow-hidden shadow-2xl mt-6 md:mt-8 w-2/3 sm:w-1/2">
                <img
                  src={aboutUs}
                  alt="Team collaboration in modern office space with agile methodologies"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative mt-10 md:mt-0">
            <div className="relative overflow-hidden shadow-2xl rounded-lg">
              <img
                src={aboutUsImage}
                alt="Team collaboration in modern office space with agile methodologies"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-pink-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Mission and Vision Cards - Positioned below main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 pb-10 md:pb-20 font-roboto w-full">
          <div className="p-6 md:p-10 border border-gray-700 space-y-4 bg-black/30">
            <div className="text-pink-400">
              <Brain size={40} className="size-20" />
            </div>
            <h2 className="text-xl md:text-2xl xm:text-[15px] xl:text-[17px] font-bold uppercase tracking-wider">
              Our Mission - Empowering Innovation
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              Our mission is to enable businesses to achieve their full
              potential by delivering agile, lean, and innovative technology
              solutions. We strive to be the trusted partner that organizations
              turn to when they need to navigate digital transformation,
              optimize their operations, and achieve sustainable growth.
            </p>
          </div>
          <div className="p-6 md:p-10 border border-gray-700 space-y-4 bg-black/30">
            <div className="text-pink-400">
              <Disc size={40} className="size-20" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
              Our Vision - Shaping the Future
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              We envision a future where businesses of all sizes can leverage
              advanced technologies to drive innovation, efficiency, and growth.
              By staying at the 11forefront of technological advancements and
              maintaining a customer-centric approach, ATI aims to lead the way
              in transforming industries and improving lives through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;