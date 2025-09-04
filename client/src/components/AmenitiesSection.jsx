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
  {
    icon: Droplet,
    text: "Grand Swimming Pool & Kids' Pool",
  },
  {
    icon: Gamepad2,
    text: "Luxury Clubhouse with Indoor Games",
  },
  {
    icon: Dumbbell,
    text: "Modern Gymnasium & Yoga Lawn",
  },
  {
    icon: Activity,
    text: "Jogging & Cycling Track",
  },
  {
    icon: Theater,
    text: "Amphitheatre & Open-Air Seating",
  },
  {
    icon: Baby,
    text: "Kids' Play Area",
  },
  {
    icon: UserRound,
    text: "Senior Citizen Relaxation Zone",
  },
  {
    icon: Volleyball,
    text: "Multi-Sport Courts (Badminton, Basketball, Cricket Pitch)",
  },
  {
    icon: ShieldCheck,
    text: "24x7 Security with Power Backup",
  },
];

const AmenitiesSection = () => {
  return (
   <section className="relative py-20 bg-[url('/luxury-bg.jpg')] bg-cover bg-fixed text-white">
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-green-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-amber-400 text-sm font-semibold uppercase tracking-[0.25em]">
            Amenities
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            A World of{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-green-400 bg-clip-text text-transparent">
              Exceptional Living
            </span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Thoughtfully curated spaces where leisure, wellness, and security
            come together for a truly elevated lifestyle.
          </p>
        </div>

        {/* Grid of amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="group relative flex items-start space-x-4 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-6 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-15px_rgba(250,204,21,0.35)]"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-green-400/20 ring-1 ring-yellow-400/30 group-hover:from-yellow-400/30 group-hover:to-green-400/30 transition">
                  <Icon className="w-6 h-6 text-amber-300 group-hover:text-green-400 transition" />
                </div>
              </div>
              <p className="text-gray-200 font-medium leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
