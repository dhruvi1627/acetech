import React from "react";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Blogs from "../components/Blogs";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Expertise from "../components/Expertise";

export default function Landing() {
  return (
    <>
      <Hero />
      <Work />
      <Benefits />
      <Expertise />
      <Testimonials />
      <AboutUs />
      <Blogs />
    </>
  );
}
