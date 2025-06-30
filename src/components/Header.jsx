import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Grip, Menu, X } from "lucide-react";
import acetech from "../assets/images/ace_tech.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import dribble from "../assets/images/dribble-big-logo.png";
import twitter from "../assets/images/twitter.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    talent: false,
    services: false,
    business: false,
    resources: false,
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleMobileDropdown = (key) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <header className="shadow-md text-white relative">
        <div className="container py-8 flex items-center justify-between px-20">
          <a href="/">
            <img
              src={acetech}
              alt="Ace Tech Logo"
              className="w-[200px] h-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="flex items-center">
            <div className="font-bebas hidden md:flex space-x-4 text-[18px] tracking-wider">
              {[
                { label: "HOME", href: "/" },
                { label: "ABOUT US", href: "/about-us" },
              ].map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Dropdown
                label="TALENT"
                baseHref="/talent"
                items={[
                  { label: "Pair-to-Pair", href: "/talent/pair-to-pair" },
                  { label: "Dedicated Team", href: "/talent/dedicated-team" },
                  { label: "Task force", href: "/talent/task-force" },
                ]}
              />

              <Dropdown
                label="SERVICES"
                baseHref="/services"
                items={[
                  {
                    label: "End To End Startup Support",
                    href: "/services/end-to-end-startup-support",
                  },
                  {
                    label: "Agile Development Sprint Package",
                    href: "/services/agile-development-sprint-package",
                  },
                  {
                    label: "Next Gen Tech Integration",
                    href: "/services/next-gen-tech-integration",
                  },
                ]}
              />

              <Dropdown
                label="BUSINESS SOLUTION"
                baseHref="/business-solutions"
                items={[
                  { label: "Startups", href: "/business-solutions/startups" },
                  {
                    label: "Entrepreneurs",
                    href: "/business-solutions/entrepreneurs",
                  },
                  { label: "SMEs", href: "/business-solutions/smes" },
                  {
                    label: "Investors and Partners",
                    href: "/business-solutions/investor-and-partners",
                  },
                ]}
              />

              <Dropdown
                label="RESOURCES"
                baseHref="/resources"
                items={[{ label: "Blogs", href: "/blog" }]}
              />

              {/* Moved CONTACT US here */}
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                CONTACT US
              </NavLink>

              <button
                onClick={toggleSidebar}
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <Grip />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
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
            {renderMobileLinks(toggleMobileDropdown, mobileDropdown)}
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

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-[#0f0f1c] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-gray-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex items-center justify-center mb-12">
            <img src={acetech} alt="ATI Logo" className="w-[200px] h-auto" />
          </div>

          {/* Social Media Links */}
          <div className="space-y-6 mb-12 font-bebas text-xl tracking-wider">
            {[
              {
                label: "FACEBOOK",
                icon: facebook,
                href: "https://facebook.com",
                color: "hover:text-blue-400",
              },
              {
                label: "TWITTER",
                icon: twitter,
                href: "https://twitter.com",
                color: "hover:text-blue-400",
              },
              {
                label: "DRIBBBLE",
                icon: dribble,
                href: "https://dribbble.com",
                color: "hover:text-pink-400",
              },
              {
                label: "INSTAGRAM",
                icon: instagram,
                href: "https://instagram.com",
                color: "hover:text-purple-400",
              },
            ].map(({ label, icon, href, color }) => (
              <a
                key={label}
                href={href}
                className={`flex items-center space-x-4 text-lg font-medium ${color} transition-colors duration-200`}
              >
                <img
                  src={icon}
                  alt={label}
                  className="w-6 h-6 filter brightness-0 invert"
                />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="mt-auto border-t-2 border-[#3e3e3e] pt-6">
            <h3 className="text-2xl font-bebas mb-4">MAIL US</h3>
          </div>
        </div>
      </aside>
    </>
  );
}

// --- Dropdown Component ---
function Dropdown({ label, baseHref, items }) {
  return (
    <div className="relative group">
      <NavLink
        to={baseHref}
        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
      >
        {label}
      </NavLink>
      <div className="absolute top-full left-0 mt-2 w-48 bg-[#1a1a2e] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
        <div className="py-3">
          {items.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                `dropdown-link${isActive ? " active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Mobile Nav Links ---
function renderMobileLinks(toggleDropdown, dropdownState) {
  const dropdowns = {
    talent: [
      { label: "Pair-to-Pair", href: "/talent/pair-to-pair" },
      { label: "Dedicated Team", href: "/talent/dedicated-team" },
      { label: "Task force", href: "/talent/task-force" },
    ],
    services: [
      {
        label: "End To End Startup Support",
        href: "/services/end-to-end-startup-support",
      },
      {
        label: "Agile Development Sprint Package",
        href: "/services/agile-development-sprint-package",
      },
      {
        label: "Next Gen Tech Integration",
        href: "/services/next-gen-tech-integration",
      },
    ],
    business: [
      { label: "Startups", href: "/business-solutions/startups" },
      { label: "Entrepreneurs", href: "/business-solutions/entrepreneurs" },
      { label: "SMEs", href: "/business-solutions/smes" },
      {
        label: "Investors and Partners",
        href: "/business-solutions/investor-and-partners",
      },
    ],
    resources: [{ label: "Blogs", href: "/blog" }],
  };

  return (
    <>
      {Object.keys(dropdowns).map((key) => (
        <div key={key}>
          <button
            className="block w-full text-left hover:text-gray-400"
            onClick={() => toggleDropdown(key)}
          >
            {key.toUpperCase()}
          </button>
          {dropdownState[key] && (
            <div className="pl-4 space-y-1">
              {dropdowns[key].map(({ label, href }) => (
                <NavLink
                  key={label}
                  to={href}
                  className="block hover:text-gray-400 text-sm"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* CONTACT US moved here below RESOURCES */}
      <NavLink to="/contact-us" className="block hover:text-gray-400">
        CONTACT US
      </NavLink>
    </>
  );
}
