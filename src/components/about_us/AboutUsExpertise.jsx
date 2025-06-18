import React from 'react';

const AboutUsExpertise = () => {
  const expertises = [
    {
      icon: (
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-pink-500 relative">
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-l-pink-500 transform rotate-45"></div>
          </div>
        </div>
      ),
      title: "TECHNOLOGY SOLUTIONS",
      description: "ATI excels in integrating advanced technologies such as artificial intelligence, machine learning, blockchain, and IoT into businesses of all sizes. Our expertise in these areas allows us to create innovative solutions that enhance operational efficiency, improve customer experiences, and drive growth."
    },
    {
      icon: (
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <div className="flex flex-wrap gap-1 w-12">
            <div className="w-5 h-5 rounded-full border-2 border-pink-500"></div>
            <div className="w-5 h-5 rounded-full border-2 border-pink-500"></div>
            <div className="w-5 h-5 rounded-full border-2 border-pink-500"></div>
            <div className="w-5 h-5 rounded-full border-2 border-pink-500"></div>
          </div>
        </div>
      ),
      title: "TALENT MANAGEMENT",
      description: "Finding the right talent is crucial to the success of any project. ATI's talent services, including Pair-to-Pair, Dedicated Teams, and Task Forces, ensure that you have access to the best professionals in the industry, precisely matched to your project needs."
    },
    {
      icon: (
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-pink-500 relative flex items-center justify-center">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-pink-500"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-pink-500"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-pink-500"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-pink-500"></div>
          </div>
        </div>
      ),
      title: "PROJECT EXECUTION",
      description: "Our project management teams are experts in agile methodologies, ensuring that your projects are delivered on time, within scope, and to the highest standards of quality. We focus on iterative development, continuous feedback, and collaboration to achieve outstanding results."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-wider font-bebas">
            OUR EXPERTISES
          </h2>
        </div>

        {/* Expertise Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {expertises.map((expertise, index) => (
            <div 
              key={index}
              className="bg-[#242222] p-8 text-center flex-1"
            >
              {/* Icon */}
              {expertise.icon}
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6 tracking-wider font-bebas">
                {expertise.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm font-roboto">
                {expertise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsExpertise;