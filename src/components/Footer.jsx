import React from "react";
import aceTechLogo from "../assets/images/ace_tech.png";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1">
            <img src={aceTechLogo} alt="ATI Logo" className="h-16" />
          </div>

          {/* Office Section */}
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4">OFFICE</h3>
            <p className="font-roboto mb-2">63 rue Tolbiac</p>
            <p className="font-roboto mb-4">75013 Paris</p>
            <p className="font-bebas text-sm">INFO@ACETECHINSIDE.TECH</p>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4">LINKS</h3>
            <ul className="font-roboto space-y-2">
              <li>
                <a
                  href="/careers"
                  className="hover:text-gray-300 relative group inline-block"
                >
                  <span className="font-bebasrelative inline-block transition-transform duration-300 group-hover:translate-x-2">
                    Careers
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-300 relative group inline-block"
                >
                  <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-2">
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/gdpr"
                  className="hover:text-gray-300 relative group inline-block"
                >
                  <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-2">
                    GDPR
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-gray-300 relative group inline-block"
                >
                  <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-2">
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-gray-300 relative group inline-block"
                >
                  <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-2">
                    Terms of Service
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="font-bebas text-xl mb-4">NEWSLETTER</h3>
            <div className="font-roboto mb-4">
              <div className="flex items-center border-b border-white">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-transparent w-full py-2 focus:outline-none"
                />
                <button className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flex items-center">
                <input type="checkbox" id="privacy-consent" className="mr-2" />
                <label htmlFor="privacy-consent" className="text-sm">
                  I agree to the{" "}
                  <a href="/privacy" className="underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bebas text-xl mb-4">SOCIAL LINKS</h3>
              <div className="font-roboto flex space-x-4">
                <a
                  href="#"
                  className="border border-white p-2 rounded-sm hover:text-[#1d4b98]"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="border border-white p-2 rounded-sm hover:text-[#c862dc]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="border border-white p-2 rounded-sm  hover:text-[#1a99f2]"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="border border-white p-2 rounded-sm hover:text-[#e156e6]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="font-roboto border-t border-gray-800 mt-8 pt-8">
          <p className="text-sm">
            Ace Tech Inside © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
