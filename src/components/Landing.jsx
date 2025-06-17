import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "./Footer";
import Blogs from "./Blogs";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Benefits from "./Benefits";

export default function Landing() {
  return (
    <div className="bg-black min-h-screen px-12">
      <Header />
      <Hero />
      <Work />
      <Benefits />
      <Testimonials/>
      <AboutUs />
      <Blogs />
      <Footer />
    </div>
  );
}
