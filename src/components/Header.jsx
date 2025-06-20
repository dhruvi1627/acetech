import React, { useState } from "react";
import { Grip, Menu, X } from "lucide-react";
import aceTechLogo from "../assets/images/ace_tech.png"; // Adjust the path as necessary

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/">
            <img
              src={aceTechLogo}
              alt="Ace Tech Logo"
              className="w-32 h-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation with Mobile Button */}
        <nav className="flex items-center ">
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
              href="contact-us"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              CONTACT US
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <Grip />
            </a>
          </div>
          <button
            className="md:hidden text-white ml-4" // Added md:hidden to hide on medium and larger screens
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
        </div>
      )}
    </header>
  );
}
