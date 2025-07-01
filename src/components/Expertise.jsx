import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import data_and_ai from "../assets/images/data_and_ai.png";
import app_development from "../assets/images/app_development.png";
import system_integration from "../assets/images/system_integration.png";
import tech_innovation from "../assets/images/tech_innovation.png";
import digital_transformation from "../assets/images/digital_transformation.png";
import cyber_security from "../assets/images/cyber_security.png";
import ar_and_mr from "../assets/images/ar_and_mr.png";
import blockchain from "../assets/images/blockchain.png";

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

const Expertise = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e) => {
      const isInside = scrollContainer.contains(e.target);
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      const scrollingRight = e.deltaY > 0 || e.deltaX > 0;
      const scrollingLeft = e.deltaY < 0 || e.deltaX < 0;

      const atStart = scrollLeft === 0;
      const atEnd = Math.ceil(scrollLeft) >= maxScrollLeft;

      // Only block page scroll if scrolling inside the container and not at edges
      if (
        isInside &&
        ((scrollingRight && !atEnd) || (scrollingLeft && !atStart))
      ) {
        e.preventDefault();
        scrollContainer.scrollBy({
          left: e.deltaY !== 0 ? e.deltaY : e.deltaX,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="py-20 px-4">
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .horizontal-scroll {
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
        }
        .horizontal-scroll > * {
          scroll-snap-align: start;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-16 tracking-wider">
          OUR EXPERTISES
        </h2>

        <div className="overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex horizontal-scroll gap-6 py-4 scrollbar-hide"
          >
            {expertiseData.map(({ id, title, image, slug }) => (
              <div
                key={id}
                className="min-w-[250px] md:min-w-[300px] h-96 flex-shrink-0 group relative overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                onClick={() => navigate(`/our-expertise/${slug}`)}
                tabIndex={0}
                role="button"
                aria-label={`Go to ${title}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-[#7f62e4] opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 flex items-end p-6 z-30">
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-wider group-hover:-translate-y-2 transition-transform duration-500">
                    {title}
                  </h3>
                </div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <span className="text-white text-2xl font-bold">{id}.</span>
                </div>
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
