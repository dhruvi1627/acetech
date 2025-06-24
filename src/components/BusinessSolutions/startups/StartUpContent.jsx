import React from "react";

const cards = [
  {
    title: "TECH STARTUP LAUNCHPAD",
    desc: "From Idea to Market-Ready Product",
  },
  {
    title: "PREMIUM TALENT SERVICE",
    desc: "Access the Best Tech Talent ",
  },
  {
    title: "SCALABLE TECH INFRASTRUCTURE",
    desc: "Build With Confidence",
  },
  {
    title: "STRATEGIC PARTNERSHIP & GROWTH ACCELERATION",
    desc: "Collaborate to Propel Your Business Forward",
  },
  {
    title: "ETHICAL & SUSTAINABLE TECH DEVELOPMENT",
    desc: "Innovate Responsibility for a Better Tomorrow",
  },
];

export default function AboutEndToEnd() {
  const handlePlusClick = (title) => {
    alert(`Clicked: ${title}`);
    // You can expand/collapse more info here
  };

  return (
    <div className="text-white font-roboto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 tracking-wider">
      <h1 className="text-sm sm:text-base md:text-lg font-roboto leading-relaxed">
        Starting and scaling a tech company is a challenging journey. At AceTechInside, we understand the unique hurdles you face, from finding the right
        talent to building a scalable product. We offer targeted solutions designed to solve these problems, backed by the combined expertise of
        seasoned tech entrepreneurs.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 font-roboto">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#242222] p-3 sm:p-4">
            <h2 className="font-bebas text-lg sm:text-xl mb-2">{card.title}</h2>
            <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-[#cccccc]">
              {card.desc}
            </p>
            <button
              className="text-xs sm:text-sm font-roboto"
              onClick={() => handlePlusClick(card.title)}
              aria-label="Expand"
            >
              <span className="flex items-center gap-2">
                <span>Click Here</span>
                <span className="text-lg sm:text-xl">+</span>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
