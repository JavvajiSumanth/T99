// Import necessary components and libraries
"use client";
import Fitness1 from "../../public/golf/fitness1.png";
import Fitness2 from "../../public/golf/fitness2.png";
import Fitness3 from "../../public/golf/fitness3.png";
import Yoga from "../../public/golf/yoga.png";
import Training from "../../public/golf/training.png";
import Link from "next/link";
import MiniHeader from "@/layout/MainLayout/MiniHeader";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

// Define the Fitness functional component
const Fitness = () => {
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
    <>
      {/* Render a MiniHeader component with heading */}
      <MiniHeader heading={"Fitness"} />

      {/* Main content container */}
      <div className="grid grid-cols-1  md:grid-cols-12 gap-4 gap-x-10  pt-6  lg:pr-20 pb-6 font-primary font-semibold">
        {/* Left column for mobile devices */}
        <div className="md:col-span-4 md:order-last mb-2 pr-4  pl-4 ">
          <div className="block md:hidden  lg:pl-20">
            {/* Paragraph describing the fitness center */}
            <p className="text-justify ">
              Discover the ultimate full-service fitness center that&pos;s all
              about you! Get ready to achieve your fitness dreams with top-notch
              gym equipment, fun exercise classes, and personalized training
              plans. And guess what? We&pos;re more than just a gym! Treat
              yourself to relaxing spa services, learn about healthy eating with
              expert advice, and find your zen in our calming relaxation areas.
              Join a friendly community of fitness pros and friends who will
              cheer you on every step of the way. Your wellness adventure starts
              here - come on over and let&pos;s make healthy happen, together!
            </p>

            {/* Image carousel */}

            <div className="py-4 pr-4 lg:pr-0 ">
              <Slider {...settings} className="carousel">
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Fitness1.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Fitness2.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Fitness3.src}
                  alt="imagew"
                />
              </Slider>
            </div>
          </div>

          {/* Personal Training section */}
          <div className="border-4  gap-4 p-5 border-[#7da33f]">
            <h1 className="text-[#7da33f] font-bold  text-center text-4xl font-DinCondensed">
              PERSONAL TRAINING
            </h1>
            <div className="px-2">
              {/* Description of the personal trainer */}
              <p className="text-left  my-4">
                Schedule an opportunity to talk to our physical trainer. Jake is
                a trainer, coach, group fitness instructor and massage therapist
                of 20+ years. A veteran of the US Navy, he began his fitness
                journey helping fellow crew members on a ballistic missile
                submarine while underway during patrols. After his time in the
                service, it was a seamless transition to becoming a fitness
                professional and health advocate. His perspective about health
                and our body is that it is a gift and should not be taken for
                granted. He believes balance, functionality, mobility, and
                strength are paramount to any fitness regimen. So whatever your
                health and fitness goals, let Jake help you to create and
                execute a plan to achieve them
              </p>

              {/* Image of training */}
              <img
                src={Training.src}
                alt="Golf Course"
                className="object-cover my-4 w-100 h-auto max-h-[350px]"
              />

              {/* Contact button */}
              <button className="uppercase outline outline-2 px-2 text-[#7da33f] w-full text-xl my-3 mb-0 tracking-wider  outline-[#7da33f] font-semibold font-GBook">
                <Link href="/#contact" className="block w-full h-full">
                  CONTACT US
                </Link>
              </button>
            </div>

            {/* Spacer */}
            <div className="px-2"></div>
          </div>
        </div>

        {/* Right column for larger screens */}
        <div className="md:col-span-8">
          <div className="hidden md:block pl-4 lg:pl-20">
            {/* Same content as the mobile version */}
            <p className="text-justify ">
              Discover the ultimate full-service fitness center that&pos;s all
              about you! Get ready to achieve your fitness dreams with top-notch
              gym equipment, fun exercise classes, and personalized training
              plans. And guess what? We&pos;re more than just a gym! Treat
              yourself to relaxing spa services, learn about healthy eating with
              expert advice, and find your zen in our calming relaxation areas.
              Join a friendly community of fitness pros and friends who will
              cheer you on every step of the way. Your wellness adventure starts
              here - come on over and let&pos;s make healthy happen, together!
            </p>

            {/* Image carousel */}

            <div className="py-4 pr-4 lg:pr-0 ">
              <Slider {...settings} className="carousel">
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Fitness1.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Fitness2.src}
                  alt="imagew"
                />
                <img
                  className="w-full carousel-image-item h-96  object-cover"
                  src={Fitness3.src}
                  alt="imagew"
                />
              </Slider>
            </div>
          </div>

          {/* Yoga section */}
          <div className="bg-red-800 p-6 text-white relative grid-cols-1 grid lg:grid-cols-2 justify-items-center mt-5">
            <img src={Yoga.src} alt="Etiquette" className="max-w-xs " />
            <div className=" pt-4 md:pl-4">
              <h1 className="font-bold mb-3 text-4xl font-DinCondensed">
                GET YOUR ZEN ON
              </h1>
              {/* Description of the yoga classes */}
              Here at Texas 9 our yoga philosophy centers around inclusivity and
              accessibility, believing that yoga is for everyone, regardless of
              age or skill level. Classes cater to a diverse range ot
              individuals, from seniors seeking gentle movement to advanced
              yogis looking to deepen their practice. Join us every Tuesday at
              6pm!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fitness;
