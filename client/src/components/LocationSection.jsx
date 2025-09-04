import React from "react";

const LocationSection = () => {
  const locations = [
    
    "Police Chawki, D Park – 1.7 kms (3 mins away)",
    "Education Hub – 2.5 kms (5 mins away)",
    "Yatharth Super Specialty Hospital – 7.5 kms (13 mins away)",
    "GT Road – 10 kms (15 mins away)",
    "High Street Mall Crown Plaza – 6.5 kms (10 mins away)",
    "5 Star Hotel Crown Plaza – 8.4 kms (10 mins away)",
    "Indira Gandhi Intl Airport – 44 kms (1 hr away)",
    "Noida Intl Airport – 63 kms (1 hr away)",
    "Proposed Sec-12 Metro Station – 1.7 kms (3 mins away)",
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Location Advantages */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-gold-400">
            Location Advantage
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            {locations.map((loc, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border-b border-yellow-600/30 pb-2"
              >
                <span className="text-yellow-400 font-bold">{i + 1}.</span>
                <span>{loc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Map Embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-yellow-600/30">
          <iframe
            title="Fusion The Rivulet Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70000.65184931788!2d77.483273!3d28.5596134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced2867bd4e8d%3A0xcfd0f2b00ac6185e!2sFusion%20The%20Rivulet!5e0!3m2!1sen!2sin!4v1693300000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
