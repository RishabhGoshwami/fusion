// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ThankYou from "./components/ThankYou.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<HomePage section="about" />} />
      <Route path="/amenities" element={<HomePage section="amenities" />} />
      <Route path="/pricing-plan" element={<HomePage section="Pricing-plan" />} />
      <Route path="/floor-plans" element={<HomePage section="floorplans" />} />
      <Route path="/location" element={<HomePage section="location" />} />
      <Route path="/contactus" element={<HomePage section="contactus" />} />
      <Route path="/highlights" element={<HomePage section="highlights"/>}/>
      <Route path="/gallery" element={<HomePage section="gallery"/>}/>
      <Route path="/downloads" element={<HomePage section="downloads"/>}/>
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
