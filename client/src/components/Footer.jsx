import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
          ...formData,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus("❌ Something went wrong. Try again!");
      }
    } catch (error) {
      setStatus("❌ Error sending message!");
      console.error(error);
    }
  };

  return (
    <footer className="relative bg-white text-gray-900">
      <div className="py-14 max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10 relative z-10">
        {/* Left: Disclaimer + Marketing Content */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Disclaimer */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-yellow-500">Disclaimer</h3>
            <p className="text-sm leading-relaxed text-gray-700 max-w-lg bg-gray-50/50 p-4 rounded-lg border border-yellow-300/40">
              The content provided on this website is for information purposes only and does not constitute an offer to avail any service. Prices are subject to change without prior notice. Images are for representation only. This is the official website of an authorized marketing partner (<strong>PROPERTY EXPERT REALTORS</strong>). Project RERA No. <strong>UPRERAPRJ145736</strong>. Agent RERA No. <strong>UPRERAAGT23257</strong>.
            </p>
          </div>

          {/* Marketing / SEO Content */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-yellow-500">Looking for Your Dream Apartment?</h3>
            <p className="text-sm leading-relaxed text-gray-700 max-w-lg bg-gray-50/50 p-4 rounded-lg border border-yellow-300/40">
              Discover premium <strong>3 BHK</strong> and <strong>4 BHK apartments</strong> in Greater Noida West at <span className="font-semibold text-yellow-500">Fusion The Brook & Rivulet</span>, a prestigious residential project offering modern amenities, luxurious interiors, landscaped gardens, and world-class design. Perfect for families and investors alike, these flats provide an unmatched combination of comfort, style, and excellent <span className="font-semibold text-yellow-500">investment potential</span>. Explore your ideal home today and experience the ultimate in <span className="font-semibold text-yellow-500">luxury living</span>.
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:col-span-2 bg-gray-50/60 p-6 rounded-lg border border-yellow-300/40 shadow-md">
          <h3 className="text-lg font-bold mb-4 text-yellow-500">Contact Us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-label="Footer Contact Form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-3 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-3 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[6-9][0-9]{9}"
              title="Enter 10-digit mobile number starting with 6-9"
              className="px-3 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="px-3 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none focus:border-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
            >
              Send
            </button>
          </form>
          {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-200 py-5">
        © {new Date().getFullYear()} Property Expert Realtor Pvt. Ltd. (RERA ID: UPRERAAGT23257). <br />
        Authorized Channel Partner for <strong>Fusion Rivulet</strong> (Project RERA No. UPRERAPRJ145736).
      </div>
    </footer>
  );
};

export default Footer;
