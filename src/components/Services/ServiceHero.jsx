import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../../assets/images/services/svgviewer-png-output (1).png";

const ServiceHero = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white relative overflow-hidden mt-36 lg:px-20 md:px-16 sm:px-4">
      <div className="container mx-auto px-4 sm:px-6 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left side - Main content */}
          <div className="space-y-8  mt-10 sm:mt-16 md:mt-20">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl font-medium tracking-wider uppercase font-bebas">
                All You Need
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-bebas tracking-widest">
                TURNING IDEAS INTO IMPACTFUL
                <br />
                <span>VENTURES</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-roboto">
                We believe in transforming innovative ideas into successful
                ventures. From initial concept to market launch, our
                comprehensive support is tailored to meet the unique needs of
                your startup. With a focus on agility and cutting- edge
                technology, we ensure your product development journey is smooth
                and efficient. Whether you're just starting out or scaling up,
                we're here to help you achieve your goals at every stage.
              </p>
            </div>
            <button
              onClick={() => navigate(`/contact-us`)}
              className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg rounded"
            >
              CONTACT US
              <span>→</span>
            </button>
          </div>
          {/* Right side - Services Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 h-auto lg:h-[600px] mt-10 lg:mt-0">
            {/* Service 1 - Top Left */}
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 group h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] flex flex-col items-center justify-center text-center hover:bg-[#E156E6]">
              <div className="mb-4 sm:mb-6">
                <svg
                  width="64"
                  height="65"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-[#E156E6] group-hover:fill-white transition-colors duration-300"
                    d="M6.10338 4.88576C-3.60384 21.5267 -1.61039 40.5078 11.217 53.3352C24.6511 66.7693 45.7123 68.416 61.3998 57.2354L64 55.3286L36.8718 28.2004C21.8776 13.2062 9.3969 0.985537 9.05022 0.985537C8.70353 0.985537 7.40346 2.71897 6.10338 4.88576Z"
                    fill="#EC6BC1"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 transition-colors leading-tight">
                END-TO-END STARTUP SUPPORT
              </h3>
              <p className="text-xs sm:text-sm">
                Your Partner from Idea to Scale
              </p>
            </div>
            {/* Service 2 - Center Right (spans both rows vertically) */}
            <div className="row-span-2 flex items-center justify-center">
              <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 transition-all duration-300 group w-full h-[300px] flex flex-col items-center justify-center text-center hover:bg-[#E156E6]">
                <div className="mb-6">
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 sm:w-20 h-auto mx-auto transition-transform duration-300 group-hover:scale-110"
                  >
                    <path
                      className="fill-[#e156e6] group-hover:fill-white transition-colors duration-300"
                      d="M128 256c0-70.7 57.3-128 128-128s128 57.3 128 128v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-35.3-28.7-64-64-64s-64 28.7-64 64v128c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 transition-colors leading-tight">
                  NEXT-GEN TECH INTEGRATION
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm group-hover:text-white">
                  Transform Your Business with Cutting-Edge Technologies
                </p>
              </div>
            </div>

            {/* Service 3 - Bottom Left */}
            <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 group h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] flex flex-col items-center justify-center text-center hover:bg-[#E156E6]">
              <div className="mb-4 sm:mb-6">
                <svg
                  width="65"
                  height="61"
                  viewBox="0 0 65 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-[#E156E6] group-hover:fill-white transition-colors duration-300"
                    d="M0.256223 0.523022C10.1589 2.18667 19.392 9.45416 23.67 18.6439C25.4921 22.5257 25.8089 24.3478 25.8089 30.3687C25.8089 36.7064 25.5713 38.0532 23.2739 42.8064C18.9167 51.9962 10.5006 58.939 0.756348 60.5234C-2.17485 60.9988 8.30097 60.7105 32.1467 60.7105C51.7936 60.7105 65.9743 60.3936 63.7561 60.0768C48.3079 57.7793 37.1376 43.9155 38.2467 28.3089C39.2766 14.6036 50.0508 2.82045 63.7561 0.523022C66.5289 0.0476922 55.4378 0.0267906 32.1467 0.0267906C12.1828 0.0267906 -1.80354 0.206135 0.256223 0.523022Z"
                    fill="#EC6BC1"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 transition-colors leading-tight">
                AGILE DEVELOPMENT SPRINT PACKAGES
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
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
