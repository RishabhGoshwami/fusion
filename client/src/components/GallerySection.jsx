import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// ✅ images import
import gallery1 from "../assets/gallery_1.jpg";
import gallery2 from "../assets/gallery_2.jpg";
import gallery3 from "../assets/gallery_3.jpg";
import gallery4 from "../assets/gallery_4.jpg";
import gallery5 from "../assets/gallery_5.jpg";
import gallery6 from "../assets/gallery_6.jpg";


const GallerySection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // ✅ default 3 images ek saath
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // laptop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <section id="gallery" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Project <span className="text-green-600">Gallery</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Explore highlights of <strong>Nirala Gateway</strong> through our visual gallery.
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-2xl shadow-lg overflow-hidden">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="px-2">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GallerySection;
