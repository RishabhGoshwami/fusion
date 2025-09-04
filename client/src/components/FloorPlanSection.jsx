import React, { useState } from "react";
import floor2 from "../assets/floo2.webp";
import floor3 from "../assets/floor3.jpg";
import sitePlan from "../assets/gal6.jpg";

const FloorPlanSection = () => {
  const [activePlan, setActivePlan] = useState("4bhk");

  const plans = [
    { id: "4bhk", label: "3 BHK + 3T + 4B", img: floor2 },
    { id: "3bhk", label: "4 BHK + 3T + 4B", img: floor3 },
    { id: "site", label: "Site Plan", img: sitePlan },
  ];

  const currentPlan = plans.find((plan) => plan.id === activePlan);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Floor <span className="text-yellow-600">Plans</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Explore thoughtfully designed layouts tailored for modern living.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activePlan === plan.id
                  ? "bg-yellow-600 text-white shadow-lg"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-yellow-50"
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* Image Display */}
        <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-xl">
          <img
            src={currentPlan.img}
            alt={currentPlan.label}
            className="w-full h-auto object-cover transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSection;
