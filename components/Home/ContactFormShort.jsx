"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactFormShort = ({ header }) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const descriptionRef = useRef(null);
  const resetRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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

      setSubmitted(true);
      resetRef.current.click();
    } catch (error) {
      console.log(error);
    }
  };

  const formRef = useRef();

  return (
    <div className="bg-[#750b0b]  font-DinCondensed p-4">
      {submitted && (
        <h1 className=" text-center  font-DinCondensed text-xl">
          Submitted Successfully !!
        </h1>
      )}

      <div className=" lg:mx-16 ">
        <div className="mx-auto p-4 w-full lg:w-[70%]">
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="horizontal-line  ml-auto"
          >
            <h1 className="uppercase tracking-wide md:text-4xl text-center text-white text-5xl font-DinCondensed pb-6 font-bold">
              {header}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-primary font-semibold">
              <input
                className="col-span-1 bg-transparent outline outline-1 outline-white  h-14 w-full max-w-screen-md rounded-sm p-3  caret-black
                  bg-white placeholder:text-black"
                type="text"
                placeholder="NAME"
                required
                ref={nameRef}
                name="from_name"
              />
              <input
                className="col-span-1 bg-transparent outline outline-1 outline-white  h-14 w-full max-w-screen-md rounded-sm p-3  caret-black
                  bg-white placeholder:text-black"
                type="email"
                placeholder="EMAIL"
                required
                name="from_email"
                ref={emailRef}
              />
              <input
                className="col-span-1 bg-transparent outline outline-1 outline-white  h-14 w-full max-w-screen-md rounded-sm p-3  caret-black
                  bg-white placeholder:text-black"
                type="tel"
                placeholder="PHONE"
                required
                ref={phoneRef}
                name="from_phone"
              />
              <select
                className="col-span-1 bg-transparent outline outline-1 outline-white  h-14 w-full max-w-screen-md rounded-sm p-3  caret-black
                  bg-white placeholder:text-black"
                required
                name="subject"
                placeholder="TOPIC"
                ref={subjectRef}
              >
                <option value="Topic" defaultValue disabled hidden>
                  TOPIC
                </option>
                <option value="GOLF">GOLF</option>
                <option value="MEMBERSHIP">MEMBERSHIP</option>
                <option value="EVENTS RENTALS">EVENTS RENTALS</option>
                <option value="OTHER">OTHER</option>
              </select>
              <textarea
                className="col-span-1 bg-transparent outline outline-1 outline-white mb-2 w-full  rounded-sm p-3  caret-black md:col-span-2
                  bg-white placeholder:text-black"
                name="message"
                id="description"
                required
                cols="30"
                rows="6"
                ref={descriptionRef}
                placeholder="LEAVE US A MESSAGE?"
              ></textarea>
            </div>
            <div className="w-full flex">
              <button
                type="submit"
                className="uppercase px-6 py-2 ml-auto  text-white text-lg font-GBook font-semibold"
                style={{ backgroundColor: "#7DA33F", color: "#FFF" }}
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

export default ContactFormShort;
