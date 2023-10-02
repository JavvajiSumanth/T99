// Import necessary components and icons
import { HiLocationMarker } from "react-icons/hi";
import { BiAlarm, BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import BottomFoot from "@/components/Reusable/BottomFoot";
import MiniHeader from "@/layout/MainLayout/MiniHeader";
import ContactForm from "@/components/Home/ContactForm";

// Define the Contact functional component
const Contact = () => {
  return (
    <div>
      {/* Display a mini header with the heading "Contact Us" */}
      <MiniHeader heading={"Contact Us"} image={"/golf/about-header.jpg"} />

      {/* Display a section for leaving a message */}
      <ContactForm header={"HAVE QUESTIONS?"} />

      {/* Create a container for contact information */}
      <div className="bg-white  px-4 ">
        <div className=" md:p-10 md:py-4 mx-auto ">
          {/* Display a heading */}
          <h1 className="font-primary font-semibold tracking-wide text-3xl text-center mt-8">
            You Can Find Us @
          </h1>

          {/* Create a grid layout for contact details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full max-w-screen-xl mx-auto p-5">
            {/* Display location information */}
            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <HiLocationMarker />
              </div>
              <div>
                <h2 className="font-primary font-semibold text-xl mb-1">
                  Fort Worth Location
                </h2>
                <p className="text-black">
                  {/* Display a link to a map */}
                  <a
                    href="https://www.bing.com/maps?osid=33722351-871f-4413-961a-de30d5342d6d&cp=32.763407~-97.155837&lvl=16&v=2&sV=2&form=S00027"
                    target={"_blank"}
                  >
                    <span>8940 Creek Run Rd Fort Worth, TX 76120</span>
                  </a>
                </p>
              </div>
            </div>

            {/* Display phone number */}
            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BiPhone />
              </div>
              <div>
                <h2 className="font-primary font-semibold text-xl mb-1">
                  <a href="tel:+1-817-303-4370">+1 (817) 303-4370</a>
                </h2>
              </div>
            </div>

            {/* Display email address */}
            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BsMailbox />
              </div>
              <div>
                <h2 className="font-primary font-semibold text-xl mb-1">
                  <a href="mailto:contact@texas9.com">contact@texas9.com</a>
                </h2>
              </div>
            </div>

            {/* Display operating hours */}
            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BiAlarm />
              </div>
              <div>
                <h2 className="font-primary font-semibold text-xl mb-1">
                  Monday-Sunday 7:00 am – 9:00 pm
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embed a Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0913741426257!2d-97.1552483!3d32.763309899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7c3f991b1301%3A0x8f43a2c9599156c3!2s8940%20Creek%20Run%20Rd%2C%20Fort%20Worth%2C%20TX%2076120!5e0!3m2!1sen!2sus!4v1687719563220!5m2!1sen!2sus"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
        style={{
          minHeight: 300,
          border: 0,
        }}
      ></iframe>

      {/* Display the website footer */}
      <BottomFoot />
    </div>
  );
};

export default Contact;

// Texas Golf Ce
