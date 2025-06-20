import React, { useState } from "react";
import { Grip, Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
import acetech from "../assets/images/ace_tech.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import dribble from "../assets/images/dribble-big-logo.png";
import twitter from "../assets/images/twitter.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="shadow-md text-white relative z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">ATI</h1>
                  <p className="text-xs text-gray-300">Ace Tech Inside</p>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation with Mobile Button */}
          <nav className="flex items-center">
            <div className="font-bebas hidden md:flex space-x-6 text-xl tracking-wider">
              <a
                href="/"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                HOME
              </a>
              <a
                href="/about-us"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                ABOUT US
              </a>
              <a
                href="/talent"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                TALENT
              </a>
              <a
                href="/service"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                SERVICES
              </a>
              <a
                href="/business-solutions"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                BUSINESS SOLUTION
              </a>
              <a
                href="/resources"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                RESOURCES
              </a>
              <a
                href="/contact-us"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                CONTACT US
              </a>
              <button
                onClick={toggleSidebar}
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <Grip />
              </button>
            </div>
            <button
              className="md:hidden text-white ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white px-6 py-4 space-y-2">
            <a href="/" className="block hover:text-gray-400">
              HOME
            </a>
            <a href="/about-us" className="block hover:text-gray-400">
              ABOUT US
            </a>
            <a href="/talent" className="block hover:text-gray-400">
              TALENT
            </a>
            <a href="/service" className="block hover:text-gray-400">
              SERVICES
            </a>
            <a href="/business-solutions" className="block hover:text-gray-400">
              BUSINESS SOLUTION
            </a>
            <a href="/resources" className="block hover:text-gray-400">
              RESOURCES
            </a>
            <a href="/contact-us" className="block hover:text-gray-400">
              CONTACT US
            </a>
            <button
              onClick={toggleSidebar}
              className="block hover:text-gray-400 text-left"
            >
              MORE OPTIONS
            </button>
          </div>
        )}
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-gray-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Logo Section */}
          <div className="flex items-center justify-center mb-12">
            <img src={acetech} alt="ATI Logo" className="w-[50] h-auto" />
          </div>

          {/* Social Media Links */}
          <div class="space-y-6 mb-12">
            <a
              href="https://facebook.com"
              class="flex items-center space-x-4 text-lg font-medium hover:text-blue-400 transition-colors duration-200"
            >
              <img
                src={facebook}
                alt="Facebook"
                class="w-6 h-6 filter brightness-0 invert"
              />
              <span>FACEBOOK</span>
            </a>
            <a
              href="https://twitter.com"
              class="flex items-center space-x-4 text-lg font-medium hover:text-blue-400 transition-colors duration-200"
            >
              <img
                src={twitter}
                alt="Twitter"
                class="w-6 h-6 filter brightness-0 invert"
              />
              <span>TWITTER-X</span>
            </a>
            <a
              href="https://dribbble.com"
              class="flex items-center space-x-4 text-lg font-medium hover:text-pink-400 transition-colors duration-200"
            >
              <img
                src={dribble}
                alt="Dribbble"
                class="w-6 h-6 filter brightness-0 invert"
              />
              <span>DRIBBBLE</span>
            </a>
            <a
              href="https://instagram.com"
              class="flex items-center space-x-4 text-lg font-medium hover:text-purple-400 transition-colors duration-200"
            >
              <img
                src={instagram}
                alt="Instagram"
                class="w-6 h-6 filter brightness-0 invert"
              />
              <span>INSTAGRAM</span>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Mail Us Section */}
          <div className="mt-auto">
            <h3 className="text-2xl font-bold text-white mb-4">MAIL US</h3>
            <a
              href="mailto:info@acetechinside.com"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              info@acetechinside.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}



// import React, { useState } from "react";
// import { Grip, Menu, X } from "lucide-react";
// import aceTechLogo from "../assets/images/ace_tech.png"; // Adjust the path as necessary

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-black shadow-md text-white">
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <a href="/">
//             <img
//               src={aceTechLogo}
//               alt="Ace Tech Logo"
//               className="w-32 h-auto"
//             />
//           </a>
//         </div>

//         {/* Desktop Navigation with Mobile Button */}
//         <nav className="flex items-center ">
//           <div className="font-bebas hidden md:flex space-x-6 text-xl tracking-wider">
//             <a
//               href="/"
//               className="hover:text-gray-400 transition-colors duration-200"
//             >
//               HOME
//             </a>
//             <a
//               href="/about-us"
//               className="hover:text-gray-400 transition-colors duration-200"
//             >
//               ABOUT US
//             </a>
//             <a
//               href="/talent"
//               className="hover:text-gray-400 transition-colors duration-200"
//             >
//               TALENT
//             </a>
//             <a
//               href="/service"
//               className="hover:text-gray-400 transition-colors duration-200"
//             >
//               SERVICES
//             </a>
//             <a
//               href="/business-solutions"
//               className="hover:text-gray-400 transition-colors duration-200"
//             >
//               BUSINESS SOLUTION
//             </a>
//             <a
//               href="/resources"
//               className="hover:text-gray-400 transition-colors duration-200"
//             >
//               RESOURCES
//             </a>
//             <a
//               href="contact-us"
//               className="hover:text-gray-400 transition-colors duration-200"
//             >
//               CONTACT US
//             </a>
//             <a
//               href="#"
//               className="hover:text-gray-400 transition-colors duration-200"
//             >
//               <Grip />
//             </a>
//           </div>
//           <button
//             className="md:hidden text-white ml-4" // Added md:hidden to hide on medium and larger screens
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black text-white px-6 py-4 space-y-2">
//           <a href="/" className="block hover:text-gray-400">
//             HOME
//           </a>
//           <a href="/about-us" className="block hover:text-gray-400">
//             ABOUT US
//           </a>
//           <a href="/talent" className="block hover:text-gray-400">
//             TALENT
//           </a>
//           <a href="/service" className="block hover:text-gray-400">
//             SERVICES
//           </a>
//           <a href="/business-solutions" className="block hover:text-gray-400">
//             BUSINESS SOLUTION
//           </a>
//           <a href="/resources" className="block hover:text-gray-400">
//             RESOURCES
//           </a>
//           <a href="/contact-us" className="block hover:text-gray-400">
//             CONTACT US
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }
