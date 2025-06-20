import { Code, User, PieChart, Monitor, Lock, RefreshCw } from "lucide-react";
import React from "react";


const WhatWeAreLooking = () => {
  const roles = [
    {
      icon: <Code className="w-12 h-12 text-pink-400" />,
      title: "SOFTWARE DEVELOPERS",
      description:
        "Apply your expertise in diverse programming languages and frameworks within an agile environment to work on cutting-edge projects.",
    },
    {
      icon: <User className="w-12 h-12 text-pink-400" />,
      title: "PROJECT MANAGERS",
      description:
        "Lead impactful projects, ensuring successful execution and exceptional results. Agile experience is an asset.",
    },
    {
      icon: <PieChart className="w-12 h-12 text-pink-400" />,
      title: "DATA SCIENTISTS",
      description:
        "Use advanced analytics, machine learning, and AI to transform data into actionable insights and drive innovation.",
    },
    {
      icon: <Monitor className="w-12 h-12 text-pink-400" />,
      title: "UI/UX DESIGNERS",
      description:
        "Create intuitive and impactful user experiences for our products and solutions with your",
    },
    {
      icon: <Lock className="w-12 h-12 text-pink-400" />,
      title: "CYBERSECURITY EXPERTS",
      description:
        "Safeguard digital assets by addressing complex threats and ensuring robust, secure",
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-pink-400" />,
      title: "DEVOPS ENGINEERS",
      description:
        "Enhance development workflows and improve efficiency through automation and process",
    },
  ];

  return (
    <div className="text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold uppercase tracking-widest mb-8 font-bebas">
            WHO ARE WE LOOKING FOR
          </h1>
          <p className="text-gray-300 text-lg max-w-8xl mx-auto font-roboto jus">
            As a leading tech company specializing in agile methodologies and
            lean principles, we are constantly looking for talented
            professionals and experts who are passionate about making an impact.
            If you are ready to take your career to the next level and
            contribute to groundbreaking projects, ATI is the place for you.
            Explore how you can contribute to our groundbreaking projects:
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 hover:bg-[#E156E6] transition-colors group"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:text-white">
                {React.cloneElement(role.icon, {
                  className: "w-12 h-12 text-pink-400 group-hover:text-white",
                })}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white font-roboto group-hover:text-white">
                {role.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-roboto group-hover:text-white">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeAreLooking;
