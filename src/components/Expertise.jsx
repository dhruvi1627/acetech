import React from "react";
import { useNavigate } from "react-router-dom";
import data_and_ai from "../assets/images/data_and_ai.png";
import app_development from "../assets/images/app_development.png";
import system_integration from "../assets/images/system_integration.png";
import tech_innovation from "../assets/images/tech_innovation.png";
import digital_transformation from "../assets/images/digital_transformation.png";
import cyber_security from "../assets/images/cyber_security.png";
import ar_and_mr from "../assets/images/ar_and_mr.png";
import blockchain from "../assets/images/blockchain.png";

const Expertise = () => {
  const navigate = useNavigate();
  const expertiseData = [
    { id: 1, title: "DATA & AI", image: data_and_ai, slug: "data-ai" },
    {
      id: 2,
      title: "APP DEVELOPMENT",
      image: app_development,
      slug: "app-development",
    },
    {
      id: 3,
      title: "SYSTEM INTEGRATION",
      image: system_integration,
      slug: "system-integration",
    },
    {
      id: 4,
      title: "TECH INNOVATION",
      image: tech_innovation,
      slug: "tech-innovation",
    },
    {
      id: 5,
      title: "DIGITAL TRANSFORMATION",
      image: digital_transformation,
      slug: "digital-transformation",
    },
    {
      id: 6,
      title: "CYBERSECURITY",
      image: cyber_security,
      slug: "cybersecurity",
    },
    { id: 7, title: "AR & MR", image: ar_and_mr, slug: "ar-mr" },
    {
      id: 8,
      title: "BLOCKCHAIN & WEB 3.0",
      image: blockchain,
      slug: "blockchain-web3",
    },
  ];

  return (
    <section className="py-20 px-4">
      {/* Inline scrollbar hide styles */}
      <style>
        {`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-16 tracking-wider">
          OUR EXPERTISES
        </h2>

        <div className="overflow-hidden">
          <div
            id="expertise-scroll"
            className="flex overflow-x-auto gap-6 scroll-smooth py-4 scrollbar-hide"
          >
            {expertiseData.map((item) => (
              <div
                key={item.id}
                className="min-w-[250px] md:min-w-[300px] h-96 flex-shrink-0 group relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onClick={() => navigate(`/our-expertise/${item.slug}`)}
                tabIndex={0}
                role="button"
                aria-label={`Go to ${item.title}`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                {/* Purple Overlay on Hover */}
                <div className="absolute inset-0 bg-[#7f62e4] opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                      linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
                    `,
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                {/* Title */}
                <div className="absolute inset-0 flex items-end p-6 z-30">
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-wider transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                    {item.title}
                  </h3>
                </div>

                {/* Number */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <span className="text-white text-2xl font-bold">
                    {item.id}.
                  </span>
                </div>

                {/* Particle */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-30">
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