import React from 'react';
import careerImage from "../../assets/images/career/ATI-career-why-work-with-us.jpg"; 

const CareerContent = () => {
  return (
    <section className="text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="w-full flex justify-center">
            <div className="relative">
                <img 
                src={careerImage} 
                alt="Team collaboration at ATI workspace showing diverse professionals working together on innovative projects"
                className="w-full max-w-[800px] h-[400px] lg:h-[600px] object-cover shadow-2xl"
                />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="space-y-8 mr-12">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight font-bebas tracking-widest">
              WHAT YOUR CAREER
              <br />
              LOOKS LIKE WITH US
            </h1>
            
            <p className="text-sm lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-roboto">
              At ATI, we’re more than just a company—we’re a pivotal part of the 
              future of innovation. We share our space with entrepreneurs, tech-
              savvy individuals, SME owners, and investors, fostering collaborations
              where visionary ideas meet practicality. We promotes agility which
              reduces stress, and enhances transparency, offering open doors
              for innovation and creativity.
            </p>

            <p className="text-sm lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-roboto">
              We believe in working together, thinking creatively, and harnessing
              brave ideas to fuel individual career growth. By joining us, you become
              part of a dynamic ecosystem where your career can thrive alongside
              future entrepreneurs, investors, andcstartup initiators. Embrace the
              opportunity to innovate and grow with us as we shape the future
              together.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerContent;