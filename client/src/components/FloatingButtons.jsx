import React, { useState } from "react";
import PopupForm from "./PopupForm";

// WhatsApp Icon
const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    <line x1="12" y1="12" x2="12" y2="12"></line>
    <line x1="8" y1="12" x2="8" y2="12"></line>
    <line x1="16" y1="12" x2="16" y2="12"></line>
  </svg>
);

// Phone Icon
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="fixed right-4 bottom-4 z-50 flex flex-col items-end space-y-3"
        aria-label="Floating contact buttons"
      >
        {/* Enquiry Now Button */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Enquiry Now"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full shadow-lg font-semibold 
                   transition duration-300 transform hover:scale-110"
        >
          Enquiry Now
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+919990989295"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="bg-yellow-500 hover:bg-yellow-600 text-black p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
        >
          <WhatsappIcon />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919990989295"
          aria-label="Call us now"
          className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
        >
          <PhoneIcon />
        </a>
      </div>

      {/* Popup Form */}
      {isOpen && (
        <PopupForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default FloatingButtons;
