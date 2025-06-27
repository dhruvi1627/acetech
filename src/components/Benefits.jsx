import acetechBenefits from "../assets/images/acetech_benefits.png";
import { useNavigate } from 'react-router-dom';

function Benefits() {
  const navigate = useNavigate();
  return (
    <div className="text-white py-12 sm:py-16 md:py-20 relative overflow-hidden tracking-wider">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0 px-4 sm:px-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={acetechBenefits}
            alt="Ace Tech Benefits"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto mx-auto"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-1/2 md:text-left md:pl-8 bg-transparent mb-8 md:mb-0">
          <h2 className="text-lg sm:text-xl font-semibold font-roboto">
            OUR BENEFITS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-semibold mb-5 font-bebas tracking-wider">
            SERVICES AND UNIQUE VALUE PROPOSITIONS
          </h3>
          <p className="text-gray-400 mb-4 font-roboto text-base sm:text-lg">
            We use an agile project management method to ensure maximum
            efficiency and rapid delivery of projects.
          </p>
          <ul className="mb-8">
            <li className="flex md:justify-start mb-2 font-roboto gap-2">
              <span className="text-[#c14ac7]">✓</span>
              <span>Excellence</span>
            </li>
            <li className="flex  md:justify-start mb-2 font-roboto gap-2">
              <span className="text-[#c14ac7]">✓</span>
              <span>Innovation</span>
            </li>
            <li className="flex md:justify-start mb-6 font-roboto gap-2">
              <span className="text-[#c14ac7]">✓</span>
              <span>Ethics and Respect</span>
            </li>
          </ul>
          <button onClick={() => navigate(`/contact-us`)} className="bg-[#E156E6] hover:bg-white hover:text-black text-white font-medium px-8 py-3 text-base transition duration-300 inline-flex items-center gap-2 shadow-lg font-roboto">
            CONTACT US
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
