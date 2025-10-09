import React from "react";
import inner01 from "../assets/inner_01.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 scroll-mt-20 bg-white text-gray-900"
    >
      {/* Decorative Background Blurs */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 -right-8 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* ===== Center-Aligned Heading Section ===== */}
        <div className="text-center mb-16">
          <h3 className="text-amber-500 text-sm font-semibold uppercase tracking-[0.3em]">
            About Fusion The Brook & Rivulet
          </h3>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3">
            Experience Premium Luxury Living in{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Sector 12, Greater Noida West
            </span>
          </h2>

          <div className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-full"></div>
        </div>

        {/* ===== Content + Image Section ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg font-medium text-gray-700">
              Welcome to{" "}
              <span className="text-amber-400 font-semibold">
                Fusion The Brook & Rivulet
              </span>{" "}
              — an exclusive residential enclave combining elegance, modern
              architecture, and engineered excellence in Noida Extension.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Fusion The Brook & Rivulet</strong> is a RERA-registered
              luxury project (UPRERAPRJ145736) offering{" "}
              <strong>3 & 4 BHK apartments</strong> with{" "}
              <strong>MIVAN construction</strong>, high ceiling heights, and
              low-density design. Enjoy <strong>resort-style amenities</strong>{" "}
              including a clubhouse, swimming pool, gymnasium, landscaped
              gardens, jogging track, children’s play area, and{" "}
              <strong>24/7 power backup & security</strong>. Only 6 units per
              floor with a three-side open layout ensure maximum privacy,
              ventilation, and natural light.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Strategically located just{" "}
              <strong>300 m from the upcoming metro station</strong> and along a{" "}
              <strong>130 m main road frontage</strong>, the project offers
              seamless connectivity to Noida, Greater Noida, and Delhi NCR.
              Nearby you'll find top schools, reputed hospitals, retail hubs,
              and major road networks — perfect for modern urban living.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Invest in <strong>Fusion The Brook & Rivulet</strong> for a
              lifestyle that combines comfort, convenience, and long-term
              property value in Greater Noida West.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={inner01}
              alt="Fusion The Brook & Rivulet Residential Project Preview"
              className="rounded-2xl shadow-[0_10px_30px_rgba(255,215,0,0.15)] max-w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
