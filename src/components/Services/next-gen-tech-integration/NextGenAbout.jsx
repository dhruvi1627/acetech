import React from "react";

const cards = [
  {
    title: "What is the next-gen tech integration",
    desc: "Incorporation of advancedv technologies for enhanced performance",
  },

  {
    title: "HOW ATI'S NEXT-GEN TECH INTEGRATION WORKS",
    desc: "A structured approach ensuring smooth implementation and scalability",
  },

  {
    title: "  BENEFITS OF ATI'S NEXT-GEN TECH INTEGRATION",
    desc: "Improved efficiency innovation, and competitive advantage for your business",
  },
  {
    title: "WHY CHOOSE ATI FOR NEXT-GEN TECH INTEGRATION? ",
    desc: "Expertise and tailored solutions for successful technology adoption",
  },
];

export default function NextGenAbout() {
  const handlePlusClick = (title) => {
    alert(`Clicked: ${title}`);
    // You can expand/collapse more info here
  };

  return (
    <div className="text-white font-roboto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 tracking-wider">
      <h1 className="text-sm sm:text-base md:text-lg font-roboto leading-relaxed">
        In today’s rapidly evolving digital landscape, staying ahead means
        leveraging the latest technologies to drive innovation, efficiency, and
        growth. ATI’s Next-Gen Tech Integration services are designed to
        seamlessly incorporate advanced technologies into your business,
        ensuring you remain competitive and future-ready. With our expertise in
        agile methodologies and lean principles, we help you integrate
        next-generation tech solutions that align with your business goals and
        deliver measurable results.
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
