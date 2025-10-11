// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "/logo_dark.webp";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Who We Are", path: "/about" },
    { name: "Download Brochure & Price List", path: "/downloads" },
  { name: "Amenities", path: "/amenities" },
  { name: "Highlights", path: "/highlights" },
  { name: "Layout & Floors", path: "/floor-plans" },
  { name: "Gallery", path:"/gallery"},
  { name: "Location", path: "/location" },
  { name: "Contact Us", path: "/contactus" },
 // ✅ added here
];

const Navbar = ({ openForm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link.path === "/brochure") {
      openForm?.();
    } else {
      navigate(link.path);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="sr-only">Fusion The Rivulet</h1>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleClick({ path: "/" });
            }}
          >
            <img src={logo} alt="Fusion The Rivulet Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(link)}
              className="relative font-medium transition duration-200 text-gray-800 hover:text-yellow-600"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200 shadow-inner">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(link)}
              className="block w-full text-left text-gray-800 hover:text-yellow-600 transition py-2 px-3 rounded-lg"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
