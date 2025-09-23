import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  useEffect(() => {
    // This effect handles the initial Google Analytics conversion event.
    // It fires once the component mounts, ensuring the conversion is tracked.
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17499013491/IbexCNjz-JEbEPOCl5hB",
        value: 1.0,
        currency: "INR",
      });
    }

    // This defines a global function for tracking a second conversion event.
    // It's called when the user clicks the "Back to Home" button.
    window.gtag_report_conversion = function (url) {
      const callback = function () {
        if (typeof url !== "undefined") {
          window.location = url;
        }
      };
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-17552428153/GdV5CLy6oJkbEPmY07FB",
          value: 1.0,
          currency: "INR",
          event_callback: callback,
        });
      }
      return false;
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 py-12">
      <div className="w-full max-w-lg transform rounded-3xl bg-gray-800 p-8 text-center shadow-2xl transition-all duration-500 hover:scale-[1.02]">
        <div className="flex flex-col items-center">
          <svg
            className="mb-6 h-20 w-20 animate-bounce text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h1 className="mb-2 text-4xl font-extrabold text-white sm:text-5xl">
            Success! Your request is in.
          </h1>
          <p className="text-md mb-6 font-light text-gray-400 sm:text-lg">
            We've received your details and are thrilled you're on board.
            <br />
            Our team is already working to get in touch with you shortly.
          </p>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            What's next?
          </h2>
          <ul className="mb-8 space-y-3 text-left text-gray-300">
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Keep an eye on your inbox for our email.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>A member of our team will call you within 24 hours.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Feel free to explore our site while you wait for our response.
              </span>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          onClick={() => window.gtag_report_conversion("/")}
          className="inline-flex transform items-center justify-center rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          <span className="mr-2 text-xl">🏠</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;