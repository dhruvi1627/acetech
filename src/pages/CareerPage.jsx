import React from "react";
import CareerHero from "../components/career/CareerHero";
import CareerContent from "../components/career/CareerContent";
import AtiStartupCulture from "../assets/images/career/ATI-Startup-Culture.png"
import { Component } from "lucide-react";
import WhatWeAreLooking from "../components/career/WhatWeAreLooking";

export default function AboutUsPage() {
  return (
    <>
      <CareerHero />
      <CareerContent/>
      <WhatWeAreLooking/>
      <div className="flex justify-center items-center">
        <img
            src={AtiStartupCulture}
            alt="ATI-Startup-Culture"
            className="max-w-7xl h-auto"
        />
      </div>
    </>
  );
}
