// src/components/HighlightSection.jsx
import React from "react";
import { Hammer, Gem, Trees, Sparkles, MapPin, ShieldCheck } from "lucide-react";

// ✅ Top feature chips
const topFeatures = [
  { icon: Hammer, title: "Mivan Formwork Construction" },
  { icon: Gem, title: "Premium 3 & 4 BHK Apartments" },
  { icon: Trees, title: "12.5 Acres of Green and Open Spaces" },
];

// ✅ Detailed highlight cards
const highlightCards = [
  {
    icon: Sparkles,
    title: "Luxury Amenities for an Elevated Lifestyle",
    desc:
      "Clubhouse, fitness zones, leisure areas, and community spaces designed to elevate everyday living at Fusion Rivulet.",
  },
  {
    icon: MapPin,
    title: "Prime Location in Greater Noida West",
    desc:
      "Enjoy seamless connectivity to major roads, business hubs, schools, and healthcare from Fusion Rivulet.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted RERA & Bank Approval",
    desc:
      "Fusion Rivulet is pre-approved by leading financial institutions, ensuring a smoother and faster home loan process.",
  },
];

const HighlightSection = () => {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden py-20 bg-white text-gray-900"
    >
      {/* Background Accents */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-8 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-500">
            Why Choose Us
          </h3>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            <span className="text-gray-800">Fusion The Brook and Rivulet</span>{" "}
            is <span className="text-yellow-500">Designed for Better Living</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-700">
            Experience a thoughtful blend of advanced construction, superior
            green spaces, and unmatched connectivity.
          </p>
        </div>

        {/* Top Feature Chips */}
        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {topFeatures.map(({ icon: Icon, title }, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-yellow-100 p-3 ring-1 ring-inset ring-yellow-300">
                <Icon className="h-6 w-6 text-yellow-500" />
              </div>
              <p className="font-medium text-gray-900">{title}</p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Detailed Highlight Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlightCards.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-yellow-100 p-3 ring-1 ring-inset ring-yellow-300">
                <Icon className="h-6 w-6 text-yellow-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{desc}</p>

              {/* Subtle Glow */}
              <div className="pointer-events-none absolute -right-2 -top-2 h-16 w-16 rounded-full bg-amber-200/30 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
