import React from "react";
import Slider from "react-slick";

// Create an array containing the imported header images
const images = [
  `/golf/header1.png`,
  `/golf/header2.png`,
  `/golf/header3.png`,
  `/golf/header4.png`,
  `/golf/header5.png`,
];

const Header = () => {
  // Configuration settings for the carousel
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };

  return (
    <>
      {/* Container for the carousel */}
      <div className="pt-20 font-primary overflow-hidden">
        {/* Initialize the carousel with the provided settings */}
        <Slider {...settings} className="mt-10 lg:mt-0 h-full lg:h-[55vh]">
          {/* Map through the images array and render each image */}
          {images.map((image, idx) => (
            <div key={idx} className="w-full">
              {/* Render each image with appropriate styling */}
              <img
                src={image}
                className="w-full h-full lg:h-[55vh] object-center object-contain lg:object-cover"
                alt="Header Image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Header; // Export the Header component for use in other parts of the application
