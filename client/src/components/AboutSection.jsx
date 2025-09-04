import React from "react";
import inner01 from "../assets/inner_01.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 scroll-mt-20 bg-gradient-to-r from-black via-zinc-900 to-black"
    >
      {/* Subtle golden glow overlays */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 -right-8 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white">
        {/* Left Side - Text */}
        <div className="space-y-6">
          <h3 className="text-amber-400 text-sm font-semibold uppercase tracking-[0.3em]">
            About Fusion Rivulet
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Fusion The Rivulet
            </span>
          </h2>
          <p className="text-lg font-medium text-gray-200">
            Discover a life crafted for{" "}
            <span className="text-amber-300 font-semibold">comfort</span>,{" "}
            <span className="text-amber-300 font-semibold">elegance</span>, and{" "}
            <span className="text-amber-300 font-semibold">exclusivity</span>.
          </p>

          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Fusion The Rivulet</strong> offers
            you premium residences with{" "}
            <span className="text-amber-400">world-class features</span>,{" "}
            <span className="text-amber-400">low-density living</span>, and{" "}
            <span className="text-amber-400">exceptional design</span> — all in
            the heart of{" "}
            <span className="text-amber-400">Noida Extension</span>.
          </p>

          {/* Decorative golden line */}
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-full"></div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={inner01}
            alt="Fusion Rivulet Preview"
            className="rounded-2xl shadow-[0_10px_30px_rgba(255,215,0,0.2)] max-w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
