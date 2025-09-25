import React from "react";
import {
  Droplet,
  Gamepad2,
  Dumbbell,
  Activity,
  Theater,
  Baby,
  UserRound,
  Volleyball,
  ShieldCheck,
} from "lucide-react";

const amenities = [
  { icon: Droplet, text: "Grand Swimming Pool & Kids' Pool" },
  { icon: Gamepad2, text: "Luxury Clubhouse with Indoor Games" },
  { icon: Dumbbell, text: "Modern Gymnasium & Yoga Lawn" },
  { icon: Activity, text: "Jogging & Cycling Track" },
  { icon: Theater, text: "Amphitheatre & Open-Air Seating" },
  { icon: Baby, text: "Kids' Play Area" },
  { icon: UserRound, text: "Senior Citizen Relaxation Zone" },
  { icon: Volleyball, text: "Multi-Sport Courts (Badminton, Basketball, Cricket Pitch)" },
  { icon: ShieldCheck, text: "24x7 Security with Power Backup" },
];

const AmenitiesSection = () => {
  return (
    <section className="relative py-20 bg-white text-gray-900">
      {/* Ambient overlays */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl"></div>
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-green-200/20 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-amber-500 text-sm font-semibold uppercase tracking-[0.25em]">
            Amenities
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            A World of{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 bg-clip-text text-transparent">
              Exceptional Living
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Thoughtfully curated spaces where leisure, wellness, and security come together for a truly elevated lifestyle.
          </p>
        </div>

        {/* Grid of amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="group relative flex items-start space-x-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-100/50 ring-1 ring-yellow-300 group-hover:bg-yellow-200/50 transition">
                  <Icon className="w-6 h-6 text-amber-500 group-hover:text-green-500 transition" />
                </div>
              </div>
              <p className="text-gray-700 font-medium leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
