import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Mask_groupHome_page from "../assets/images/Mask_groupHome_page.png";
import Mask_groupHome_page_1 from "../assets/images/Mask_groupHome_page_1.png";
import Mask_groupHome_page_2 from "../assets/images/Mask_groupHome_page_2.png";

function Work() {
  const [talentType, setTalentType] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const navigate = useNavigate();

  const talents = React.useMemo(
    () => ["STARTUPS", "ENTREPRENEURS", "SMES", "INVENTORS AND PARTNERS"],
    []
  );

  useEffect(() => {
    let timeout;
    if (charIndex < talents[textIndex].length) {
      timeout = setTimeout(() => {
        setTalentType(talents[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (charIndex === talents[textIndex].length) {
      timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 1000);
    } else if (charIndex > talents[textIndex].length && talentType.length > 0) {
      timeout = setTimeout(() => {
        setTalentType(talentType.substring(0, talentType.length - 1));
        setCharIndex(charIndex + 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setTextIndex((textIndex + 1) % talents.length);
        setCharIndex(0);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, talents, talentType]);

  return (
    <div className="text-white py-10 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold font-roboto">
          WHAT WE DO
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-bebas">
          TALENTS FOR <span className="underline">{talentType}</span>
        </h3>

        <div className="flex flex-wrap justify-center items-start gap-x-10 gap-y-12 mt-12 max-w-6xl mx-auto">
          {/* Card Component */}
          {[1, 2, 3].map((id) => {
            const data = [
              {
                title: "PAIR-TO-PAIR",
                desc: "Two experts collaborating for quality and innovation.",
                image: Mask_groupHome_page,
                link: "/talent/pair-to-pair",
              },
              {
                title: "DEDICATED TEAM",
                desc: "A full team committed to comprehensive support.",
                image: Mask_groupHome_page_1,
                link: "/talent/dedicated-team",
              },
              {
                title: "TASK FORCE",
                desc: "Specialized experts for critical milestones and challenges.",
                image: Mask_groupHome_page_2,
                link: "/talent/task-force",
              },
            ][id - 1];

            return (
              <div
                key={id}
                className="w-72 transition-all"
                onMouseEnter={() => setHoveredCard(id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div
                  className={`w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 relative group`}
                >
                  {/* SVG Decoration with hover fill change */}
                  <svg
                    className="absolute w-full h-full top-0 left-0 pointer-events-none transition-all duration-300 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 112.77 111.59"
                  >
                    <path
                      d="M-15315.315-17576.43c31.781-22.219,100.99,5.348,96.1,41.223s-33.781,69.844-71.955,60.957S-15347.095-17554.211-15315.315-17576.43Z"
                      transform="translate(15331.737 17584.408)"
                      className="group-hover:fill-blue-500 transition-colors duration-300"
                    />
                  </svg>

                  {/* Image */}
                  <img
                    src={data.image}
                    alt={data.title}
                    className="rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover z-10"
                  />
                </div>

                <h4 className="text-2xl sm:text-3xl font-semibold mb-2 font-bebas text-center">
                  {data.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 font-roboto text-center px-2">
                  {data.desc}
                </p>
                <div
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => navigate(data.link)}
                >
                  {hoveredCard === id && (
                    <span className="font-bebas text-xs sm:text-sm tracking-wider opacity-0 animate-fadeIn pt-2">
                      READ MORE
                    </span>
                  )}
                  <p className="text-2xl sm:text-3xl ">+</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom fadeIn animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Work;
