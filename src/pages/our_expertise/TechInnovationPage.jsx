import React from "react";
import TechInHero from "../../components/our_expertise/tech-innovation/TechInHero";
import TechInAbout from "../../components/our_expertise/tech-innovation/TechInAbout";
import TechInServices from "../../components/our_expertise/tech-innovation/TechInServices";
import TechInDriving from "../../components/our_expertise/tech-innovation/TechInDriving";
import TechInEnhancing from "../../components/our_expertise/tech-innovation/TechInEnhancing";
import TechInOptimizing from "../../components/our_expertise/tech-innovation/TechInOptimizing";
import TechInWhyChoose from "../../components/our_expertise/tech-innovation/TechInWhyChoose";

export default function TechInnovationPage() {
  return (
    <>
      <TechInHero />
      <TechInAbout />
      <TechInServices />
      <TechInDriving />
      <TechInEnhancing />
      <TechInOptimizing />
      <TechInWhyChoose />
    </>
  );
}
