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

  const handleDownloadClick = (type) => {
    setPdfToDownload(type);
    setIsOpen(true);
  };

  const handleFormSubmit = () => {
    setIsOpen(false);
    if (pdfToDownload && pdfs[pdfToDownload]) {
      window.open(pdfs[pdfToDownload], "_blank");
    }
  };

  return (
    <div className="relative py-20 bg-white text-gray-800 text-center overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-[0.25em] mb-2">
          Downloads
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
          Get the <span className="text-yellow-500">Details</span>
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Access the brochure and price list instantly after filling out the form.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => handleDownloadClick("brochure")}
            className="relative px-8 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:shadow-yellow-300/50 hover:scale-105 transform transition duration-300"
          >
            <span className="relative z-10">📄 Download Brochure</span>
          </button>

          <button
            onClick={() => handleDownloadClick("priceList")}
            className="relative px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-blue-300/50 hover:scale-105 transform transition duration-300"
          >
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
