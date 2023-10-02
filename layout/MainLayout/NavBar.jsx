"use client";
import React, { useEffect, useRef, useState } from "react";
import IndexPage from "./IndexPage";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
// import { useRouter } from "next/router";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hiddenRef = useRef(null);
  const location = { pathname: "" };
  // Intersection Observer to change navbar style on scroll
  useEffect(() => {
    const navRef = hiddenRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (!navRef) return;

      if (!entries[0].isIntersecting) {
        navRef.style.backgroundColor = "white";
        navRef.style.color = "black";
      } else {
        navRef.style.backgroundColor = "transparent";
        navRef.style.color = "white";
      }
    });

    observer.observe(hiddenRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className="fixed z-50 w-full h-[80px] bg-[#162649] text-white font-DinCondensed text-xl">
        <div className="px-6 py-2 bg-[#7da33f] flex items-center justify-center absolute right-8 lg:right-24 top-20  md:top-16  ">
          <Link href={"/tee-times"} className="hover:text-white font-GBook">
            BOOK A TEE TIME
          </Link>
        </div>
        <div className="hidden lg:flex items-center font-semibold  links justify-center pr-6 h-[80px] relative ">
          <div className="mr-auto p-4 lg:ml-16">
            <Link href={"/"}>
              <img
                className="absolute top-2 h-[50px] z-30"
                src={"/golf/white-logo.png"}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="dropdown p-4 items-center justify-center">
            <Link href="/golf">
              <button
                className={`dropbtn ${
                  location.pathname.startsWith("/golf") ? "active" : ""
                }`}
              >
                GOLF
              </button>
            </Link>
            <div className="dropdown-content">
              <Link href="/golf/rates">RATES</Link>
              <Link href="/golf/memberships">MEMBERSHIPS</Link>
              <Link href="/golf/lessons">LESSONS</Link>
              <Link href="/tee-times">TEE TIMES</Link>
            </div>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888",
              borderRadius: "50%",
              margin: "0 10px",
            }}
          />

          <div className="p-4">
            <Link
              href={"/fitness"}
              className={location.pathname === "/fitness" ? "active" : ""}
            >
              FITNESS
            </Link>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888",
              borderRadius: "50%",
              margin: "0 10px",
            }}
          />

          <div className="p-4">
            <Link
              href={"/community"}
              className={location.pathname === "/community" ? "active" : ""}
            >
              COMMUNITY
            </Link>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888",
              borderRadius: "50%",
              margin: "0 10px",
            }}
          />

          <div className="p-4">
            <Link
              href={"/event"}
              className={location.pathname === "/event" ? "active" : ""}
            >
              EVENTS
            </Link>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888",
              borderRadius: "50%",
              margin: "0 10px",
            }}
          />

          <div className="p-4 flex items-center justify-center">
            <Link
              href={"/about"}
              className={location.pathname === "/about" ? "active" : ""}
            >
              ABOUT US
            </Link>
          </div>

          <div
            className="dot-separator"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#888",
              borderRadius: "50%",
              margin: "0 10px",
            }}
          />

          <a
            href="https://goo.gl/maps/iPceoCQZ3R8JjvR58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 flex items-center justify-center lg:mr-14">
              GET DIRECTIONS
            </div>
          </a>
        </div>
        <div className="h-full flex lg:hidden items-center  pr-10">
          <div className="mr-auto p-3">
            <Link href={"/"}>
              <img
                className="absolute h-16 top-2"
                src={"/golf/white-logo.png"}
                alt="Logo"
              />
            </Link>
          </div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <FiMenu color="#fff" />{" "}
          </button>
        </div>

        <div
          className={`relative z-10 ${isOpen ? "block" : "hidden"} `}
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto relative w-screen max-w-xs sm:max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-black text-white pb-6 shadow-xl">
                    <div className="w-fit flex mt-5 mx-auto rounded-full p-2  border-2 justify-center items-center">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white "
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="4"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <Link
                      href="/"
                      className="mt-5 mx-auto text-3xl font-bold underline underline-offset-4"
                    >
                      <img
                        src={"/golf/white-logo.png"}
                        alt="Logo"
                        style={{
                          width: "70%",
                          margin: "0 auto",
                        }}
                      />
                    </Link>
                    <div className="relative mt-2 flex-1 px-4 sm:px-6">
                      <IndexPage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Element used for Intersection Observer */}
      <div className="" ref={hiddenRef}></div>
    </>
  );
};

export default NavBar;
