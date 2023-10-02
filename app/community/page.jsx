// Import necessary components and libraries
import React from "react";
import CommunityHeader from "../../public/golf/community-header.png";
import Campus from "../../public/golf/campus.png";
import KJCF from "../../public/golf/KJCF.png";
import YOC from "../../public/golf/YOC.png";
import FirstTee from "../../public/golf/first-tee.png";
import FIRSTTEELOGO from "../../public/golf/FIRSTTEE-logo.png";
import KJCFLOGO from "../../public/golf/KJCF-logo.png";
import YOCLOGO from "../../public/golf/YOC-logo.png";
import MiniHeader from "@/layout/MainLayout/MiniHeader";
import Link from "next/link";
import ContactForm from "@/components/Home/ContactForm";

// Define the Community component
const Community = () => {
  return (
    <>
      {/* Render the MiniHeader component */}
      <MiniHeader heading={"Community"} image={CommunityHeader} />
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 gap-x-12  pt-6 w-full mx-auto font-primary font-semibold">
        <div className="md:col-span-12">
          <p className=" md:block text-justify mb-6 mx-auto  max-w-[90vw] text-lg font-semibold ">
            At our golf course, we recognize that the heart of our establishment
            is the vibrant community that forms around our greens. We understand
            that golf is more than just a game - it&apos;s a catalyst for
            connections. Our course serves as a gathering place where
            individuals come together to share their love for the sport. forge
            lasting friendships. and create cherished memories. Whether
            you&apos;re E seasoned golfer or new to the game, our inclusive
            atmosphere welcomes all. From casual rounds to engaging tournaments
            and social events. our communitv brinas enthusiasts and pavers of a
            skieves closer fostering an environment of camaraderie that sets us
            apart. Join us to experience the true essence of aot and the power
            of communitv on and oft the tairwavs
          </p>

          <div className="md:col-span-12 text-center my-4 p-1">
            <h2 className="text-brown text-3xl lg:text-5xl font-DinCondensed font-semibold mb-2 uppercase">
              Who We Work With
            </h2>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-4 border-4 gap-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
            <div className="h-full w-full col-span-1 flex justify-end ">
              <div
                className="w-full carousel-image-item  bg-cover bg-center h-60 lg:h-auto border-b-4 lg:border-r-4 lg:border-b-0 "
                style={{
                  backgroundImage: `url(${KJCF.src})`,
                  borderColor: "#8B4513",
                }}
              ></div>
            </div>

            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 p-4 gap-6">
              <div className="flex flex-col  items-center">
                <img
                  src={KJCFLOGO.src}
                  alt="Golf Course"
                  className="object-fill "
                  style={{ width: "100%", height: "auto", maxHeight: "450px" }}
                />
                <button
                  className=" mt-4 mx-autoblock lg:hidden text-brown py-2 px-8 rounded border-brown border text-xl tracking-wide w-fit  col-span-3 font-GBook font-semibold"
                  style={{ border: "2px solid #8B4513" }}
                >
                  CHECK THEM OUT
                </button>
              </div>
              <p className="lg:col-span-2 tracking-wide text-xl font-primary  font-semibold my-3 text-justify">
                kJ Choi foundation was established to invest in the dreams of
                talented children with a vision to build a brighter future for
                everyone. in return, as adults they will give back to the
                community, the support they received
              </p>
              <a
                href="http://kjchoi.igearmall.biz/eng/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block  text-brown py-2 px-8 rounded border-brown border text-xl tracking-wide w-fit  col-span-3 font-GBook font-semibold"
                style={{ border: "2px solid #8B4513" }}
              >
                CHECK THEM OUT
              </a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
            <div className="bg-white flex flex-col justify-between relative col-span-2 p-4">
              <img
                src={FIRSTTEELOGO.src}
                alt="Golf Course"
                className="object-fill lg:col-span-1"
                style={{ width: "50%", height: "auto", maxHeight: "350px" }}
              />
              <p className="tracking-wide text-xl my-3 text-justify font-primary font-semibold">
                First Tee is a youth development organization that enables kids
                to bulld the strength of character that empowers them through a
                lifetime of new challenges. By seamlessly integrating the game
                of golf with a life skills curriculum, we create active learning
                experiences that build inner strength, self-confidence, and
                resilience that kids can carry to everything they do. We&apos;re
                Building Game Changers through our junior golf programs.
              </p>
              <a
                href="https://firsttee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown py-2 px-8 rounded border-brown border text-xl tracking-wide w-fit  col-span-3 font-GBook font-semibold"
                style={{ border: "2px solid #8B4513" }}
              >
                CHECK THEM OUT
              </a>
            </div>

            <div className="h-full w-full col-span-1">
              <div
                className="w-full carousel-image-item h-[370px] bg-cover bg-center border-t-4 lg:border-l-4 lg:border-t-0"
                style={{
                  backgroundImage: `url(${FirstTee.src})`,
                  borderColor: "#8B4513",
                }}
              ></div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 border-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
            <div className="h-full w-full col-span-1">
              <div
                className="w-full carousel-image-item h-[360px]  bg-cover bg-center  border-b-4 lg:border-r-4 lg:border-b-0"
                style={{
                  backgroundImage: `url(${YOC.src})`,
                  borderColor: "#8B4513",
                }}
              ></div>
            </div>

            <div className="bg-white flex flex-col justify-between md:pr-24 relative col-span-2 p-4">
              <img
                src={YOCLOGO.src}
                alt="Golf Course"
                className="object-fill lg:col-span-1"
                style={{ width: "60%", height: "auto", maxHeight: "450px" }}
              />
              <p className="tracking-wide text-xl font-primary  font-semibold  my-2 text-justify">
                The core purpose of Youth on Course is to provide youth with
                access to life-changing oppurtunities through golf. YOC members
                gain oppurtunities through paid high school internships, college
                scholarships and more, all while forging lifelong connections.
              </p>
              <a
                href="https://youthoncourse.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown py-2 px-8 rounded border-brown border text-xl tracking-wide w-fit  col-span-3 font-GBook font-semibold"
                style={{ border: "2px solid #8B4513" }}
              >
                CHECK THEM OUT
              </a>
            </div>
          </div>
          <div className="relative  mx-auto  ">
            <h2 className="text-brown ustify-self-center  text-center text-3xl lg:text-5xl font-DinCondensed font-semibold mb-2 uppercase">
              Texas 9 Campus
            </h2>
            <div className="absolute grid grid-cols-2 w-full place-items-center mt-4">
              <p></p>
              <p className="text-center  font-bold max-w-sm hidden lg:block">
                Texas 9 has the honor of sharing it&apos;s clubhouse and campus
                with a few local companies that make us who we are?
              </p>
            </div>
            <img
              src={Campus.src}
              alt="Golf Course"
              className="object-fill w-full lg:max-w-[90vw] mx-auto"
            />
          </div>

          <div className="bg-[#172649] font-primary font-semibold p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-10  mx-auto  lg:max-w-[80vw] text-center md:text-start">
              <div className="p-4 lg:pl-10">
                <h2 className="font-semibold mb-2 text-white uppercase text-5xl font-DinCondensed">
                  team enoch
                </h2>
                <p className="text-white mb-4 text-lg">
                  Team Enoch&apos;s roots are right here, in DFW serving the
                  community with all their HVAC, Electrical, Plumbing and
                  Roofing needs
                </p>
                <button className="text-white py-2 px-4 rounded border-2 font-GBook font-semibold ">
                  <Link href="https://www.teamenoch.com" target={"_blank"}>
                    {" "}
                    LEARN MORE
                  </Link>
                </button>
              </div>
              <div className="p-4 lg:pl-10">
                <h2 className="text-5xl font-DinCondensed font-semibold mb-2 text-white">
                  TEXAS HEALTH SPORTS MEDICINE
                </h2>
                <p className="text-white mb-4 text-lg">
                  Whether you&apos;re a young athlete or weekend warrior, Texas
                  Health Sports Medicine delivers care for injuries nutrition.
                  pnvsical therapv and more
                </p>
                <button className=" text-white py-2 px-4 rounded border-2 font-GBook font-semibold">
                  <Link href="https://www.texashealth.org" target={"_blank"}>
                    {" "}
                    LEARN MORE
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm header={"HAVE QUESTIONS?"} />
    </>
  );
};

export default Community;
