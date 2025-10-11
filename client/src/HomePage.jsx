// src/HomePage.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import AboutSection from "./components/AboutSection.jsx";
import AmenitiesSection from "./components/AmenitiesSection.jsx";
import FloorPlanSection from "./components/FloorPlanSection.jsx";
import DownloadSection from "./components/DownloadSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import LocationSection from "./components/LocationSection.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";
import HighlightSection from "./components/HighlightSection.jsx";
import AutoPopupForm from "./components/AutoPopupForm.jsx";

const sectionMap = {
  about: "about",
  amenities: "amenities",
  highlights: "highlights",
  floorplans: "floorplans",
  location:  "location",
  contactus: "contactus",
  downloads: "downloads",
  gallery: "gallery",
};
const HomePage = ({ section }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Auto popup
  useEffect(() => {
    const timer = setTimeout(() => setIsPopupOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to section
  useEffect(() => {
    if (section && sectionMap[section]) {
      const element = document.getElementById(sectionMap[section]);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [section]);

  return (
    <>
      <Navbar />
      <HeroBanner />
      <AboutSection id="about" />
       <DownloadSection id="downloads" />
      <AmenitiesSection id="amenities" />
      <HighlightSection id="highlights"/>
      <FloorPlanSection id="floorplans" />
     
      <GallerySection id="gallery" />
      <LocationSection id="location" />
      <Footer />
      <FloatingButtons />
      <AutoPopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default HomePage;
