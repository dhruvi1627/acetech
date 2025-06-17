import React, { useState, useEffect } from 'react';
import data_and_ai from '../assets/images/data_and_ai.png';
import app_development from '../assets/images/app_development.png';
import system_integration from '../assets/images/system_integration.png';
import tech_innovation from '../assets/images/tech_innovation.png';
import digital_transformation from '../assets/images/digital_transformation.png';
import cyber_security from '../assets/images/cyber_security.png';
import ar_and_mr from '../assets/images/ar_and_mr.png';
import blockchain from '../assets/images/blockchain.png';

const Expertise = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const expertiseData = [
    {
      id: 1,
      title: "DATA & AI",
      image: data_and_ai,
    },
    {
      id: 2,
      title: "APP DEVELOPMENT",
      image: app_development,
    },
    {
      id: 3,
      title: "SYSTEM INTEGRATION",
      image: system_integration,
    },
    {
      id: 4,
      title: "TECH INNOVATION",
      image: tech_innovation,
    },
    {
      id: 5,
      title: "DIGITAL TRANSFORMATION",
      image: digital_transformation,
    },
    {
      id: 6,
      title: "CYBERSECURITY",
      image: cyber_security,
    },
    {
      id: 7,
      title: "AR & MR",
      image: ar_and_mr,
    },
    {
      id: 8,
      title: "BLOCKCHAIN & WEB 3.0",
      image: blockchain,
    }
  ];

  // Auto-carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 4) % expertiseData.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [expertiseData.length]);

  // Get current 4 items to display
  const getCurrentItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(expertiseData[(currentSlide + i) % expertiseData.length]);
    }
    return items;
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-16 tracking-wider">
          OUR EXPERTISES
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ease-in-out">
            {getCurrentItems().map((item, index) => (
              <div
                key={`${item.id}-${currentSlide}`}
                className="group relative h-96 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`
                  }}
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-0 transition-opacity duration-500`} />

                {/* Purple Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Futuristic Grid Overlay */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                  <div className="w-full h-full"
                    style={{
                      backgroundImage: `
                           linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
                         `,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>



                {/* Content */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full">
                    <h3 className="text-white text-xl md:text-2xl font-bold tracking-wider transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Number */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-2xl font-bold">
                    {item.id}.
                  </span>
                </div>

                {/* Particle Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute bottom-20 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;