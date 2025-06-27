import { BookOpenText, House, IdCard, Users } from "lucide-react";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function BusinessSolutionsHero() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[120vh] text-white py-16 px-4 md:px-8 lg:px-16 font-roboto tracking-wider relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* left side */}
        <div className="space-y-6 mt-40">
          <p className="text-sm uppercase">Empowering your business journey</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            TAILORED SOLUTIONS FOR EVERY BUSINESS NEED
          </h1>
          <p className="text-gray-300 leading-relaxed">
            We understand that every business is unique, and so are its
            challenges. Our business solutions are designed to empower you at
            every stage of your journey, from startup to established enterprise.
            We offer a range of services, including strategic planning,
            operational efficiency, and market analysis, all tailored to your
            specific needs. Our team of experts leverages the latest
            technologies and industry insights to help you navigate complexities
            and seize opportunities. Whether you're looking to optimize your
            operations, enhance customer engagement, or drive innovation, we are
            committed to providing the support you need to thrive in today's
            competitive landscape.
          </p>
          <button onClick={() => navigate(`/contact-us`)} className="bg-[#de60ca] hover:bg-white hover:text-black px-8 py-3 transition-colors duration-300">
            CONTACT US →
          </button>
        </div>

        {/* right side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* left cards */}
          <div className="space-y-6 md:mt-12">
            <div className="bg-zinc-900 p-8 min-h-[310px] w-[300px] flex flex-col justify-between hover:bg-[#dd60c9] group transition-colors duration-300">
              <div className="flex mb-4">
                <IdCard className="size-16 text-[#dd60c9] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">STARTUPS</h3>
                <p className="text-gray-400 group-hover:text-white">
                  Ignite Your Vision with Innovative Solutions and Strategies.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 p-8 min-h-[310px] w-[300px] flex flex-col justify-between hover:bg-[#dd60c9] group transition-colors duration-300">
              <div className="flex mb-4">
                <House className="size-16 text-[#dd60c9] group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">SMES</h3>
                <p className="text-gray-400 group-hover:text-white">
                  Elevate Your Growth with Tailored Solutions and Smart
                  Innovations.
                </p>
              </div>
            </div>
          </div>

          {/* right cards */}
          <div className="space-y-6">
            <div className="bg-zinc-900 p-8 min-h-[310px] w-[300px] flex flex-col justify-between hover:bg-[#dd60c9] group transition-colors duration-300">
              <div className="flex mb-4">
                <Users className="size-16 text-[#dd60c9] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">ENTREPRENEUR</h3>
                <p className="text-gray-400 group-hover:text-white">
                  Empower Your Journey with Innovative Strategies and Unmatched
                  Resources.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 p-8 min-h-[310px] w-[300px] flex flex-col justify-between hover:bg-[#dd60c9] group transition-colors duration-300">
              <div className="flex mb-4">
                <BookOpenText className="size-16 text-[#dd60c9] group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  INVESTOR AND PARTNERS
                </h3>
                <p className="text-gray-400 group-hover:text-white">
                  Revolutionize Your Operations with Innovative Digital
                  Solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
