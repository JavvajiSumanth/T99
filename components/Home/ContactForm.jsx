"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Define a functional component named ContactFormShort that takes a prop called 'header'
const ContactForm = ({ header }) => {
  // Create references for input elements using useRef
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const descriptionRef = useRef(null);
  const resetRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data using emailjs library
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_NAME,
          process.env.REACT_APP_TEMPLATE_NAME,
          formRef.current,
          process.env.REACT_APP_PRIVATE_KEY
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((err) => {
          console.log(err);
        });

      // Set submitted to true and trigger a reset of the form
      setSubmitted(true);
      resetRef.current.click();
    } catch (error) {
      console.log(error);
    }
  };

  // Create a reference for the form element
  const formRef = useRef();

  return (
    <div className="bg-[#750b0b] font-DinCondensed p-4" id="contact">
      {submitted && (
        <h1 className=" text-center font-DinCondensed text-xl">
          Submitted Successfully !!
        </h1>
      )}

      <div className="grid grid-cols-1  md:grid-cols-4 lg:mx-16 ">
        <div className="w-full  col-span-2 p-4 grid grid-cols-1 lg:grid-cols-4 lg:gap-x-10 ">
          <iframe
            // Google Maps iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.7694217713995!2d-97.1563432303865!3d32.763673098354346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7c150bddb88d%3A0xfde02fba666ba711!2sTexas%209%20Golf!5e0!3m2!1sen!2sin!4v1690220601837!5m2!1sen!2sin&t=h"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            style={{
              maxHeight: 400,
              width: "100%",
              minHeight: 300,
              border: 0,
            }}
            className="col-span-3"
          ></iframe>

          <div className="text-white space-y-2 col-span-1 ml-10  justify-self-center mt-2 lg:mt-0 lg:ml-4 font-primary ">
            <h1 className="text-3xl uppercases font-DinCondensed w-48">
              FIND TEXAS 9
            </h1>
            <p className="text-lg">
              <a href="tel:+1-817-303-4370"> 817-303-4370</a>
            </p>
            <p className="text-lg">
              <a href="mailto:contact@texas9.com"> contact@texas9.com</a>
            </p>
            <p className="text-lg pb-5">
              {" "}
              <a
                href="https://goo.gl/maps/iPceoCQZ3R8JjvR58"
                target={"_blank"}
                rel="noreferrer"
              >
                <span>
                  8940 Creek Run Rd <br />
                  Fort Worth, TX 76120
                </span>
              </a>
            </p>
            <a
              style={{ backgroundColor: "#7DA33F", color: "#FFF" }}
              href="https://goo.gl/maps/iPceoCQZ3R8JjvR58"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="text-lg font-medium px-4 py-2 font-GBook"
                style={{ backgroundColor: "#7DA33F", color: "#FFF" }}
              >
                PLAN YOUR VISIT
              </span>
            </a>
          </div>
        </div>
        <div className="ml-0 lg:ml-auto p-4 col-span-2 lg:w-[90%]">
          <form
            // Handle form submission on form submit
            onSubmit={handleSubmit}
            ref={formRef}
            className="horizontal-line  ml-auto"
          >
            <h1 className="uppercase tracking-wide  text-center lg:text-left text-3xl text-white font-DinCondensed pb-4 font-bold">
              {header}
            </h1>
            <div className="grid grid-cols-2 gap-2 font-primary font-semibold">
              <input
                // Input for name
                className="bg-transparent outline outline-1 outline-white  h-14 w-full max-w-screen-md rounded-sm p-3  caret-black
                  bg-white placeholder:text-black"
                type="text"
                placeholder="NAME"
                required
                ref={nameRef}
                name="from_name"
              />
              <input
                // Input for email
                className="bg-transparent outline outline-1 outline-white  h-14 w-full max-w-screen-md rounded-sm p-3  caret-black
                  bg-white placeholder:text-black"
                type="email"
                placeholder="EMAIL"
                required
                name="from_email"
                ref={emailRef}
              />
              <input
                // Input for phone number
                className="bg-transparent outline outline-1 outline-white  h-14 w-full max-w-screen-md rounded-sm p-3  caret-black
                  bg-white placeholder:text-black"
                type="tel"
                placeholder="PHONE"
                required
                ref={phoneRef}
                name="from_phone"
              />
              <select
                // Dropdown for subject
                className="bg-transparent outline outline-1 outline-white  h-14 w-full max-w-screen-md rounded-sm p-3  caret-black
                  bg-white placeholder:text-black"
                required
                name="subject"
                placeholder="TOPIC"
                ref={subjectRef}
              >
                <option value="Topic" selected disabled hidden>
                  TOPIC
                </option>
                <option value="GOLF">GOLF</option>
                <option value="MEMBERSHIP">MEMBERSHIP</option>
                <option value="EVENTS RENTALS">EVENTS RENTALS</option>
                <option value="OTHER">OTHER</option>
              </select>
              <textarea
                // Textarea for message
                className="bg-transparent outline outline-1 outline-white mb-3 w-full max-w-screen-md rounded-sm p-3  caret-black col-span-2
                  bg-white placeholder:text-black"
                name="message"
                id="description"
                required
                cols="30"
                rows="6"
                ref={descriptionRef}
                placeholder="WHAT'S ON YOUR MIND?"
              ></textarea>
            </div>
            <div className="w-full flex">
              <button
                // Submit button
                type="submit"
                className="uppercase px-6 py-2 ml-auto  text-white text-lg font-GBook font-semibold bg-[#7DA33F]"
              >
                Submit
              </button>
            </div>

            <button type="reset" className="hidden" ref={resetRef}>
              Rest
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
