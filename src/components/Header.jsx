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
              <img src={acetech} alt="Ace Tech Logo" className="w-32 h-auto" />
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

              {/* TALENT with Dropdown */}
              <div className="relative group">
                <a
                  href="/talent"
                  className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
                >
                  TALENT
                </a>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a2e] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="py-3">
                    <a
                      href="/talent/pair-to-pair"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Pair-to-Pair
                    </a>
                    <a
                      href="/talent/dedicated-team"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Dedicated Team
                    </a>
                    <a
                      href="/talent/task-force"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Task force
                    </a>
                  </div>
                </div>
              </div>

              {/* SERVICES with Dropdown */}
              <div className="relative group">
                <a
                  href="/service"
                  className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
                >
                  SERVICES
                </a>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a2e] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="py-3">
                    <a
                      href="/services/end-to-end-startup-support"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      End To End Startup Support
                    </a>
                    <a
                      href="/services/agile-development-sprint-package"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Agile Development Sprint Package
                    </a>
                    <a
                      href="/services/next-gen-tech-integration"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Next Gen Tech Integration
                    </a>
                  </div>
                </div>
              </div>

              {/* BUSINESS SOLUTION with Dropdown */}
              <div className="relative group">
                <a
                  href="/business-solutions"
                  className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
                >
                  BUSINESS SOLUTION
                </a>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a2e] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="py-3">
                    <a
                      href="/business-solutions/startups"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Startups
                    </a>
                    <a
                      href="/business-solutions/entrepreneurs"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Entrepreneurs
                    </a>
                    <a
                      href="/business-solutions/smes"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      SMEs
                    </a>
                    <a
                      href="/business-solutions/investor-and-partners"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Investors and Partners
                    </a>
                  </div>
                </div>
              </div>

              {/* RESOURCES with Dropdown */}
              <div className="relative group">
                <a
                  href="/resources"
                  className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
                >
                  RESOURCES
                </a>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a2e] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="py-3">
                    <a
                      href="/blog"
                      className="block px-6 py-3 text-[#6a6a74] hover:text-white hover:bg-gradient-to-r transition-all duration-200 text-base relative after:content-[''] after:absolute after:bottom-2 after:left-6 after:right-6 after:h-0.5 after:bg-white after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                    >
                      Blogs
                    </a>
                  </div>
                </div>
              </div>

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
        className={`fixed top-0 right-0 h-full w-80 bg-[#0f0f1c] text-white transform transition-transform duration-300 ease-in-out z-50 ${
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
            <img src={acetech} alt="ATI Logo" className="w-[200px] h-auto " />
          </div>

          {/* Social Media Links */}
          <div class="space-y-6 mb-12 font-bebas text-xl tracking-wider">
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
              <span>TWITTER</span>
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

          {/* Mail Us Section */}
          <div className="mt-auto border-t-2 border-[#3e3e3e]">
            <h3 className="text-2xl mt-10 font-bebas text-white mb-4">
              MAIL US
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { Grip, Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
// import acetech from "../assets/images/ace_tech.png";
// import facebook from "../assets/images/facebook.png";
// import instagram from "../assets/images/instagram.png";
// import dribble from "../assets/images/dribble-big-logo.png";
// import twitter from "../assets/images/twitter.png";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <header className="shadow-md text-white relative z-50">
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <a href="/">
//               <img
//                 src={acetech}
//                 alt="Ace Tech Logo"
//                 className="w-32 h-auto"
//               />
//             </a>
//           </div>

//           {/* Desktop Navigation with Mobile Button */}
//           <nav className="flex items-center">
//             <div className="font-bebas hidden md:flex space-x-6 text-xl tracking-wider">
//               <a
//                 href="/"
//                 className="hover:text-gray-400 transition-colors duration-200"
//               >
//                 HOME
//               </a>
//               <a
//                 href="/about-us"
//                 className="hover:text-gray-400 transition-colors duration-200"
//               >
//                 ABOUT US
//               </a>
//               <a
//                 href="/talent"
//                 className="hover:text-gray-400 transition-colors duration-200"
//               >
//                 TALENT
//               </a>
//               <a
//                 href="/service"
//                 className="hover:text-gray-400 transition-colors duration-200"
//               >
//                 SERVICES
//               </a>
//               <a
//                 href="/business-solutions"
//                 className="hover:text-gray-400 transition-colors duration-200"
//               >
//                 BUSINESS SOLUTION
//               </a>
//               <a
//                 href="/resources"
//                 className="hover:text-gray-400 transition-colors duration-200"
//               >
//                 RESOURCES
//               </a>
//               <a
//                 href="/contact-us"
//                 className="hover:text-gray-400 transition-colors duration-200"
//               >
//                 CONTACT US
//               </a>
//               <button
//                 onClick={toggleSidebar}
//                 className="hover:text-gray-400 transition-colors duration-200"
//               >
//                 <Grip />
//               </button>
//             </div>
//             <button
//               className="md:hidden text-white ml-4"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </nav>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-black text-white px-6 py-4 space-y-2">
//             <a href="/" className="block hover:text-gray-400">
//               HOME
//             </a>
//             <a href="/about-us" className="block hover:text-gray-400">
//               ABOUT US
//             </a>
//             <a href="/talent" className="block hover:text-gray-400">
//               TALENT
//             </a>
//             <a href="/service" className="block hover:text-gray-400">
//               SERVICES
//             </a>
//             <a href="/business-solutions" className="block hover:text-gray-400">
//               BUSINESS SOLUTION
//             </a>
//             <a href="/resources" className="block hover:text-gray-400">
//               RESOURCES
//             </a>
//             <a href="/contact-us" className="block hover:text-gray-400">
//               CONTACT US
//             </a>
//             <button
//               onClick={toggleSidebar}
//               className="block hover:text-gray-400 text-left"
//             >
//               MORE OPTIONS
//             </button>
//           </div>
//         )}
//       </header>

//       {/* Sidebar Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-80 bg-[#0f0f1c] text-white transform transition-transform duration-300 ease-in-out z-50 ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="p-6 h-full flex flex-col">
//           {/* Close Button */}
//           <div className="flex justify-end mb-8">
//             <button
//               onClick={toggleSidebar}
//               className="text-white hover:text-gray-400 transition-colors"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           {/* Logo Section */}
//           <div className="flex items-center justify-center mb-12">
//             <img src={acetech} alt="ATI Logo" className="w-[200px] h-auto " />
//           </div>

//           {/* Social Media Links */}
//           <div class="space-y-6 mb-12 font-bebas text-xl tracking-wider">
//             <a
//               href="https://facebook.com"
//               class="flex items-center space-x-4 text-lg font-medium hover:text-blue-400 transition-colors duration-200"
//             >
//               <img
//                 src={facebook}
//                 alt="Facebook"
//                 class="w-6 h-6 filter brightness-0 invert"
//               />
//               <span>FACEBOOK</span>
//             </a>
//             <a
//               href="https://twitter.com"
//               class="flex items-center space-x-4 text-lg font-medium hover:text-blue-400 transition-colors duration-200"
//             >
//               <img
//                 src={twitter}
//                 alt="Twitter"
//                 class="w-6 h-6 filter brightness-0 invert"
//               />
//               <span>TWITTER</span>
//             </a>
//             <a
//               href="https://dribbble.com"
//               class="flex items-center space-x-4 text-lg font-medium hover:text-pink-400 transition-colors duration-200"
//             >
//               <img
//                 src={dribble}
//                 alt="Dribbble"
//                 class="w-6 h-6 filter brightness-0 invert"
//               />
//               <span>DRIBBBLE</span>
//             </a>
//             <a
//               href="https://instagram.com"
//               class="flex items-center space-x-4 text-lg font-medium hover:text-purple-400 transition-colors duration-200"
//             >
//               <img
//                 src={instagram}
//                 alt="Instagram"
//                 class="w-6 h-6 filter brightness-0 invert"
//               />
//               <span>INSTAGRAM</span>
//             </a>
//           </div>

//           {/* Mail Us Section */}
//           <div className="mt-auto border-t-2 border-[#3e3e3e]">
//             <h3 className="text-2xl mt-10 font-bebas text-white mb-4">MAIL US</h3>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
