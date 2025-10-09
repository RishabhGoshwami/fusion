// src/components/HeroBanner.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import property6 from "../assets/background_01.jpg";
import property7 from "../assets/slider_background_01.jpg";
import logoDark from "/logo_dark.webp";
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const HeroBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const images = [property6, property7];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const phonePattern = /^[6-9]\d{9}$/;
      if (!phonePattern.test(formData.phone)) {
        alert("❌ Enter a valid 10-digit mobile number starting with 6–9.");
        setLoading(false);
        return;
      }

      // Web3Forms API
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: "Fusion The Brook and Revulet",
          comments: formData.comments,
        }),
      });

      const web3Result = await web3Response.json();

      // CRM API
      const crmUrl = `https://app.propertyexpertrealtors.com/api/getRecords.php?authentication_key=VndsbUlpKzhKdWpEbEZNSUNva2t1UT09&leads_full_name=${encodeURIComponent(
        formData.name
      )}&leads_phone_number=${encodeURIComponent(
        formData.phone
      )}&leads_email_id=${encodeURIComponent(
        formData.email
      )}&leads_type=LEAD&leads_projects_name=${encodeURIComponent(
        "Fusion The Brook and Revulet"
      )}&leads_source=Website&leads_entry_type=HeroBanner`;

      const crmResponse = await fetch(crmUrl);

      if (web3Result.success && crmResponse.ok) {
        setFormData({ name: "", email: "", phone: "", comments: "" });
        navigate("/thank-you");
      } else {
        alert("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Reusable Input Field
  const InputField = ({ icon: Icon, ...props }) => (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-yellow-700 pointer-events-none" />
      <input
        {...props}
        className="w-full p-3 pl-10 border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 
        transition duration-150 bg-white shadow-sm text-gray-800"
      />
    </div>
  );

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Background Slider */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`background-${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        
        {/* Left Content */}
        <div className="text-center lg:text-left text-white space-y-5 max-w-xl">
          <div className="w-16 h-1 bg-yellow-600 mx-auto lg:mx-0"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            PRESENTING{" "}
            <span className="text-yellow-400">Fusion The Brook and Revulet</span>
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-yellow-400">
            Premium 3/4 BHK Apartments | ₹1.38 Cr* onwards
          </p>
          <p className="text-sm sm:text-base text-gray-200">
            📍 SEC 12, Greater Noida West | RERA: UPRERAPRJ145736
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Experience luxurious living at{" "}
            <strong>Fusion The Brook and Revulet</strong> — world-class
            amenities, landscaped gardens & spacious interiors. Schedule a visit
            or download the brochure now.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="flex justify-center lg:justify-start mb-4">
            <img
              src={logoDark}
              alt="Project Logo"
              className="h-10 sm:h-12 object-contain"
            />
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-600 p-3 mb-4">
            <h3 className="text-sm sm:text-base font-semibold text-yellow-800 uppercase">
              Download E-Brochure & Price List – Fusion The Brook and Revulet
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              icon={UserIcon}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <InputField
              icon={EnvelopeIcon}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail ID"
              required
            />
            <InputField
              icon={PhoneIcon}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile No. "
              required
              pattern="[6-9]{1}[0-9]{9}"
              minLength={10}
              maxLength={10}
            />
           

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm sm:text-base 
              font-bold uppercase bg-gradient-to-r from-yellow-600 to-yellow-800 
              hover:from-yellow-700 hover:to-yellow-900 text-white rounded-lg 
              shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Get Instant Brochure & Price List"}
              {!loading && <ArrowRightOnRectangleIcon className="h-5 w-5" />}
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-600 border-t pt-4">
            
            <a
              href="tel:+919990989295"
              className="inline-block text-lg text-yellow-800 font-bold hover:text-yellow-900 transition"
            >
              📞 +91 9990989295
            </a>
            <p className="mt-2 text-xs text-gray-500">
              We respect your privacy. Your contact information is secured.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
