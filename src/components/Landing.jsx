import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "./Footer";

export default function Landing() {
  return (
    <div className="bg-black min-h-screen px-12">
      <Header />
      <Hero />
      <Work />
      <Footer />
    </div>
  );
}
