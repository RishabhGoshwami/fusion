// src/components/HeroBanner.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import property6 from "../assets/background_01.jpg";
import property7 from "../assets/slider_background_01.jpg";
import logoDark from "../assets/logo_dark.webp";

const HeroBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Slider images
  const images = [property6, property7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
          project: "Fusion The Rivulet", // 👈 Project name add kiya
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormData({ name: "", email: "", phone: "", comments: "" });
        navigate("/thank-you");
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`background-${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 mt-2 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-16">
        <div className="text-left">
          {/* Top Danda (rod) */}
          <div className="relative flex justify-start items-center">
            <div className="w-64 md:w-80 h-2 bg-yellow-800 rounded-full shadow-lg"></div>
          </div>

          {/* Hanging ropes */}
          <div className="flex justify-between w-64 md:w-80 -mt-1 ml-0">
            <div className="w-1 h-6 bg-yellow-700"></div>
            <div className="w-1 h-6 bg-yellow-700"></div>
          </div>

          {/* Banner (Form Section) */}
          <div
            className="relative bg-[#fff8dc]/95 border-4 border-yellow-700 
            rounded-b-3xl shadow-2xl w-full max-w-sm p-6 md:p-8"
          >
            {/* Logo */}
            <div className="flex justify-center mb-2">
              <img
                src={logoDark}
                alt="Fusion The Rivulet Logo"
                className="h-12 md:h-16 object-contain"
              />
            </div>

            {/* Project Info */}
            <div className="text-center mb-4">
              <p className="text-xl font-semibold text-yellow-700 mb-2">
                Starting Price: Rs. 1.38 Cr*
              </p>
              <p className="text-base font-bold text-gray-900 mb-1">
                PRESENTING RIVULET - 3/4 BHK
              </p>
              <p className="text-sm text-gray-700 mb-1">
                RERA No.: UPRERAPRJ145736
              </p>
              <p className="text-sm text-gray-700 mb-4">
                📍 SEC 12, Greater Noida West
              </p>

              {/* Form Heading */}
              <h2 className="text-lg font-bold text-yellow-800 mb-3 uppercase tracking-wider">
                Query Form – Fusion The Rivulet
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Hidden Project Name */}
              <input type="hidden" name="project" value="Fusion The Rivulet" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 border-2 border-yellow-600 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white/70"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail ID"
                className="w-full p-3 border-2 border-yellow-600 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white/70"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile No."
                className="w-full p-3 border-2 border-yellow-600 rounded-lg focus:ring-2 focus:ring-yellow-500 bg-white/70"
                required
                pattern="[6-9]{1}[0-9]{9}"
                minLength={10}
                maxLength={10}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 text-lg font-semibold 
      bg-gradient-to-r from-yellow-500 to-yellow-700 
      hover:from-yellow-600 hover:to-yellow-800 
      text-black rounded-xl shadow-lg transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>

            {/* Phone */}
            <div className="text-center mt-4">
              <a
                href="tel:+917579487675"
                className="inline-block text-lg font-bold text-yellow-700 hover:underline"
              >
                📞 +91 9990989295
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
