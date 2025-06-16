import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import aceTechLogo from "../assets/ace_tech.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={aceTechLogo} alt="Ace Tech Logo" className="rounded-full" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            HOME
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            TALENT
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            SERVICES
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            BUSINESS SOLUTION
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            RESOURCES
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            CONTACT US
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-2">
          <a href="#" className="block hover:text-gray-400">
            HOME
          </a>
          <a href="#" className="block hover:text-gray-400">
            ABOUT US
          </a>
          <a href="#" className="block hover:text-gray-400">
            TALENT
          </a>
          <a href="#" className="block hover:text-gray-400">
            SERVICES
          </a>
          <a href="#" className="block hover:text-gray-400">
            BUSINESS SOLUTION
          </a>
          <a href="#" className="block hover:text-gray-400">
            RESOURCES
          </a>
          <a href="#" className="block hover:text-gray-400">
            CONTACT US
          </a>
        </div>
      )}
    </header>
  );
}
