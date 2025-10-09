import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HighlightSection from "./components/HighlightSection";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import AmenitiesSection from "./components/AmenitiesSection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import GallerySection from "./components/GallerySection";
import ThankYou from "./components/ThankYou";
import DownloadSection from "./components/DownloadSection";
import LocationSection from "./components/LocationSection";
import FloorPlanSection from "./components/FloorPlanSection";
import AutoPopupForm from "./components/AutoPopupForm"; // ✅ import autopopup

const HomePage = () => {
  // ✅ Popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ✅ Auto open after 5 seconds (change delay as needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // 5 sec delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <HeroBanner />

      <AboutSection />
      <div id="amenities">
        <AmenitiesSection />
      </div>
      <HighlightSection />
      <div id="floor-plan">
        <FloorPlanSection />
      </div>
      <div id="Pricing-plan">
        <DownloadSection />
      </div>
      <GallerySection />
      <div id="location">
        <LocationSection />
      </div>

      {/* Floating CTA Buttons */}
      <FloatingButtons />

      {/* ✅ Auto Popup Form */}
      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      <div id="contactus">
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
