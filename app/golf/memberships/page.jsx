// Import necessary dependencies and components from React and other files
import React from "react";
import MembershipHeader from "../../../public/golf/membership-header.png";
import MembershipFitness from "../../../public/golf/membership-fitness.png";
import MembershipRange from "../../../public/golf/membership-range.png";
import MiniHeader from "@/layout/MainLayout/MiniHeader";
// ... (other import statements)

// Define a functional component named Membership
const Membership = () => {
  // Define a state variable 'isMonthly' using the 'useState' hook

  // Render the component's JSX structure
  return (
    <div>
      <MiniHeader heading={"Memberships"} image={MembershipHeader} />
      <div className="text-center my-4 p-1">
        <h2 className="text-violet text-3xl lg:text-5xl font-DinCondensed  mb-2 uppercase">
          YEARLY MEMBERSHIPS
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-4 gap-4 mb-8 border-violet   lg:max-w-[90vw] mx-4 lg:mx-auto ">
        <div className="col-span-2 lg:col-span-1 p-4">
          <div className="flex flex-col items-center"></div>
          <p className="tracking-wide text-xl font-primary  font-semibold my-3 text-start">
            <h1 className="text-violet font-bold text-4xl text-center my-4 font-DinCondensed">
              TEXAS 9 MEMBER
            </h1>
            <div className="px-2 text">
              <p className="text-center  my-4 min-h-[100px]">
                Texas 9 Members receive priority access to the course and
                unlimited access the driving range, full access to the gym & 15%
                off yoga.
              </p>

              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                  INDIVIDUAL - $1,069
                  <br />
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl  font-semibold">
                  ADDITONAL FAMILY - $540/PERSON <br />{" "}
                  <span className="text-lg font-normal ml-6 lg:ml-10">
                    * up to 4 additional familv members
                  </span>
                </li>
              </ul>
            </div>
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1 p-4">
          <p className="tracking-wide text-xl font-primary  font-semibold my-3 text-start">
            <h1 className="text-violet font-bold text-4xl text-center my-4 font-DinCondensed">
              RANGE MEMEBER
            </h1>
            <div className="px-2 text">
              <p className="text-center  my-4 min-h-[100px]">
                Texas 9 Range Members receive unlimited access to the driving
                range anytime day or night to perfect their swing.
              </p>

              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                  INDIVIDUAL - $756
                  <br />
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl  font-semibold">
                  ADDITIONAL FAMILY - $324/PERSON <br />{" "}
                  <span className="text-lg font-normal ml-6 lg:ml-10">
                    * up to 4 additional family members
                  </span>
                  <br />
                </li>
              </ul>
            </div>
          </p>
        </div>
        <p className="text-violet tracking-wide col-span-2 text-4xl font-DinCondensed font-semibold my-3 text-center">
          VISIT THE CLUB HOUSE TO BECOME A MEMBER!
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:max-w-[90vw]">
          <img
            src={MembershipFitness.src}
            alt="Event 1"
            className="object-cover h-full"
            style={{ width: "100%", maxHeight: "450px" }}
          />
          <img
            src={MembershipRange.src}
            alt="Event 2"
            className="object-cover h-full"
            style={{ width: "100%", maxHeight: "450px" }}
          />
        </div>
      </div>

      <div className="text-center my-4 p-1">
        <h2 className="text-maroon text-3xl lg:text-5xl  font-DinCondensed mb-2 uppercase">
          MONTHLY MEMBERSHIPS
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border-4 gap-4 mb-8 border-red-800   lg:max-w-[90vw] mx-4 lg:mx-auto ">
        <div className="col-span-2 lg:col-span-1 p-4">
          <div className="flex flex-col items-center"></div>
          <p className="tracking-wide text-xl font-primary  font-semibold my-3 text-justify">
            <h1 className="text-maroon font-bold text-4xl font-DinCondensed text-center my-4">
              TEXAS 9 MEMBER
            </h1>
            <div className="px-2 text">
              <p className="text-center  my-4 min-h-[100px]">
                Texas 9 Members receive priority access to the course and
                unlimited access the driving range, full access to the gym & 15%
                off yoga.
              </p>

              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                  INDIVIDUAL - $99
                  <br />
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl  font-semibold">
                  ADDITONAL FAMILY - $50/PERSON <br />{" "}
                  <span className="text-lg font-normal ml-6 lg:ml-10">
                    * up to 4 additional family members
                  </span>
                  <br />
                </li>
              </ul>
            </div>
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1 p-4">
          <p className="tracking-wide text-xl font-primary  font-semibold my-3 text-justify">
            <h1 className="text-maroon font-bold text-4xl font-DinCondensed  text-center my-4">
              RANGE MEMEBER
            </h1>
            <div className="px-2 text">
              <p className="text-center  my-4 min-h-[90px]">
                Texas 9 Range Members receive unlimited access to the driving
                range anytime day or night to perfect their swing.
              </p>

              <ul className="list-disc list-inside pl-4 lg:pl-10">
                <li className="text-xl uppercase font-semibold">
                  INDIVIDUAL - $70
                  <br />
                </li>
              </ul>
              <ul className="list-disc list-inside mt-4 pl-4 lg:pl-10">
                <li className="text-xl  font-semibold">
                  ADDITIONAL FAMILY - $35/PERSON <br />{" "}
                  <span className="text-lg font-normal ml-6 lg:ml-10">
                    * up to 4 additional family members
                  </span>
                  <br />
                </li>
              </ul>
            </div>
          </p>
        </div>
        <p className="text-maroon tracking-wide col-span-2 text-4xl font-DinCondensed   font-semibold my-3 text-center">
          SAVE MORE WITH A YEARLY MEMBERSHIP!
        </p>
      </div>
    </div>
  );
};

// Export the Membership component as the default export
export default Membership;
