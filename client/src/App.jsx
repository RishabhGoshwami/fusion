import React from "react";
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
import Disclaimer from "./components/Disclaimer";
import DownloadSection from "./components/DownloadSection";
import LocationSection from "./components/LocationSection";
import FloorPlanSection from "./components/FloorPlanSection";
import AutoPopupForm from "./components/AutoPopupForm"; // ✅ import autopopup

const HomePage = () => (
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
    <LocationSection />

    {/* Floating CTA Buttons */}
    <FloatingButtons />
    

    {/* Auto Popup Form */}
    <AutoPopupForm /> {/* ✅ This will open automatically on every page load */}

    <Footer />
  </>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </>
  );
}

export default App;
