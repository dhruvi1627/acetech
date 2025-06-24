import React from "react";

const cards = [
  {
    title: "What is the agile development sprint package",
    desc: "Streamlined solution for rapid development cycles",
  },
  {
    title: "SCALABLE TECH INFRASTRUCTURE",
    desc: "Building a Lean and Robust Foundation",
  },
  {
    title: "BENEFITS OF ATI'S AGILE DEVELOPMENT SPRINT PACKAGE",
    desc: "Accelerate delivery and enhance team collaboration",
  },
  {
    title: "WHY CHOOSE ATI'S AGILE DEVELOPMENT SPRINT PACKAGE?",
    desc: "Proven methods to reduce risks and improve outcomes",
  },
];

export default function AgileAbout() {
  const handlePlusClick = (title) => {
    alert(`Clicked: ${title}`);
    // You can expand/collapse more info here
  };

  return (
    <div className="text-white font-roboto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 tracking-wider">
      <h1 className="text-sm sm:text-base md:text-lg font-roboto leading-relaxed">
        ATI's Agile Development Sprint Package: Accelerate Your Product
        Development In today's fast-paced market, speed and adaptability are key
        to staying ahead of the competition. At ATI, we offer an Agile
        Development Sprint Package designed to help you rapidly develop, test,
        and launch your product. Our approach leverages the power of agile
        methodologies, enabling your startup to iterate quickly, adapt to market
        feedback, and deliver high-quality products on time.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#242222] p-3 sm:p-4">
            <h2 className="font-bebas text-lg sm:text-xl mb-2">{card.title}</h2>
            <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-[#cccccc]">
              {card.desc}
            </p>
            <button
              className="text-xs sm:text-sm font-bebas"
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
