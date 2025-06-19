import React from "react";

export default function CollaborativeTalent() {
  return (
    <>
      <section className="text-white mt-10 md:mt-20 py-8 md:py-12 px-4">
        <div className="justify-center tracking-wider font-roboto text-center">
          <div>
            <h1 className="uppercase font-bebas text-lg md:text-xl">Talents</h1>
          </div>
          <div className="mt-4 md:mt-8">
            <h1 className="uppercase font-bebas text-4xl md:text-6xl px-2">
              Collaborative Expertise for <br className="hidden md:block" />
              Milestone Success
            </h1>
          </div>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#0f0f1c] p-4 md:p-8 text-center transition-all h-full">
            <img
              src="/pair.svg"
              alt="Pair Programming"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4"
            />
            <h3 className="font-bebas text-xl md:text-2xl mb-4">
              Pair-to-Pair
            </h3>
            <p className="text-sm mb-4">
              Two experts collaborating for quality and innovation.
            </p>
            <ul className="text-sm text-left space-y-2">
              <li>- Benefits of Pair Programming</li>
              <li>- Success Stories and Case Studies</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f0f1c] p-4 md:p-8 text-center transition-all h-full">
            <img
              src="/team.svg"
              alt="Dedicated Team"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4"
            />
            <h3 className="font-bebas text-xl md:text-2xl mb-4">
              Dedicated Team
            </h3>
            <p className="text-sm mb-4">
              A full team committed to comprehensive support.
            </p>
            <ul className="text-sm text-left space-y-2">
              <li>- Full-Service Development</li>
              <li>- Team Composition and Expertise</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0f0f1c] p-4 md:p-8 text-center transition-all h-full">
            <img
              src="/expert.svg"
              alt="Specialized Experts"
              className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4"
            />
            <h3 className="font-bebas text-xl md:text-2xl mb-4">
              Specialized Experts
            </h3>
            <p className="text-sm mb-4">
              Specialized experts for critical milestones and challenges.
            </p>
            <ul className="text-sm text-left space-y-2">
              <li>- Rapid Response Teams</li>
              <li>- Critical Milestones and Launch Support</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
