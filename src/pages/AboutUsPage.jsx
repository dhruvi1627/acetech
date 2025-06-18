import React from "react";
import AboutUsHero from "../components/about_us/AboutUsHero";
import Values from "../components/about_us/Values";
import AboutUs from "../components/AboutUs";
import Ati from "../components/about_us/Ati";
import AboutUsExpertise from "../components/about_us/AboutUsExpertise";
import Journey from "../components/about_us/Journey";

export default function AboutUsPage() {
  return (
    <>
      <AboutUsHero />
      <Values/>
      <AboutUs/>
      <Ati/>
      <AboutUsExpertise/>
      <Journey/>
    </>
  );
}
