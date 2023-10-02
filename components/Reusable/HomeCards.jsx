"use client";
import React, { useState } from "react";
// import Hole from "../../public/golf/9-hole.jpg";
// import Ameneties from "../../public/golf/ameneties.jpg";
// import DrivingRange from "../../public/golf/drivingrange.jpg";
// import SandTrap from "../../public/golf/sandtrap.jpg";
import flip1 from "../../public/golf/flip1.png";
import flip2 from "../../public/golf/flip2.png";
import flip3 from "../../public/golf/flip3.png";
import flip4 from "../../public/golf/flip4.png";

const HomeCards = () => {
  const [isFlipped, setIsFlipped] = useState([
    false, // Flip state for the first card
    false, // Flip state for the second card
    false, // Flip state for the third card
    false, // Flip state for the fourth card
  ]);

  const texts = [
    {
      front: "9-HOLE EXECUTIVE GOLF COURSE",
      back: "DFW’s best public course, perfect for golf enthusiasts of all levels.",
    },
    {
      front: "ILLUMINATED DRIVING RANGE",
      back: "Spanning over 10 acres is a golfer's paradise, allowing you to perfect your swing even after sunset.",
    },
    {
      front: "PRACTICE SAND & GREENS",
      back: "Practice your putting skills on our professionally designed putting green, or take on the challenge of our chipping practice green and sand bunker area.",
    },
    {
      front: "AMENITIES & MORE",
      back: "Enjoy the clubhouse with a fully equipped fitness center, event space, and membership packages to get the most out of Texas 9.",
    },
  ];

  const handleFlip = (index, state) => {
    const newFlipState = [...isFlipped];
    newFlipState[0] = false;
    newFlipState[1] = false;
    newFlipState[2] = false;
    newFlipState[3] = false;
    newFlipState[index] = state;
    setIsFlipped(newFlipState);
  };
  const handleFlipMobile = (index, state) => {
    const newFlipState = [...isFlipped];
    newFlipState[index] = !newFlipState[index];
    setIsFlipped(newFlipState);
  };

  return (
    <>
      <div className="hidden md:grid  grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 max-w-[90vw] mx-auto  font-DinCondensed  mt-10 px-4">
        {isFlipped.map((flipped, index) => (
          <div
            key={index}
            className={`h-52 ${flipped ? "flipped" : ""} card`}
            style={{
              backgroundImage:
                !flipped &&
                `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)),url(${
                  index === 0
                    ? "/golf/flip1.png"
                    : index === 1
                    ? "/golf/flip2.png"
                    : index === 2
                    ? "/golf/flip3.png"
                    : "/golf/flip4.png"
                })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => handleFlip(index, true)}
            onMouseLeave={() => handleFlip(index, false)}
          >
            <div className={`front ${flipped ? "hidden" : ""}`}>
              <h1 className="text-center text-white pt-4 text-3xl ">
                {texts[index].front}
              </h1>
            </div>
            <div
              className={`back ${flipped ? "" : "hidden"}`}
              style={{ transform: "rotateX(180deg)" }}
            >
              <p className="text-center text-white pt-4 text-lg font-primary font-semibold ">
                {texts[index].back}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:hidden  grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 max-w-[90vw] mx-auto  font-DinCondensed  mt-10 px-4">
        {isFlipped.map((flipped, index) => (
          <div
            key={index}
            className={`h-52 ${flipped ? "flipped" : ""} card`}
            style={{
              backgroundImage:
                !flipped &&
                `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)),url(${
                  index === 0
                    ? flip1.src
                    : index === 1
                    ? flip2.src
                    : index === 2
                    ? flip3.src
                    : flip4.src
                })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleFlipMobile(index)}
          >
            <div className={`front ${flipped ? "hidden" : ""}`}>
              <h1 className="text-center text-white pt-4 text-3xl ">
                {texts[index].front}
              </h1>
            </div>
            <div
              className={`back ${flipped ? "" : "hidden"}`}
              style={{ transform: "rotateX(180deg)" }}
            >
              <p className="text-center text-white pt-4 text-lg font-primary font-semibold ">
                {texts[index].back}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCards;
