import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      // Fire normal conversion event
      window.gtag("event", "conversion", {
        send_to: "AW-17499013491/IbexCNjz-JEbEPOCl5hB",
        value: 1.0,
        currency: "INR",
      });
    }

    // Define gtag_report_conversion function globally
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">✅ Thank You!</h1>
        <p className="text-gray-700 mb-6">
          We have received your details. Our team will contact you shortly.
        </p>
        <Link
          to="/"
          onClick={() => window.gtag_report_conversion("/")} // <-- gtag_report_conversion call
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
