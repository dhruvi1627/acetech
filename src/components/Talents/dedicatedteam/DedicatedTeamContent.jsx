import React from 'react';
import { Plus } from 'lucide-react';

const DedicatedTeamContent = () => {

  const sections = [
    {
      id: 'what-is',
      title: 'WHAT IS TALENTS DEDICATED TEAM SERVICE?'
    },
    {
      id: 'how-it-works',
      title: "HOW ATI'S TALENTS DEDICATED TEAM WORKS"   
    },
    {
      id: 'benefits',
      title: "BENEFITS OF ATI'S TALENTS DEDICATED TEAM SERVICE"
    },
    {
      id: 'why-choose',
      title: "WHY CHOOSE ATI'S TALENTS DEDICATED TEAM SERVICE?"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header Text */}
      <div className="mb-12 text-white">
        <p className="text-lg leading-relaxed">
          In today’s competitive business landscape, having a dedicated team of experts focused solely on your projects can be the key to success. ATI’s
          Talents Dedicated Team service provides you with a team of skilled professionals who integrate seamlessly into your organization, working
          exclusively on your projects to deliver exceptional results. Our approach is rooted in agile methodologies and lean principles, ensuring that your
          dedicated team is efficient, adaptable, and aligned with your business objectives.
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

export default DedicatedTeamContent;