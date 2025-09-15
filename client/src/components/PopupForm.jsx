import React, { useState } from "react";

const PopupForm = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const projectName = "Fusion The Rivulet";

  if (!isOpen) return null;

  const validateMobile = (number) => {
    // Only 10-digit Indian mobile numbers starting with 6,7,8,9
    const regex = /^[6-9][0-9]{9}$/;
    return regex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate mobile number
    if (!validateMobile(mobile)) {
      alert("Please enter a valid 10-digit mobile number (starting with 6-9).");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "d5f504e4-3e5a-4dda-8255-62123d25fe81");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("project", projectName); // ✅ Project name added

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert(`Thank you! Your details for project "${projectName}" have been submitted successfully.`);
        if (onSuccess) onSuccess();
        setName("");
        setEmail("");
        setMobile("");
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("Something went wrong!");
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
