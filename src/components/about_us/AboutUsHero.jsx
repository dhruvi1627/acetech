import React from 'react';
import aboutUsImage from '../../assets/images/about_us/aboutus_1.jpg';
import aboutUs from '../../assets/images/about_us/aboutus_2.jpg';
import { Brain, Disc } from 'lucide-react';

const AboutUsHero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-12 mx-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center pt-20">
          {/* Left Side Content */}
          <div className="max-h-screen overflow-y-auto pr-2 mt-20 hide-scrollbar space-y-8 tracking-wider">
            <h1 className="text-4xl lg:text-5xl xl:text-5xl font-semibold leading-tight font-bebas">
              ATI - DRIVING INNOVATION
              <br />
              <span>THROUGH AGILE</span> AND LEAN
              <br />
              SOLUTIONS
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-2xl font-roboto">
              At ATI, we believe in empowering businesses to drive innovation and
              <br />
              create transformative solutions. As a leading tech company specializing in
              <br />
              agile methodologies and lean principles, we are constantly helping
              <br />
              startups, enterprises, and organizations navigate the complexities of the
              <br />
              digital landscape. Our mission is to empower businesses with the tools,
              <br />
              talent, and technology they need to thrive in a rapidly evolving world.
            </p>

            {/* Right-aligned image inside left content */}
            <div className="flex justify-end">
              <div className="relative overflow-hidden shadow-2xl mt-8 w-1/2">
                <img
                  src={aboutUs}
                  alt="Team collaboration in modern office space with agile methodologies"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={aboutUsImage}
                alt="Team collaboration in modern office space with agile methodologies"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Mission and Vision Cards - Positioned below main content */}
        <div className="grid md:grid-cols-2 mt-20 pb-20 font-roboto h-[500px] w-full ">
          <div className="p-10 border border-gray-700 space-y-4 ">
            <div className="text-pink-400">
              <Brain size={48} />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wider">
              Our Mission - Empowering Innovation
            </h2>
            <p className="text-gray-300">
              Our mission is to enable businesses to achieve their full potential by 
              <br />
              delivering agile, lean, and innovative technology solutions. We strive to be
              <br />
              the trusted partner that organizations turn to when they need to navigate
              <br />
              digital transformation, optimize their operations, and achieve sustainable growth.
            </p>
          </div>
          <div className="p-10 border border-gray-700 space-y-4">
            <div className="text-pink-400">
              <Disc size={48} />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-wider">
              Our Vision - Shaping the Future
            </h2>
            <p className="text-gray-300">
              We envision a future where businesses of all sizes can leverage advanced
              <br />
              technologies to drive innovation, efficiency, and growth. By staying at the 
              <br /> 
              forefront of technological advancements and maintaining a customer-
              <br />
              centric approach, ATI aims to lead the way in transforming industries and
              <br />
              improving lives through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;