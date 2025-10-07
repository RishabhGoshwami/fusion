import React, { useState } from "react";

const PopupForm = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const projectName = "Fusion The Brook & Rivulet";

  if (!isOpen) return null;

  const validateMobile = (number) => /^[6-9][0-9]{9}$/.test(number);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateMobile(mobile)) {
      alert("Please enter a valid 10-digit mobile number (starting with 6–9).");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Send data to Web3Forms (email notification)
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
          name,
          email,
          mobile,
          project: projectName,
        }),
      });

      const web3Result = await web3Response.json();

      // 2️⃣ Send data to CRM (lead capture)
      const crmUrl = `https://app.propertyexpertrealtors.com/api/getRecords.php?authentication_key=VndsbUlpKzhKdWpEbEZNSUNva2t1UT09&leads_full_name=${encodeURIComponent(
        name
      )}&leads_phone_number=${encodeURIComponent(
        mobile
      )}&leads_email_id=${encodeURIComponent(
        email
      )}&leads_type=LEAD&leads_projects_name=${encodeURIComponent(
        projectName
      )}&leads_source=Website&leads_entry_type=PopupForm`;

      const crmResponse = await fetch(crmUrl);
      const crmText = await crmResponse.text();

      // 3️⃣ Combine result handling
      if (web3Result.success && crmResponse.ok) {
        alert(
          `✅ Thank you ${name}! Your details for "${projectName}" have been submitted successfully.`
        );

        // Reset state
        setName("");
        setEmail("");
        setMobile("");

        if (onSuccess) onSuccess();
        onClose();
      } else {
        alert("❌ Submission failed. Please try again.");
        console.warn("CRM Response:", crmText);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-yellow-600 text-xl font-semibold"
          aria-label="Close form"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-yellow-700 mb-2 text-center">
          {projectName}
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Fill in your details below and our sales team will get in touch with
          you shortly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            required
            onChange={(e) => setMobile(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />

          {/* Disclaimer */}
          <p className="text-xs text-gray-500">
            By submitting this form, you agree to receive communication from our
            sales team. Your information will be kept confidential and used only
            for inquiry purposes.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-lg px-4 py-3 font-semibold hover:from-yellow-700 hover:to-yellow-600 transition-colors disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* RERA Info */}
        <p className="text-xs text-gray-700 mt-6 text-center font-medium">
          Project RERA No:{" "}
          <span className="text-yellow-700 font-semibold">
            UPRERAPRJ145736
          </span>
        </p>
      </div>
    </div>
  );
};

export default PopupForm;
