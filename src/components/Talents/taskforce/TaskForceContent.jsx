import React from 'react';
import { Plus } from 'lucide-react';

const TaskForceContent = () => {

  const sections = [
    {
      id: 'what-is',
      title: 'WHAT IS TALENTS TASK FORCE SERVICE?'
    },
    {
      id: 'how-it-works',
      title: "HOW ATI'S TALENTS TASK FORCE WORKS"
    },
    {
      id: 'benefits',
      title: "BENEFITS OF ATI'S TALENTS TASK FORCE SERVICE"
    },
    {
      id: 'why-choose',
      title: "WHY CHOOSE ATI'S TALENTS TASK FORCE SERVICE?"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header Text */}
      <div className="mb-12 text-white">
        <p className="text-lg leading-relaxed">
          When your business faces urgent challenges or high-priority projects, having the right team in place—fast—can make all the difference. ATI’s Talents Task Force service is designed to deploy specialized, high-impact teams quickly, providing the expertise and agility needed to tackle your most pressing issues. Leveraging our agile methodologies and lean principles, we ensure that your critical projects are handled efficiently, effectively, and with the precision needed to achieve exceptional results.
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

export default TaskForceContent;