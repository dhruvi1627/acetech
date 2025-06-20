import React from 'react';
import { ArrowRight } from 'lucide-react';
import defaultImg from "../../assets/images/services/default.png"; 

const ServiceHero = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden mt-36">
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Main content */}
          <div className="space-y-8 pl-20 mt-20">
            <div className="space-y-6">
              <p className="text-xl font-medium tracking-wider uppercase font-bebas">
                All You Need
              </p>
              
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight font-bebas tracking-widest">
                TURNING IDEAS INTO IMPACTFUL
                <br />
                <span className="">
                  VENTURES
                </span>
              </h1>
              
              <p className="text-gray-300 text-ls leading-relaxed max-w-xl font-roboto">
                We believe in transforming innovative ideas into successful ventures. From 
                <br />
                initial concept to market launch, our comprehensive support is tailored to
                <br /> 
                meet the unique needs of your startup. With a focus on agility and cutting-
                <br />
                edge technology, we ensure your product development journey is smooth
                <br /> 
                and efficient. Whether you're just starting out or scaling up, we're here to help 
                <br />
                you achieve your goals at every stage.
              </p>
            </div>
            
            <button className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-8 py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg">
                CONTACT US
                <span>→</span>
            </button>
          </div>
          
          {/* Right side - Services Grid */}
          <div className="grid grid-cols-2 gap-6 h-[600px]">
            {/* Service 1 - Top Left */}
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 transition-all duration-300 group h-[300px] flex flex-col items-center justify-center text-center hover:bg-[#E156E6]">
                <div className="mb-6">
                <div className="w-16 h-8 bg-[#E156E6] group-hover:bg-white transform rotate-45 mb-4 mx-auto transition-colors duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-3 transition-colors leading-tight">
                END-TO-END STARTUP SUPPORT
                </h3>
                <p className="text-sm">
                Your Partner from Idea to Scale
                </p>
            </div>

            {/* Service 2 - Center Right (spans both rows vertically) */}
            <div className="row-span-2 flex items-center justify-center ">
              <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 transition-all duration-300 group w-full h-[300px] flex flex-col items-center justify-center text-center hover:bg-[#E156E6]">
                  <div className="mb-6">
                  <div className="w-12 h-12 bg-[#E156E6] group-hover:bg-white flex items-center justify-center mb-4 mx-auto transition-colors duration-300">
                      <div className="w-6 h-6 bg-gray-900 group-hover:bg-gray-900 rounded-sm transition-colors duration-300"></div>
                  </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 transition-colors leading-tight">
                  NEXT-GEN TECH INTEGRATION
                  </h3>
                  <p className="text-gray-400 text-sm">
                  Transform Your Business with Cutting-Edge Technologies
                  </p>
              </div>
            </div>

            {/* Service 3 - Bottom Left */}
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 transition-all duration-300 group h-[300px] flex flex-col items-center justify-center text-center hover:bg-[#E156E6]">
                <div className="mb-6">
                <div className="w-16 h-8 bg-[#E156E6] group-hover:bg-white rounded-full mb-4 mx-auto transition-colors duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-3 transition-colors leading-tight">
                AGILE DEVELOPMENT SPRINT PACKAGES
                </h3>
                <p className="text-gray-400 text-sm">
                Accelerate Your Product Development
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;