import React from 'react';
import { Settings, Users, MessageCircle, Lightbulb } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: <Lightbulb className="w-12 h-12 text-pink-400" />,
      title: "INNOVATION",
      description: "We are committed to pushing the boundaries of what's possible. At ATI, we foster a culture of continuous improvement, encouraging our teams to explore new ideas, technologies, and methodologies that drive progress and deliver exceptional value to our clients."
    },
    {
      icon: <Settings className="w-12 h-12 text-pink-400" />,
      title: "AGILITY",
      description: "In a world that's constantly changing, agility is key to success. We embrace agile methodologies in everything we do, ensuring that we can quickly adapt to new challenges and opportunities, while delivering high-quality results on time and within budget."
    },
    {
      icon: <Users className="w-12 h-12 text-pink-400" />,
      title: "INTEGRITY",
      description: "Trust is the foundation of our relationships with clients, partners, and employees. We conduct our business with the highest standards of ethics and transparency, ensuring that we always act in the best interests of our clients and stakeholders."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-pink-400" />,
      title: "COLLABORATION",
      description: "Great solutions are the result of great teamwork. We believe in the power of collaboration, both within our teams and with our clients. By working closely together, we create solutions that are not only innovative but also tailored to meet the unique needs of each client."
    }
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide font-bebas tracking-wider">
            Our Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-roboto h-[600px] w-full">
          {values.map((value, index) => (
            <div 
              key={index}
              className="border border-gray-700  p-8 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;