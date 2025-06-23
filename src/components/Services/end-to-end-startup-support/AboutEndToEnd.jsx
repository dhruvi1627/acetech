import React from "react";

const cards = [
  {
    title: "IDEATION AND VALIDATION",
    desc: "Turning Ideas into Viable Ventures",
  },
  {
    title: "PRODUCT DEVELOPMENT AND LAUNCH",
    desc: "Bringing Your Vision to Life",
  },
  {
    title: "GROWTH AND SCALING",
    desc: "Expanding Your Reach",
  },
  {
    title: "CONTINUOUS IMPROVEMENT AND INNOVATION",
    desc: "Staying Ahead of the Curve Challenge",
  },
  {
    title: "WHY CHOOSE ATI FOR END-TO-END STARTUP SUPPORT?",
    desc: "Comprehensive guidance and resources tailored to your startup's journey",
  },
];

export default function AboutEndToEnd() {
  const handlePlusClick = (title) => {
    alert(`Clicked: ${title}`);
    // You can expand/collapse more info here
  };

  return (
    <div className="text-white font-roboto px-4 md:px-12 lg:px-48 tracking-wider">
      <h1 className="text-lg font-bebas">
        At ATI, we understand the unique challenges startups face in today's
        fast-paced market. Whether you're at the idea stage or ready to scale,
        our End-to-End Startup Support provides the expertise and resources you
        need to succeed. With a deep commitment to agile methodologies and lean
        principles, ATI delivers customized support that drives growth,
        innovation, and long-term success for your startup.
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
