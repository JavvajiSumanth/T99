"use client";
import React from "react";
import MiniHeader from "@/layout/MainLayout/MiniHeader";
import Lessons1 from "../../../public/golf/lessons1.png";
import Lessons2 from "../../../public/golf/lessons2.png";
import Lessons3 from "../../../public/golf/lessons3.png";
import Instructor from "../../../public/golf/golf-instructor.jpg";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

const Lessons = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div>
      <MiniHeader heading={"Lessons"} />

      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 gap-x-10  pt-6  lg:pr-20 pb-6 font-primary font-semibold">
        {/* Left column */}
        <div className="md:col-span-4 md:order-last mb-2 pr-4  pl-4 ">
          <div className="block md:hidden pl-4 lg:pl-20">
            {/* Introduction text */}
            <p className="text-justify ">
              Tee up for success with golf lesson Whether you&apos;re new to the
              game or looking to refine your skills, our experienced instructors
              are here to elevate your swing. Join us for engaging lessons that
              cover everything from putting to driving, all set against the
              backdrop of our scenic course. With our limited-time offer, now is
              the perfect time to take your golf game to the next level.
              Don&apos;t miss out on this opportunity to improve your game and
              enjoy the greens like never before!
            </p>

            {/* Image carousel */}
            <div className="py-4 pr-4 lg:pr-0 ">
              <Slider {...settings} className="carousel">
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Lessons1.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Lessons2.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Lessons3.src}
                  alt="imagew"
                />
              </Slider>
            </div>
          </div>

          {/* Instructor information */}
          <div className="border-4  gap-4 p-5 border-[#7DA33F]">
            <h1 className="text-[#7DA33F] font-bold text-4xl font-DinCondensed  text-center">
              LEARN FROM A PRO
            </h1>
            <div className="px-2">
              <p className="text-left  my-4">
                Shannon Kneisler is a LPGA Instructor with over fifteen years of
                experience. Shannon has trained players around the world, and
                has been featured on the LPGA Tour, Golf Channel, and Fox
                Sports. Shannon&apos;sfocus is helping golfers find their swing,
                centering on fundamentals that work with player&apos;sbodies,
                not against their natural form. Shannon brought her talents to
                Texas 9 two years ago, providing instruction to members, guests,
                and top amateur players in the Texas and Oklahoma regions.
              </p>

              {/* Instructor image */}
              <img
                src={Instructor.src}
                alt="Instructor"
                className="object-contain my-4"
                style={{ width: "100%", height: "auto", maxHeight: "350px" }}
              />

              {/* Contact button */}
              <button className="uppercase outline outline-2 px-2 text-[#7DA33F] w-full text-xl my-6 mb-0 tracking-wider  outline-[#7DA33F] font-GBook ">
                <Link href="/#contact" className="block w-full h-full">
                  CONTACT US
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-8">
          <div className="hidden md:block pl-4 lg:pl-20">
            {/* Additional text */}
            <p className="text-justify ">
              Discover the ultimate full-service fitness center that&apos;sall
              about you! Get ready to achieve your fitness dreams with top-notch
              gym equipment, fun exercise classes, and personalized training
              plans. And guess what? We&apos;re more than just a gym! Treat
              yourself to relaxing spa services, learn about healthy eating with
              expert advice, and find your zen in our calming relaxation areas.
              Join a friendly community of fitness pros and friends who will
              cheer you on every step of the way. Your wellness adventure starts
              here - come on over and let&apos;smake healthy happen, together!
            </p>

            {/* Image carousel */}

            <div className="py-4 pr-4 lg:pr-0 ">
              <Slider {...settings} className="carousel">
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Lessons1.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Lessons2.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Lessons3.src}
                  alt="imagew"
                />
              </Slider>
            </div>
          </div>

          {/* Announcement */}
          <div
            className="bg-red-800 p-6 text-white relative justify-items-center"
            style={{ marginTop: "20px" }}
          >
            <h1 className="text-xl md:text-5xl  font-DinCondensed font-bold">
              KEEP AN EYE OUT FOR MORE LESSONS AND <br />
              COLLABORATIONS COMING TO TEXAS 9 SOON!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
