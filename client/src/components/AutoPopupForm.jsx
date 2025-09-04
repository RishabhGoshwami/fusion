import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AutoPopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Auto open after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsOpen(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("access_key", "d5f504e4-3e5a-4dda-8255-62123d25fe81"); // 🔑 Web3Forms API Key
    data.append("name", formData.name);
    data.append("number", formData.number);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (result.success) {
        setFormData({ name: "", number: "" });
        setIsOpen(false); // ✅ band kar de
        navigate("/thank-you"); // ✅ redirect
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (err) {
      alert("⚠️ Something went wrong!");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[100] bg-gray-900/75"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white p-8 sm:p-10 rounded-2xl w-11/12 max-w-lg relative shadow-2xl">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold"
          aria-label="Close form"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Nirala World Gateway
        </h2>
        <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
          Contact us to find your dream home.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            id="number"
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Your Number"
            required
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AutoPopupForm;
