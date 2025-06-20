import React, { useState, useEffect } from "react";
import Mask_groupHome_page from "../assets/images/Mask_groupHome_page.png";
import Mask_groupHome_page_1 from "../assets/images/Mask_groupHome_page_1.png";
import Mask_groupHome_page_2 from "../assets/images/Mask_groupHome_page_2.png";


function Work() {
  const [talentType, setTalentType] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const talents = React.useMemo(
    () => [
      "STARTUPS",
      "ENTREPRENEURS",
      "SMES",
      "INVENTORS ND PARTNERS",
    ],
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
    <div className=" text-white py-20 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-xl font-semibold font-roboto">WHAT WE DO</h2>
        <h3 className="text-5xl font-bold mb-4 font-bebas">
          TALENTS FOR <span className="underline">{talentType}</span>
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-15 mt-8">
          <div
            className="w-80"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icon */}
            <div
              className={`rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                hoveredCard === 1 ? "bg-blue-500" : "bg-gray-800"
              }`}
            >
              <img
                src={Mask_groupHome_page}
                alt="Pair-to-Pair Icon"
                className="rounded-full"
              />
            </div>
            <h4 className="text-3xl font-semibold mb-2 font-bebas">
              PAIR-TO-PAIR
            </h4>
            <p className="text-gray-500 text-sm mb-4 font-roboto">
              Two experts collaborating for quality and innovation.
            </p>
            <div className="flex items-center justify-center gap-2">
              {hoveredCard === 1 && (
                <span className="font-bebas text-sm tracking-wider opacity-0 animate-fadeIn">
                  READ MORE
                </span>
              )}
              <p className="text-3xl">+</p>
            </div>
          </div>
          <div
            className="w-80"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icon */}
            <div
              className={`rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                hoveredCard === 2 ? "bg-blue-500" : "bg-gray-800"
              }`}
            >
              <img
                src={Mask_groupHome_page_1}
                alt="Dedicated Team Icon"
                className="rounded-full"
              />
            </div>
            <h4 className="text-3xl font-semibold mb-2 font-bebas">
              DEDICATED TEAM
            </h4>
            <p className="text-gray-400 mb-4 font-roboto">
              A full team committed to comprehensive support.
            </p>
            <div className="flex items-center justify-center gap-2">
              {hoveredCard === 2 && (
                <span className="font-bebas text-sm tracking-wider opacity-0 animate-fadeIn">
                  READ MORE
                </span>
              )}
              <p className="text-3xl">+</p>
            </div>
          </div>
          <div
            className="w-80"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icon */}
            <div
              className={`rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                hoveredCard === 3 ? "bg-blue-500" : "bg-gray-800"
              }`}
            >
              <img
                src={Mask_groupHome_page_2}
                alt="Task Force Icon"
                className="rounded-full"
              />
            </div>
            <h4 className="text-2xl font-semibold mb-2 font-bebas">
              TASK FORCE
            </h4>
            <p className="text-gray-400 mb-4 font-roboto">
              Specialized experts for critical milestones and challenges.
            </p>
            <div className="flex items-center justify-center gap-2">
              {hoveredCard === 3 && (
                <span className="font-bebas text-sm tracking-wider opacity-0 animate-fadeIn">
                  READ MORE
                </span>
              )}
              <p className="text-3xl">+</p>
            </div>
          </div>
        </div>
      </div>

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
