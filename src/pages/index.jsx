import { useState } from 'react';
import "../index.css";
import { Menu, X } from 'lucide-react';
import aceTechLogo from '../assets/ace_tech.png';
import aceTechimage from '../assets/acetech_image.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="bg-black shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={aceTechLogo} alt="Ace Tech Logo" className="rounded-full" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">HOME</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">ABOUT US</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">TALENT</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">SERVICES</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">BUSINESS SOLUTION</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">RESOURCES</a>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">CONTACT US</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className=" text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black text-white px-6 py-4 space-y-2">
            <a href="#" className="block hover:text-gray-400">HOME</a>
            <a href="#" className="block hover:text-gray-400">ABOUT US</a>
            <a href="#" className="block hover:text-gray-400">TALENT</a>
            <a href="#" className="block hover:text-gray-400">SERVICES</a>
            <a href="#" className="block hover:text-gray-400">BUSINESS SOLUTION</a>
            <a href="#" className="block hover:text-gray-400">RESOURCES</a>
            <a href="#" className="block hover:text-gray-400">CONTACT US</a>
          </div>
        )}
      </header>

      {/* Hero section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 pt-4 pb-8 max-w-7xl mx-auto">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-lg text-white">
            OPTIMIZE YOUR BUSINESS GROWTH
          </p>
          <h1 className="text-7xl md:text-7xl font-bold leading-tight">
            <span className="text-white">LAUNCHING YOUR STARTUP JOURNEY</span> 
          </h1>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src={aceTechimage} alt="Ace Tech image" className="" />
        </div>
      </section>
    </div>
  );
}

export default App;
