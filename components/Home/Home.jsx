"use client";
import React from "react";
// import Header from "@/layout/MainLayout/Header";
import HomeCards from "@/components/Reusable/HomeCards";
import HomeDiv2 from "@/components/Reusable/HomeDiv2";
import Header from "@/layout/MainLayout/Header";
import ContactForm from "./ContactForm";

// Define the Home component as a functional component

const Home = () => {
  return (
    <div>
      <Header />

      {/* Render the HomeCards component */}
      <HomeCards />

      {/* Render the HomeDiv2 component */}
      <HomeDiv2 />

      {/* Render the ContactForm component with a specified header prop */}
      <ContactForm header={"HAVE QUESTIONS?"} />
    </div>
  );
};

// Export the Home component as the default export of this module
export default Home;
