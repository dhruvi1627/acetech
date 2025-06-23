import React from 'react';
import { Plus } from 'lucide-react';

const PairToPairContent = () => {

  const sections = [
    {
      id: 'what-is',
      title: 'WHAT IS TALENTS PAIR-TO-PAIR?'
    },
    {
      id: 'how-it-works',
      title: "HOW ATI'S TALENTS PAIR-TO-PAIR WORKS"
    },
    {
      id: 'benefits',
      title: "BENEFITS OF ATI'S TALENTS PAIR-TO-PAIR SERVICE"
    },
    {
      id: 'why-choose',
      title: "WHY CHOOSE ATI'S TALENTS PAIR-TO-PAIR SERVICE?"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header Text */}
      <div className="mb-12 text-white">
        <p className="text-lg leading-relaxed">
          In today's competitive market, having the right talent at the right time is critical to success. ATI's Talents Pair-to-Pair service offers a specialized approach to talent acquisition, ensuring that your projects are matched with professionals who have the exact skills and experience needed to drive your business forward. Our agile and lean approach guarantees that you receive top-tier talent tailored to your specific requirements, maximizing efficiency and results.
        </p>
      </div>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.id} className="overflow-hidden">
            <div className="w-full p-6 bg-[#242222] flex items-center justify-between">
              <h3 className="text-white font-bold text-sm tracking-wide uppercase">
                {section.title}
              </h3>
              <div className="ml-4 flex-shrink-0">
                <Plus className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PairToPairContent;