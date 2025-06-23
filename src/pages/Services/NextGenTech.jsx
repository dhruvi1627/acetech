import React from "react";
import NextGenTechHero from "../../components/Services/next-gen-tech-integration/NextGenTechHero";
import NextGenAbout from "../../components/Services/next-gen-tech-integration/NextGenAbout";
import WhatIsNextGen from "../../components/Services/next-gen-tech-integration/WhatIsNextGen";
import BenifitsOfNextGen from "../../components/Services/next-gen-tech-integration/BenifitsOfNExtGen";
import WhyChooseNextGen from "../../components/Services/next-gen-tech-integration/WhyChooseNextGen";
import HowNextGenWorks from "../../components/Services/next-gen-tech-integration/HowNextGenWorks";

export default function NextGenTech() {
  return (
    <>
      <NextGenTechHero />
      <NextGenAbout />
      <WhatIsNextGen />
      <HowNextGenWorks />
      <BenifitsOfNextGen />
      <WhyChooseNextGen />
    </>
  );
}
