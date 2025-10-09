import React, { useState, useEffect } from "react";

// PDF path (should be placed inside `public/assets/Fusion Brochure.pdf`)
const pdfBrochure = "/assets/Fusion Brochure.pdf";

export default function AutoPopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("");
  const [showDownload, setShowDownload] = useState(false);

  // Auto open/close popup (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) onClose(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    // Validate phone number
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(formData.phone)) {
      setStatus("❌ Enter a valid 10-digit mobile number starting with 6–9.");
      return;
    }

    try {
      // Send data to Web3Forms
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: "Fusion",
        }),
      });
      const web3Result = await web3Response.json();

      // Send data to CRM API
      const crmUrl = `https://app.propertyexpertrealtors.com/api/getRecords.php?authentication_key=VndsbUlpKzhKdWpEbEZNSUNva2t1UT09&leads_full_name=${encodeURIComponent(
        formData.name
      )}&leads_phone_number=${encodeURIComponent(
        formData.phone
      )}&leads_email_id=${encodeURIComponent(
        formData.email
      )}&leads_type=LEAD&leads_projects_name=${encodeURIComponent(
        "Fusion"
      )}&leads_source=Website&leads_entry_type=AutoPopup`;

      const crmResponse = await fetch(crmUrl);
      const crmText = await crmResponse.text();

      if (web3Result.success && crmResponse.ok) {
        setStatus("✅ Submitted successfully! Click below to download brochure.");
        setFormData({ name: "", email: "", phone: "" });
        setShowDownload(true);
      } else {
        setStatus("❌ Submission failed. Please try again.");
        console.warn("CRM Response:", crmText);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("❌ Something went wrong. Try again later.");
    }
  };

  // Handle brochure download
  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = pdfBrochure;
      link.download = "Fusion-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setStatus("✅ Download started!");
    } catch {
      window.open(pdfBrochure, "_blank");
      setStatus("Opened in new tab.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      aria-describedby="popup-desc"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg transform transition-all duration-300 scale-95 animate-zoomIn">
        {/* Close Button */}
        <button
          onClick={() => {
            setShowDownload(false);
            setStatus("");
            onClose();
          }}
          aria-label="Close form popup"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors duration-200 text-3xl leading-none"
        >
          &times;
        </button>

        {/* Title */}
        <h2
          id="popup-title"
          className="text-3xl font-extrabold text-center text-gray-800 mb-2 font-poppins"
        >
          Fusion Homes
        </h2>
        <p
          id="popup-desc"
          className="text-xl text-center font-semibold text-gray-600 mb-4 font-inter"
        >
          Fill in your details and download the brochure instantly! ✨
        </p>

        <p className="text-sm text-gray-500 text-center mb-6">
          I authorize representatives to contact me via Call, SMS, Email, or WhatsApp regarding project updates and offers.
        </p>

        {/* Form */}
        {!showDownload ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full border-b-2 border-gray-300 focus:border-yellow-500 outline-none p-2 transition-colors duration-200 font-medium"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="sr-only" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full border-b-2 border-gray-300 focus:border-yellow-500 outline-none p-2 transition-colors duration-200 font-medium"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="sr-only" htmlFor="phone">
              Your Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your Mobile Number"
              className="w-full border-b-2 border-gray-300 focus:border-yellow-500 outline-none p-2 transition-colors duration-200 font-medium"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              📥 Download Brochure
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-green-700 font-bold text-lg">
              🎉 Thank you! Your form has been submitted successfully.
            </p>
            <button
              onClick={handleDownload}
              className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              📄 Download Fusion Brochure
            </button>
            <button
              onClick={() => {
                setShowDownload(false);
                setStatus("");
                onClose();
              }}
              className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        )}

        {status && (
          <p className="text-center text-sm mt-4 font-semibold text-gray-600">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
