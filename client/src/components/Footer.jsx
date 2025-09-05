import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link) => {
    if (link.id.startsWith("/")) {
      navigate(link.id);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(link.id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        const element = document.getElementById(link.id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Icons
  const FacebookIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
  const InstagramIcon = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
  const TwitterIcon = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
  const YoutubeIcon = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2A51 51 0 0 0 12 4.17a51 51 0 0 0-8.62.25 2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.5a29 29 0 0 0 .54 5.08 2.78 2.78 0 0 0 1.94 2 51 51 0 0 0 9.5-.25 51 51 0 0 0 9.5.25 2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.5a29 29 0 0 0-.46-5.08z"></path>
      <polygon points="10 8 16 11.5 10 15 10 8"></polygon>
    </svg>
  );

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white">
      <div className="py-14 max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10 relative z-10">
        {/* About/Disclaimer */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-3 text-yellow-400">Disclaimer</h3>
          <p className="text-sm leading-relaxed text-gray-400 max-w-lg bg-gray-800/40 p-4 rounded-lg border border-yellow-600/20">
            The content provided on this website is for information purposes only
            and does not constitute an offer to avail any service. Prices are subject
            to change without prior notice. Images are for representation only.
            This is the official website of an authorized marketing partner (PROPERTY EXPERT REALTORS).
            Project RERA No. UPRERAPRJ145736. Agent RERA No. UPRERAAGT23257.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-yellow-400">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "Who We Are" },
              { id: "amenities", label: "Amenities" },
              { id: "price-plan", label: "Pricing Plans" },
              { id: "floor-plan", label: "Layout & Floors" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className="hover:text-yellow-400 transition"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-yellow-400">Contact Info</h4>
          <address className="not-italic text-sm text-gray-300 space-y-1">
            <p>📍 Noida Extension, Uttar Pradesh</p>
            <p>📞 +91 9990989295</p>
          </address>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3 text-yellow-400">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/1GXvDdtHU6/"
              className="hover:text-yellow-400 transition"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/propertyexpertrealtors?igsh=MWh4c3N0NGMwbGw1NA=="
              className="hover:text-yellow-400 transition"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com/nirala_world"
              className="hover:text-yellow-400 transition"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://youtube.com/@propertyexpertrealtors?si=CinG5e80OwYdNhSM"
              className="hover:text-yellow-400 transition"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-700 py-5">
        © {new Date().getFullYear()} Property Expert Realtor Pvt. Ltd. (RERA ID:
        UPRERAAGT23257). <br />
        Authorized Channel Partner for fusion Rivulet (Project RERA No. UPRERAPRJ145736.).
      </div>
    </footer>
  );
};

export default Footer;
