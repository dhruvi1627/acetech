import React from "react";
import ArMrHero from "../../components/our_expertise/ar-mr/ArMrHero";
import ArMrAbout from "../../components/our_expertise/ar-mr/ArMrAbout";
import ArMrServices from "../../components/our_expertise/ar-mr/ArMrServices";
import ArMrEnhance from "../../components/our_expertise/ar-mr/ArMrEnhance";
import ArMrStreamlining from "../../components/our_expertise/ar-mr/ArMrStreamlining";
import ArMrRevolutionizing from "../../components/our_expertise/ar-mr/ArmrRevolutionizing";
import ArMrWhyChoose from "../../components/our_expertise/ar-mr/ArMrWhyChoose";

export default function ArMrPage() {
  return (
    <>
      <ArMrHero />
      <ArMrAbout />
      <ArMrServices />
      <ArMrEnhance />
      <ArMrStreamlining />
      <ArMrRevolutionizing />
      <ArMrWhyChoose />
    </>
  );
}
