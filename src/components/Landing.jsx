import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "./Footer";
import Blogs from "./Blogs";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Benefits from "./Benefits";
import Expertise from "./Expertise";

export default function Landing() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Header />
      <Hero />
      <Work />
      <Benefits />
      <Expertise />
      <Testimonials />
      <AboutUs />
      <Blogs />
      <Footer />
    </div>
  );
}
