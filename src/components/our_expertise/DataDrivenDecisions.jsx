import React, { useState, useEffect } from 'react';
import dataDrivenInnovation1 from '../../assets/images/our-expertise/Data-Driven-Innovation-1.jpg';
import { ArrowRight } from 'lucide-react';

const DataDrivenDecisions = () => {
  const [openAccordion, setOpenAccordion] = useState('custom-dashboards');
  const [displayText, setDisplayText] = useState('');
  const fullText = 'DECISION MAKING';
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 2000;

    const type = () => {
      if (isTyping && !isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
          timeout = setTimeout(type, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, pauseDuration);
        }
      } else if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
          timeout = setTimeout(type, deletingSpeed);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(type, pauseDuration);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting]);

  const accordionData = [
    {
      id: 'real-time',
      title: 'REAL-TIME ANALYTICS',
      content: 'Gain insights in real time, enabling you to respond quickly to market changes and emerging opportunities.'
    },
    {
      id: 'predictive',
      title: 'PREDICTIVE ANALYTICS',
      content: 'Anticipate future trends and behaviors with predictive models, allowing you to make proactive decisions.'
    },
    {
      id: 'custom-dashboards',
      title: 'CUSTOM DASHBOARDS',
      content: 'Visualize key metrics and data in custom dashboards that provide a clear, actionable view of your business performance.'
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="text-white pb-20 px-12 mb-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold font-bebas tracking-wider text-center mb-8">
            DATA-DRIVEN {displayText}
            <span className="animate-pulse">_</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-8">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={dataDrivenInnovation1}
                  alt="Data-driven innovation visualization with global network"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-12">
              {/* Challenge Section */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bebas tracking-wider">
                  CHALLENGE
                </h3>
                <p className="text-gray-300 leading-relaxed font-roboto">
                  Many businesses struggle to make informed decisions due to the overwhelming amount of data available and the difficulty of extracting actionable insights.
                </p>
              </div>

              {/* ATI's Solution Section */}
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bebas tracking-wider">
                  ATI'S SOLUTION
                </h3>
                <p className="text-gray-300 leading-relaxed font-roboto">
                  Our data analytics and AI solutions empower you to make data-driven decisions with confidence. By transforming raw data into meaningful insights, we help you identify trends, predict outcomes, and optimize strategies, leading to better business performance.
                </p>
              </div>

              {/* Accordion Features List */}
              <div className="space-y-6">
                {accordionData.map((item) => (
                  <div key={item.id} className="border-b border-gray-700">
                    <div 
                      onClick={() => toggleAccordion(item.id)}
                      className="flex items-center justify-between pb-4 cursor-pointer group"
                    >
                      <h4 className="text-xl font-bebas tracking-wider">{item.title}</h4>
                      <ArrowRight 
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          openAccordion === item.id ? 'rotate-90' : 'group-hover:translate-x-2'
                        }`}
                      />
                    </div>
                    <div 
                      className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
                        openAccordion === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-4 text-gray-300 font-roboto leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Button - Centered below grid */}
          <div className="flex justify-center">
            <button className="border border-[#e156e6] text-[#e156e6] hover:bg-[#e156e6] hover:text-black font-bebas px-12 py-4 text-xl transition duration-300 tracking-wider">
              UNLOCK POWERFUL INSIGHTS NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDrivenDecisions; 