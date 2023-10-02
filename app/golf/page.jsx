// Import necessary dependencies and components
import React from "react";
import MapCourse from "../../public/golf/mapcourse.png";
import Golf1 from "../../public/golf/golf-1.png";
import Golf2 from "../../public/golf/golf-2.png";
import Golf3 from "../../public/golf/golf-3.png";
import GolfBallPattern from "../../public/golf/golfballpattern.png";
import Link from "next/link";
import MiniHeader from "@/layout/MainLayout/MiniHeader";
import ContactFormShort from "@/components/Home/ContactForm";

// Define the Golf component
const Golf = () => {
  return (
    <>
      {/* Render the MiniHeader component */}
      <MiniHeader heading={"Golf"} />
      <div className="grid grid-cols-1  md:grid-cols-12 pt-6 w-full max-w-[90vw] mx-auto px-4">
        <div className="col-span-12 mb-2 ">
          {/* Golf course description */}

          <div className="text-justify font-primary font-semibold">
            Nestled amidst rolling hills and picturesque landscapes, the quaint
            9-hole golf course offers a delightful escape for both novice and
            experienced golfers alike. Its compact layout weaves through lush
            green fairways, bordered by gently swaying trees and strategically
            placed bunkers that provide just the right amount of challenge. With
            each hole presenting a unique set of obstacles, golfers can enjoy a
            leisurely yet engaging round of golf, perfect for a quick game or a
            relaxing afternoon outing. The course&apos;s intimate setting
            fosters a sense of community, where players can socialize and share
            their passion for the game in a serene environment. Whether seeking
            a casual round or an opportunity to refine their skills, visitors to
            Texas 9 are sure to relish in its tranquil charm and natural beauty.
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-12 lg:gap-4">
          {/* Display an image of the golf course map */}

          <img
            src={MapCourse.src}
            alt="Golf Course"
            className="object-cover col-span-8"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="col-span-4 flex lg:hidden  flex-col items-center justify-around space-y-4 mt-4 lg:mt-0">
            <button className="uppercase outline outline-1 px-2 text-[#7da33f] text-xl tracking-wider outline-[#7da33f]">
              <Link
                href="/tee-times"
                className="block w-full h-full font-GBook"
              >
                Book Your Tee Time
              </Link>
            </button>

            <button className="uppercase outline outline-1 px-2 text-maroon text-xl tracking-wider outline-[#791214]">
              <Link
                href="/golf/memberships"
                className="block w-full h-full font-GBook"
              >
                PLAY MORE SAVE MORE WITH A MEMBERSHIP
              </Link>
            </button>

            <button className="uppercase outline outline-1 px-2 text-violet text-xl tracking-wider outline-[#172649]">
              <Link
                href="/golf/lessons"
                className="block w-full h-full font-GBook"
              >
                BOOK A PRIVATE LESSON
              </Link>
            </button>
          </div>
          <div className="hidden lg:flex col-span-4  flex-col items-center justify-around space-y-4 ">
            <button className="uppercase  outline outline-1 px-2 text-[#7da33f] text-2xl tracking-wider outline-[#7da33f]">
              <Link
                href="/tee-times"
                className="block w-full h-full font-GBook"
              >
                Book Your <br /> Tee Time
              </Link>
            </button>
            <button className="uppercase  outline outline-1 px-2 text-maroon text-2xl tracking-wider outline-[#791214]">
              <Link
                href="/golf/memberships"
                className="block w-full h-full font-GBook"
              >
                PLAY MORE <br />
                SAVE MORE <br /> WITH A <br /> MEMBERSHIP
              </Link>
            </button>
            <button className="uppercase  outline outline-1 px-2 text-violet text-2xl tracking-wider outline-[#172649]">
              <Link
                href="/golf/lessons"
                className="block w-full h-full font-GBook"
              >
                BOOK A <br /> PRIVATE LESSON
              </Link>
            </button>
          </div>
        </div>

        <div className="md:col-span-8">
          <div
            className="bg-pattern grid grid-col-1  md:grid-cols-10 relative bg-contain md:bg-cover opacity-80"
            style={{
              marginTop: "10px",
            }}
          >
            <img
              src={GolfBallPattern.src}
              alt="balls"
              className="absolute -z-10 -left-20"
            />
            <h1 className="absolute text-xl md:text-3xl font-bold top-4 left-10">
              KNOW THE ETIQUTTE
            </h1>
            <ul className="list-disc md:col-start-2 md:col-span-6 pt-10 mx-auto px-6 place-self-center font-primary font-semibold">
              <li>show up early to take advantage of your tee time </li>
              <li>obey the cart rules & stay on the path </li>
              <li>warm up with three balls</li>
              <li>don&apos;t talk & stand away </li>
              <li>only look tor a lost ball for three min </li>
              <li>be respectful of time and play at an appropriate pace </li>
              <li>be prepared to play when its yourtime to go </li>
              <li>stay off your phone as much as you can</li>
              <li>yell FORE when a ball is going toward another person </li>
              <li>fix your ball mark after you hit when on the green </li>
            </ul>

            <div className="md:col-span-3 py-4 flex flex-col lg:flex-row gap-4 mx-auto">
              <img
                src={Golf1.src}
                alt="Golf Course"
                className="object-cover mr-[30px] golf-image-1"
              />
              <img
                src={Golf2.src}
                alt="Golf Course"
                className="object-cover mr-[30px] golf-image-1"
              />

              <img
                src={Golf3.src}
                alt="Golf Course"
                className="object-cover golf-image-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Render the ContactForm and Footer components */}
      <ContactFormShort header={"HAVE QUESTIONS?"} />
    </>
  );
};

export default Golf;
