import React from 'react';
import Mask_groupHome_page from "../assets/Mask_groupHome_page.png";
import Mask_groupHome_page_1 from "../assets/Mask_groupHome_page_1.png";
import Mask_groupHome_page_2 from "../assets/Mask_groupHome_page_2.png";
import decor_1_startup from "../assets/decor_1_startup.webp";

function Work() {
  return (
    <div className="bg-black text-white py-20 relative overflow-hidden bg-left bg-no-repeat" style={{ backgroundImage: `url(${decor_1_startup})`, backgroundPosition: 'left -250px top 50px'  }}>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-xl font-semibold font-roboto">WHAT WE DO</h2>
        <h3 className="text-5xl font-bold mb-4 font-bebas">TALENTS FOR STARTUPS</h3>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-80">
            {/* Icon */}
            <div className="bg-gray-800 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
              <img src={Mask_groupHome_page} alt="Pair-to-Pair Icon" className="rounded-full" />
            </div>
            <h4 className="text-3xl font-semibold mb-2 font-bebas">PAIR-TO-PAIR</h4>
            <p className="text-gray-500 text-sm mb-4 font-roboto">Two experts collaborating for quality and innovation.</p>
            <p className="text-3xl">+</p>
          </div>
          <div className="w-80">
            {/* Icon */}
            <div className="bg-gray-800 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
              <img src={Mask_groupHome_page_1} alt="Dedicated Team Icon" className="rounded-full" />
            </div>
            <h4 className="text-3xl font-semibold mb-2 font-bebas">DEDICATED TEAM</h4>
            <p className="text-gray-400 mb-4 font-roboto">A full team committed to comprehensive support.</p>
            <p className="text-3xl">+</p>
          </div>
          <div className="w-80">
            {/* Icon */}
            <div className="bg-gray-800 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center">
              <img src={Mask_groupHome_page_2} alt="Task Force Icon" className="rounded-full" />
            </div>
            <h4 className="text-2xl font-semibold mb-2 font-bebas">TASK FORCE</h4>
            <p className="text-gray-400 mb-4 font-roboto">Specialized experts for critical milestones and challenges.</p>
            <p className="text-3xl">+</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;