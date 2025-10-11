// src/components/LocationSection.jsx
import React from "react";

const LocationSection = () => {
  const locations = [
    "Proposed Sec-12 Metro Station – 1.7 kms (3 mins away)",
    "Education Hub (Schools/Colleges) – 2.5 kms (5 mins away)",
    "High Street Mall Crown Plaza – 6.5 kms (10 mins away)",
    "Yatharth Super Specialty Hospital – 7.5 kms (13 mins away)",
    "GT Road Access – 10 kms (15 mins away)",
    "Police Chowki, D Park – 1.7 kms (3 mins away)",
    "5 Star Hotel Crown Plaza – 8.4 kms (10 mins away)",
    "Indira Gandhi Intl Airport (IGI) – 44 kms (1 hr away)",
    "Noida Intl Airport (Upcoming) – 63 kms (1 hr away)",
  ];

  return (
    <section id="location" className="relative bg-white text-gray-900 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Prime Location of{" "}
            <span className="text-yellow-600">Fusion The Brook and Rivulet</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            <strong>Fusion The Brook and Rivulet</strong> enjoys strategic
            connectivity in <strong>Sector 12, Greater Noida West</strong>. Live
            just minutes away from essential infrastructure, ensuring convenience
            and high appreciation potential.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Location Highlights */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-yellow-500 pl-3">
              Key Connectivity Highlights
            </h3>
            <ul className="space-y-4 text-base text-gray-700">
              {locations.map((loc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500">
            <iframe
              title="Fusion The Rivulet Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70000.65184931788!2d77.483273!3d28.5596134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced2867bd4e8d%3A0xcfd0f2b00ac6185e!2sFusion%20The%20Rivulet!5e0!3m2!1sen!2sin!4v1693300000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
