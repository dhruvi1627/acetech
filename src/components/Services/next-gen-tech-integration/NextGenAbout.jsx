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
    <div className="text-white font-roboto px-4 md:px-12 lg:px-48 tracking-wider">
      <h1 className="text-lg font-bebas">
        In today’s rapidly evolving digital landscape, staying ahead means
        leveraging the latest technologies to drive innovation, efficiency, and
        growth. ATI’s Next-Gen Tech Integration services are designed to
        seamlessly incorporate advanced technologies into your business,
        ensuring you remain competitive and future-ready. With our expertise in
        agile methodologies and lean principles, we help you integrate
        next-generation tech solutions that align with your business goals and
        deliver measurable results.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#242222] p-4">
            <h2 className="font-bebas text-xl mb-2">{card.title}</h2>
            <p className="mb-6 text-sm text-[#cccccc]">{card.desc}</p>
            <button
              className="text-sm font-bebas"
              onClick={() => handlePlusClick(card.title)}
              aria-label="Expand"
            >
              <span className="flex items-center gap-2">
                <span>Click Here</span>
                <span className="text-xl">+</span>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
