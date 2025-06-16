import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Blogs from "./Blogs";

export default function Landing() {
  return (
    <div className="bg-black min-h-screen px-12">
      <Header />
      <Hero />
      <Blogs />
      <Footer />
    </div>
  );
}
