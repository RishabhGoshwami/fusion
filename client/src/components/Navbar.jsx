import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaPhone } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo_dark.webp"; // ✅ import logo from assets

const navLinks = [
  { name: "Home", id: "home", href: "/" },
  { name: "Who We Are", id: "about", href: "/#about" },
  { name: "Amenities", id: "amenities", href: "/#amenities" },
  { name: "Pricing Plans", id: "Pricing-plan", href: "/#Pricing-Plan" },
  { name: "Layout & Floors", id: "floor-plan", href: "/#floor-plan" },
  { name: "Brochure Download", id: "brochure", href: "/#brochure" },
];

const Navbar = ({ openForm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (link) => {
    if (link.id === "brochure") {
      openForm();
    } else if (link.id === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`/#${link.id}`);
      setTimeout(() => {
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="sr-only">Nirala World</h1>
          <a href="/">
            <img src={logo} alt="Nirala World Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link);
              }}
              className={`relative font-medium transition duration-200 text-gray-800 hover:text-yellow-600 ${
                location.hash === `#${link.id}`
                  ? "text-yellow-600 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-yellow-600 after:left-0 after:-bottom-1"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Call button */}
          <a
            href="tel:+919990989295"
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-5 py-2 rounded-full font-medium hover:from-yellow-700 hover:to-yellow-600 shadow-md transition"
          >
            <FaPhone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="tel:+919990989295"
            className="bg-yellow-600 text-white p-2 rounded-full"
            aria-label="Call us now"
          >
            <FaPhone size={18} />
          </a>
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
            <a
              key={idx}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link);
              }}
              className="block w-full text-left text-gray-800 hover:text-yellow-600 transition py-2 px-3 rounded-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
