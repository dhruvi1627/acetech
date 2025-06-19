import React from "react";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Blogs from "../components/Blogs";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Expertise from "../components/Expertise";
import WhoWeAre from "../components/WhoWeAre";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Benefits />
      <WhoWeAre/>
      <Expertise />
      <Testimonials />
      <AboutUs />
      <Blogs />
    </>
  );
}
