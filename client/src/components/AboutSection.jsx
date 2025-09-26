import React from "react";
import inner01 from "../assets/inner_01.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 scroll-mt-20 bg-white text-gray-900"
    >
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 -right-8 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-amber-500 text-sm font-semibold uppercase tracking-[0.3em]">
            About Fusion The Brook & Rivulet
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Experience Luxury Living in{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Sector 12, Greater Noida West
            </span>
          </h2>
          <p className="text-lg font-medium text-gray-700">
            Welcome to <span className="text-amber-400 font-semibold">Fusion The Brook & Rivulet</span> — a premium residential enclave combining elegance, exclusivity, and engineered excellence.
          </p>

          <p className="text-gray-600 leading-relaxed">
            <strong className="text-gray-900">Fusion The Brook & Rivulet</strong> is a luxury residential project in **Sector 12, Noida Extension**, offering **3 & 4 BHK apartments** with **MIVAN construction**, **high ceiling height**, and low-density design. The project is RERA-registered (UPRERAPRJ145736) and approved by SBI bank.  
            Residents enjoy **resort-style amenities** like a clubhouse, swimming pool, gymnasium, landscaped gardens, jogging track, children’s play area, and **24/7 power backup & security**.  
            With only 6 units per floor and a three-side open layout, this development ensures privacy, ventilation & abundant natural light.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Strategically located just **300 m from the upcoming metro station** and along a **130 m main road frontage**, it offers seamless connectivity to Noida, Greater Noida, Delhi NCR. You’ll find top schools, reputed hospitals, retail hubs, and major road networks all within easy reach.
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <img
            src={inner01}
            alt="Fusion The Brook & Rivulet Preview"
            className="rounded-2xl shadow-[0_10px_30px_rgba(255,215,0,0.15)] max-w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
