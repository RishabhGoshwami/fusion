import React, { useState } from "react";
import PopupForm from "./PopupForm";

// PDFs import
import brochurePDF from "../assets/Nirala Gateway_99acres.pdf";
import priceListPDF from "../assets/Price_List_Nirala_Gateway.pdf";

const DownloadSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfToDownload, setPdfToDownload] = useState(null);

  const pdfs = {
    brochure: brochurePDF,
    priceList: priceListPDF,
  };

  // Button click → popup open
  const handleDownloadClick = (type) => {
    setPdfToDownload(type);
    setIsOpen(true);
  };

  // Form submit hone ke baad PDF open kare
  const handleFormSubmit = () => {
    setIsOpen(false);
    if (pdfToDownload && pdfs[pdfToDownload]) {
      window.open(pdfs[pdfToDownload], "_blank");
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white text-center overflow-hidden">
      {/* Background luxury glow */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h3 className="text-yellow-400 text-sm font-semibold uppercase tracking-[0.25em]">
          Downloads
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Get the <span className="text-yellow-400">Details</span>
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Access the brochure and price list instantly after filling out the form.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => handleDownloadClick("brochure")}
            className="relative px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transform transition duration-300"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 hover:opacity-100 transition duration-300"></span>
            <span className="relative z-10">📄 Download Brochure</span>
          </button>

          <button
            onClick={() => handleDownloadClick("priceList")}
            className="relative px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-yellow-400/50 hover:scale-105 transform transition duration-300"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 hover:opacity-100 transition duration-300"></span>
            <span className="relative z-10">💰 Download Price List</span>
          </button>
        </div>
      </div>

      {/* Popup Form */}
      {isOpen && (
        <PopupForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSuccess={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default DownloadSection;
