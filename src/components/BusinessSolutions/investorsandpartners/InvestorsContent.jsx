import React from "react";

const cards = [
  {
    title: "AGILE TALENT ACQUISITION",
    desc: "Attracting And Managing Top Professionals",
  },
  {
    title: "SCALABLE TECH INFRASTRUCTURE",
    desc: "Building a Lean and Robust Foundation",
  },
  {
    title: "IT SUPPORT & MANAGMENT",
    desc: "Streamline perations With Agile Solutions",
  },
  {
    title: "CUSTOM TECH SOLUTIONS",
    desc: "Tailored to Startup Needs With Lean Principles",
  },
  {
    title: "SUPPORTING STARTUP GROWTH",
    desc: "Driving Success With Agile and Lean Strategies",
  },
];

export default function InvestorsContent() {
  const handlePlusClick = (title) => {
    alert(`Clicked: ${title}`);
    // You can expand/collapse more info here
  };

  return (
    <div className="text-white font-roboto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 tracking-wider">
      <h1 className="text-sm sm:text-base md:text-lg font-roboto leading-relaxed">
        At AceTechInside, we understand the pivotal role investors and partners play in the success of startups. To ensure your investments and partnerships are optimized for maximum return, we provide top-tier talent and innovative tech solutions. Our agile and lean approach ensures that startups get the resources and support they need to grow efficiently and effectively.
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
