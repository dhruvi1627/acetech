import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CollaborativeTalent() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Pair-to-Pair",
      description: "Two experts collaborating for quality and innovation.",
      points: [
        "Benefits of Pair Programming",
        "Success Stories and Case Studies",
      ],
      icon: "/pair.svg",
      link: "/talent/pair-to-pair/",
    },
    {
      id: 2,
      title: "Dedicated Team",
      description: "A full team committed to comprehensive support.",
      points: ["Full-Service Development", "Team Composition and Expertise"],
      icon: "/team.svg",
      link: "/talent/dedicated-team/",
    },
    {
      id: 3,
      title: "Specialized Experts",
      description:
        "Specialized experts for critical milestones and challenges.",
      points: [
        "Rapid Response Teams",
        "Critical Milestones and Launch Support",
      ],
      icon: "/expert.svg",
      link: "/talent/task-force/",
    },
  ];

  return (
    <section className="text-white mt-10 py-8 md:py-12 px-4">
      <div className="justify-center tracking-wider font-roboto text-center">
        <h1 className="uppercase font-bebas text-lg md:text-xl">Talents</h1>
        <h2 className="uppercase font-bebas text-4xl md:text-6xl px-2 mt-4 md:mt-8">
          Collaborative Expertise for <br className="hidden md:block" />
          Milestone Success
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 max-w-7xl mx-auto">
        {cards.map(({ id, title, description, points, icon, link }) => (
          <div
            key={id}
            className="bg-[#0f0f1c] p-4 md:p-8 transition-all h-full"
            onMouseEnter={() => setHoveredCard(id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
              <div className="flex-shrink-0">
                <img
                  src={icon}
                  alt={title}
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 md:mb-0"
                />
              </div>
              <div>
                <h3 className="font-bebas text-xl md:text-2xl mb-4">{title}</h3>
                <p className="text-sm mb-4">{description}</p>
                <ul className="text-sm text-left space-y-2 mb-4">
                  {points.map((point, i) => (
                    <li key={i}>- {point}</li>
                  ))}
                </ul>

                {/* READ MORE Hover Link */}
                <div
                  className="flex items-center justify-start gap-2 cursor-pointer"
                  onClick={() => navigate(link)}
                >
                  {hoveredCard === id && (
                    <span className="font-bebas text-xs sm:text-sm tracking-wider pt-2">
                      READ MORE
                    </span>
                  )}
                  <p className="text-2xl sm:text-3xl">+</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function CollaborativeTalent() {

//   const navigate = useNavigate();
//   return (
//     <>
//       <section className="text-white mt-10 py-8 md:py-12 px-4">
//         <div className="justify-center tracking-wider font-roboto text-center">
//           <div>
//             <h1 className="uppercase font-bebas text-lg md:text-xl">Talents</h1>
//           </div>
//           <div className="mt-4 md:mt-8">
//             <h1 className="uppercase font-bebas text-4xl md:text-6xl px-2">
//               Collaborative Expertise for <br className="hidden md:block" />
//               Milestone Success
//             </h1>
//           </div>
//         </div>
//         {/* cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16 max-w-7xl mx-auto">
//           {/* Card 1 */}
//           <div className="bg-[#0f0f1c] p-4 md:p-8 transition-all h-full">
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
//               <div className="flex-shrink-0">
//                 <img
//                   src="/pair.svg"
//                   alt="Pair Programming"
//                   className="w-12 h-12 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 md:mb-0"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-bebas text-xl md:text-2xl mb-4">
//                   Pair-to-Pair
//                 </h3>
//                 <p className="text-sm mb-4">
//                   Two experts collaborating for quality and innovation.
//                 </p>
//                 <ul className="text-sm text-left space-y-2">
//                   <li>- Benefits of Pair Programming</li>
//                   <li>- Success Stories and Case Studies</li>
//                 </ul>

//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-[#0f0f1c] p-4 md:p-8 transition-all h-full">
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
//               <div className="flex-shrink-0">
//                 <img
//                   src="/team.svg"
//                   alt="Dedicated Team"
//                   className="w-12 h-12 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 md:mb-0"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-bebas text-xl md:text-2xl mb-4">
//                   Dedicated Team
//                 </h3>
//                 <p className="text-sm mb-4">
//                   A full team committed to comprehensive support.
//                 </p>
//                 <ul className="text-sm text-left space-y-2">
//                   <li>- Full-Service Development</li>
//                   <li>- Team Composition and Expertise</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-[#0f0f1c] p-4 md:p-8 transition-all h-full">
//             <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
//               <div className="flex-shrink-0">
//                 <img
//                   src="/expert.svg"
//                   alt="Specialized Experts"
//                   className="w-12 h-12 md:w-16 md:h-16 mx-auto md:mx-0 mb-4 md:mb-0"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-bebas text-xl md:text-2xl mb-4">
//                   Specialized Experts
//                 </h3>
//                 <p className="text-sm mb-4">
//                   Specialized experts for critical milestones and challenges.
//                 </p>
//                 <ul className="text-sm text-left space-y-2">
//                   <li>- Rapid Response Teams</li>
//                   <li>- Critical Milestones and Launch Support</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
