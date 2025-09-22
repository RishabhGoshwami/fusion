import React, { useState } from "react";
import PopupForm from "./PopupForm";

// WhatsApp Icon
// WhatsApp Icon (Official)
const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M16 3C8.28 3 2 9.28 2 17c0 3.02.88 5.84 2.41 8.21L2 29l3.97-1.26C10.07 30.14 13.92 31 17 31c7.72 0 14-6.28 14-14S23.72 3 16 3zm0 25c-2.72 0-5.28-.81-7.43-2.19l-.53-.33-2.35.74.79-2.28-.35-.54C5.77 21.3 5 19.22 5 17 5 10.92 10.92 5 17 5s12 5.92 12 12-5.92 12-12 12zm6.44-8.94c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.66-.51-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.28.3-1.07 1.04-1.07 2.55 0 1.5 1.1 2.95 1.25 3.16.15.2 2.16 3.3 5.23 4.63.73.31 1.3.5 1.74.64.73.22 1.4.19 1.93.12.59-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z"/>
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
