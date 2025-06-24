import React from "react";

const cards = [
  {
    title: "ENTREPRENEURIAL ROADMAP",
    desc: "From Idea to Thriving Business",
  },
  {
    title: "STRATEGIC ADVISORY SERVICES",
    desc: "Expert Guidance for Every Stage",
  },
  {
    title: "GROWTH ACCELERATION",
    desc: "Scaling Your Business for Long-term Succeess",
  },
  {
    title: "ENTREPRENEURIAL RESILENCE & SUSTAINABILITY",
    desc: "Build a Robust Business Model that Thrives in Changing Environments",
  },
];

export default function StartUpContent() {
  const handlePlusClick = (title) => {
    alert(`Clicked: ${title}`);
    // You can expand/collapse more info here
  };

  return (
    <div className="text-white font-roboto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 tracking-wider">
      <h1 className="text-sm sm:text-base md:text-lg font-roboto leading-relaxed">
        As an entrepreneur, you face unique challenges in turning your vision into a successful business. At AceTechInside, we specialize in providing the support, expertise, and resources you need to overcome these challenges. Backed by the combined insights of experienced entrepreneurs, our offerings are designed to help you achieve sustainable growth and long-term success.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 font-roboto">
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
