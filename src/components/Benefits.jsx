import React from 'react';
import acetechBenefits from '../assets/images/acetech_benefits.png';
import decor2Startup from '../assets/images/decor_2_startup.webp';

function Benefits() {
  return (
    <div className="bg-black text-white py-20 relative overflow-hidden bg-right bg-no-repeat" style={{ backgroundImage: `url(${decor2Startup})`, backgroundPosition: 'right -400px top 50px' }}>
      <div className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-0">
          {/* Image */}
          <div className="md:w-4/5 w-full">
            <img 
              src={acetechBenefits} 
              alt="Ace Tech Benefits" 
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>
          {/* Content */}
          <div className="md:w-4/5 w-full text-center md:text-left md:pl-8 bg-transparent">
            <h2 className="text-xl font-semibold font-roboto">OUR BENEFITS</h2>
            <h3 className="text-4xl font-semibold mb-5 font-bebas tracking-wider">SERVICES AND UNIQUE VALUE PROPOSITIONS</h3>
            <p className="text-gray-400 mb-4 font-roboto">We use an agile project management method to ensure maximum efficiency and rapid delivery of projects.</p>
            <ul>
              <li className="flex items-center mb-2 font-roboto">
                <span>✓</span>
                <span>Excellence</span>
              </li>
              <li className="flex items-center mb-2 font-roboto">
                <span>✓</span>
                <span>Innovation</span>
              </li>
              <li className="flex items-center mb-10 font-roboto">
                <span>✓</span>
                <span>Ethics and Respect</span>
              </li>
            </ul>
            <button className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-8 py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg font-roboto">
            CONTACT US
            <span>→</span>
          </button>
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold font-roboto">WHO WE ARE</h4>
              <h3 className="text-3xl font-bold mb-2 font-bebas">WE'VE HELPED HUNDREDS OF PARTNERS, RANGING</h3>
              <h3 className="text-3xl font-bold mb-2 font-bebas">FROM STARTUPS TO MEDIUM-SIZED BUSINESSES</h3>
              <h3 className="text-3xl font-bold font-bebas">WITH THEIR <span className="underline text-white">GOALS</span></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;