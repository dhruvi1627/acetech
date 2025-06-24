import React from "react";
import AgileDevHero from "../../components/Services/agile-development-sprint-package/AgileDevHero";
import AgileAbout from "../../components/Services/agile-development-sprint-package/AgileAbout";
import WhatIsAgile from "../../components/Services/agile-development-sprint-package/WhatIsAgile";
import HowAgileWorks from "../../components/Services/agile-development-sprint-package/HowAgileWorks";
import BenifitsOfAgile from "../../components/Services/agile-development-sprint-package/BenifitsOfAgile";
import WhyChooseAgile from "../../components/Services/agile-development-sprint-package/WhyChooseAgile";
import ATIservices2 from "../../assets/images/services/end-to-end/ATI-services-2.png";
import bggrmarketing from "../../assets/images/services/end-to-end/bg-gr-1-marketing-410x547.png";
import leftBg1 from "../../assets/images/services/end-to-end/ATI-services-1.png";
import leftBg2 from "../../assets/images/services/end-to-end/bg-gr-2-marketing-410x756.png";

export default function AgileDevelopmentSprint() {
  return (
    <>
      <div
        className="realative"
        style={{
          backgroundImage: `
            url(${leftBg1}),
            url(${leftBg2}),
            url(${ATIservices2}),
            url(${bggrmarketing})
          `,
          backgroundPosition: `
            left -400px top 250px,
            left top -400px,
            right -400px top 50px,
            right center
          `,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
          backgroundSize: `
            auto ,
            auto 150%,
            auto ,
            auto 150%
          `,
        }}
      >
        <AgileDevHero />
        <AgileAbout />
      </div>
      <WhatIsAgile />
      <HowAgileWorks />
      <BenifitsOfAgile />
      <WhyChooseAgile />
    </>
  );
}
