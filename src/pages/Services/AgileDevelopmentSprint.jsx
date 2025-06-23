import React from "react";
import AgileDevHero from "../../components/Services/agile-development-sprint-package/AgileDevHero";
import AgileAbout from "../../components/Services/agile-development-sprint-package/AgileAbout";
import WhatIsAgile from "../../components/Services/agile-development-sprint-package/WhatIsAgile";
import HowAgileWorks from "../../components/Services/agile-development-sprint-package/HowAgileWorks";
import BenifitsOfAgile from "../../components/Services/agile-development-sprint-package/BenifitsOfAgile";
import WhyChooseAgile from "../../components/Services/agile-development-sprint-package/WhyChooseAgile";

export default function AgileDevelopmentSprint() {
  return (
    <>
      <AgileDevHero />
      <AgileAbout />
      <WhatIsAgile />
      <HowAgileWorks />
      <BenifitsOfAgile />
      <WhyChooseAgile />
    </>
  );
}
