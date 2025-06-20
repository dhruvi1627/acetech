import React from 'react';
import careerImage from "../../assets/images/career/Maino-elegant-man-suit.png"; 

const CareerHero = () => {
  return (
    <section className="text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 ml-16">
            <h1 className="text-4xl lg:text-7xl font-semibold leading-tight font-bebas tracking-widest">
              CAREER WITH US
            </h1>
            
            <p className="text-sm lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-roboto">
              At ATI, we're more than just a company—we're a pivotal part of the future of 
              innovation. We share our space with entrepreneurs, tech-savvy individuals, 
              SME owners, and investors, fostering collaborations where visionary ideas 
              meet practicality. We promotes agility which reduces stress, and enhances 
              transparency, offering open doors for innovation and creativity.
            </p>
            
            <button className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-8 py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg font-bebas tracking-widest">
                CONTACT US
            </button>
          </div>
          
          {/* Right Image */}
          <div className="w-full flex justify-start">
            <div className="relative -ml-20">
                <img 
                src={careerImage}
                alt="Team collaboration at ATI workspace showing diverse professionals working together on innovative projects"
                className="w-full max-w-[800px] h-[400px] lg:h-[600px] object-cover shadow-2xl"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;