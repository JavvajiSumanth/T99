"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
import Smallgallery1 from "../../public/golf/smallgallery1.png";
import Smallgallery2 from "../../public/golf/smallgallery2.png";
import Smallgallery3 from "../../public/golf/smallgallery3.png";
import Smallgallery4 from "../../public/golf/smallgallery4.png";
import Smallgallery5 from "../../public/golf/smallgallery5.png";
import Slider from "react-slick";
const HomeDiv2 = () => {
  const reviews = [
    {
      id: 1,
      text: `Really fun Par 3 with nice greens. I have a lengthy membership for unlimited driving range and it’s been great. <b style="font-size:23.5px; font-family:'Din Condensed'">NEED MORE PLACES LIKE THIS</b>.`,
      author: "ZACH ALAVI",
    },
    {
      id: 2,
      text: `Texas 9 is a premiere practice facility and executive course. They use premium range balls, and the <b style="font-size:23.5px; font-family:'Din Condensed'">HITTING SURFACE IS SECOND TO NONE</b>. This is a great place to golf after work and on weekends.`,
      author: "DAN HUDDLESTON",
    },
    {
      id: 3,
      text: `<b style="font-size:23.5px; font-family:'Din Condensed'">NINE HOLE LITTLE PARADISE</b>.\nExcellent course to work on your short game. Staff was friendlier than any big course I have gone to!`,
      author: "HECTOR GARZA",
    },
    {
      id: 4,
      text: `Hospitality  is everything and we immediately felt welcomed! The course was awesome and they even have brand <b style="font-size:23.5px; font-family:'Din Condensed'">NEW EPIC GOLF CARTS</b> that are a must.`,
      author: "ARMANDO AGUILAR",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);
  const settings1 = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    initialSlide: 0,
    cssEase: "linear",
    arrows: false,
  };
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
      <div className=" overflow-hidden py-4  font-primary font-semibold first-letter: ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-[#7DA33F] px-8 py-4 flex flex-col items-center text-white col-span-1 lg:col-span-1">
            <h1 className="uppercase tracking-wide text-4xl lg:text-6xl font-DinCondensed font-bold text-center mt-6">
              GET YOUR <br className="hidden lg:block" />
              TEE TIME!
            </h1>
            <p className="tracking-wide text-lg lg:text-xl font-primary font-semibold text-center  my-2 mx-8 lg:mx-14">
              Minimize the wait and schedule your next visit on our nine hole
              course.
            </p>
            <Link
              href="/tee-times"
              className=" p-2 px-8 text-2xl bg-[#7DA33F]  hover:text-gray-800 border-2 border-white font-GBook"
            >
              BOOK NOW
            </Link>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-2 gap-4 p-4 border-red-800 border-r-0 -pr">
            <div className="flex lg:hidden bg-white  flex-col justify-between md:pr-20 relative col-span-2">
              <p className=" tracking-wide text-xl font-primary  font-semibold text-left lg:text-justify">
                Hailed as one of the best executive golf courses in DFW, our
                course was designed by Steven D. Plumber, ASGCA, and opened in
                1999. The course was created to be a public course, filling a
                niche in DFW so the greater community can have better access to
                the benefits of golf. Formerly known as Texas Golf Center, the
                course came under new management in 2023 with an explicit
                interest in adding new amenities and reinforcing the best
                aspects of the course.
              </p>
              <p className="tracking-wide text-4xl lg:text-5xl -bottom-2  relative  lg:absolute font-DinCondensed text-left font-bold   text-red-800">
                NO CLUB FEES! OPEN TO THE PUBLIC!
              </p>
            </div>
            <div className="h-full w-full col-span-1 ">
              <Slider {...settings} className="carousel">
                <img
                  className="w-full carousel-image-item h-80  object-contain"
                  src={Smallgallery1.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-80  object-contain"
                  src={Smallgallery2.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-80  object-contain"
                  src={Smallgallery3.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-80  object-contain"
                  src={Smallgallery4.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-80  object-contain"
                  src={Smallgallery5.src}
                  alt="imagew"
                />
              </Slider>
            </div>

            <div className="hidden lg:flex bg-white  flex-col justify-between md:pr-20 relative col-span-2">
              <p className=" tracking-wide text-xl font-primary  font-semibold text-left lg:text-justify">
                Hailed as one of the best executive golf courses in DFW, our
                course was designed by Steven D. Plumber, ASGCA, and opened in
                1999. The course was created to be a public course, filling a
                niche in DFW so the greater community can have better access to
                the benefits of golf. Formerly known as Texas Golf Center, the
                course came under new management in 2023 with an explicit
                interest in adding new amenities and reinforcing the best
                aspects of the course.
              </p>
              <p className="tracking-wide text-4xl lg:text-5xl -bottom-2  relative  lg:absolute font-DinCondensed text-left font-bold   text-red-800">
                NO CLUB FEES! OPEN TO THE PUBLIC!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-page  py-4">
        <section
          className="hero-section lg:pl-16"
          style={{
            backgroundImage: `url(${"golf/review.png"})`,
          }}
        >
          <div className="flex w-[100vw] lg:w-[70vw] mr-auto">
            <div className=" w-full">
              <Slider {...settings1}>
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="review-slide text-center lg:text-justify font-primary font-semibold"
                  >
                    <p
                      className="text-lg lg:text-xl"
                      dangerouslySetInnerHTML={{ __html: review.text }}
                    ></p>
                    <p className="text-right text-xl lg:text-3xl font-DinCondensed font-bold ">
                      - {review.author}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          {/* <div className="hidden hero-content md:flex w-[70vw] mr-auto">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="review-slide text-center lg:text-justify font-primary font-semibold"
              >
                <p dangerouslySetInnerHTML={{ __html: review.text }}></p>
                <p className="text-right font-DinCondensed font-bold">
                  - {review.author}
                </p>
              </div>
            ))}
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default HomeDiv2;
