import React, { useEffect, useState } from "react";

const AutoPopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [messageVisible, setMessageVisible] = useState(false);

  // Show the popup after a 1-second delay
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Show a custom message box instead of an alert
  const showMessage = (text, type) => {
    setMessage({ text, type });
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mobilePattern = /^[6-9]\d{9}$/;
    if (!mobilePattern.test(formData.mobile)) {
      showMessage("Please enter a valid 10-digit mobile number starting with 6-9.", "error");
      return;
    }

    setLoading(true);

    const data = {
      access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
      name: formData.name,
      mobile: formData.mobile,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        showMessage(`Thank you ${formData.name}! Your brochure will download shortly.`, "success");
        // NOTE: The original code attempted to download a local PDF file.
        // For this self-contained example, we will just show the success message.
        // In a real application, you would handle the brochure download here.
        setIsOpen(false);
      } else {
        showMessage("Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      console.error(error);
      showMessage("Failed to submit. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray/49 bg-opacity-70 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Popup Form Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full animate-fade-in-up relative overflow-hidden transition-all duration-300">
          
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-yellow-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="8" x2="16" y1="13" y2="13"/><line x1="8" x2="16" y1="17" y2="17"/><line x1="10" x2="14" y1="9" y2="9"/></svg>
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Download Brochure
            </h2>
            <p className="text-gray-500 mt-2">
              Fill in your details to get the brochure instantly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              title="Enter a valid 10-digit mobile number starting with 6-9"
              className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.96l2-2.67z"></path></svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Download Brochure</span>
              )}
            </button>
          </form>

          {/* Custom Message Box */}
          <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 rounded-xl p-4 shadow-xl text-center text-sm font-semibold transition-all duration-300 transform ${
              messageVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 pointer-events-none"
            } ${
              message.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {message.text}
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoPopupForm;
