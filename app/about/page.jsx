// Import necessary components and libraries
import React from "react";

// Import images
import ABOUTHEADER from "../../public/golf/about-header.png";
import Ingrid from "../../public/golf/about-ingrid.png";
import Josh from "../../public/golf/about-josh.png";
import Chris from "../../public/golf/about-chris.png";
import MiniHeader from "@/layout/MainLayout/MiniHeader";
import ContactForm from "@/components/Home/ContactFormShort";

// Define the AboutView component
const AboutView = () => {
  return (
    <>
      {/* Display a MiniHeader component with a heading */}
      <MiniHeader heading={"About Us"} image={ABOUTHEADER} />

      <div className="py-6 font-primary font-semibold">
        {/* Display a paragraph about the golf course */}
        <p className="text-justify mb-4 px-6 lg:max-w-[90vw] mx-auto">
          Hailed as one of the best executive golf courses in DFW, our course
          was designed by Steven D. Plumber, ASGCA, and opened in 1999. The
          course was created to be a public course, filling a niche in DFW so
          the greater community can have better access to the benefits of golf.
          Formerly known as Texas Golf Center, the course came under new
          management in 2023 with an explicit interest in adding new amenities
          and reinforcing the best aspects of the course. After 24 years of
          operating, the course remains a mainstay in the DFW area as a location
          for PGA training, annual tournaments, and golf enjoyed by all.
        </p>

        {/* Display a section for team members */}
        <div className="border-2  p-4 border-green-800 border-r-0 border-l-0">
          <div className="h-full w-full ">
            <div className="text-center mb-4 p-1">
              {/* Display the "Meet The Team" heading */}
              <h2 className="text-green font-semibold mb-2 uppercase tracking-tighter text-5xl font-DinCondensed">
                Meet The Team
              </h2>
            </div>
            <div className="flex justify-between flex-col md:flex-row w-full gap-y-4 px-6 max-w-[90vw] mx-auto">
              {/* Display information about team members */}
              <div className="flex flex-col items-center space-x-4">
                <img
                  src={Josh.src}
                  alt="Josh profile"
                  className="w-80 h-auto object-contain"
                />
                <p className="text-center text-green my-2 font-semibold text-4xl font-DinCondensed">
                  JOSH STUCKY
                </p>
                <p className="text-center text-gray-600 text-lg font-semibold">
                  GENERAL MANAGER
                </p>
              </div>
              <div className="flex flex-col items-center space-x-4 ">
                <img
                  src={Ingrid.src}
                  alt="Ingrid profile"
                  className="w-80 h-auto object-contain"
                />
                <p className="text-center text-green font-semibold my-2 text-4xl font-DinCondensed">
                  INGRID BORJAS
                </p>
                <p className="text-center text-gray-600 text-lg font-semibold">
                  OPERATIONS MANAGER
                </p>
              </div>
              <div className="flex flex-col items-center space-x-4  px-4">
                <img
                  src={Chris.src}
                  alt="Chris profile"
                  className="w-80 h-auto object-contain"
                />
                <p className="text-center text-green font-semibold my-2 text-4xl font-DinCondensed">
                  CHRIS HUTCHINSON
                </p>
                <p className="text-center text-gray-600 text-lg font-semibold">
                  COURSE SUPERINTENDENT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Display the Footer component */}
    </>
  );
};

// Export the AboutView component as the default export
export default AboutView;
