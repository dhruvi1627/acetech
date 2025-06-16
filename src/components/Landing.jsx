import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Landing() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
