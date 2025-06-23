import React from "react";
import NextGenTechHero from "../../components/Services/next-gen-tech-integration/NextGenTechHero";
import NextGenAbout from "../../components/Services/next-gen-tech-integration/NextGenAbout";
import WhatIsNextGen from "../../components/Services/next-gen-tech-integration/WhatIsNextGen";
import BenifitsOfNextGen from "../../components/Services/next-gen-tech-integration/BenifitsOfNExtGen";
import WhyChooseNextGen from "../../components/Services/next-gen-tech-integration/WhyChooseNextGen";
import HowNextGenWorks from "../../components/Services/next-gen-tech-integration/HowNextGenWorks";
import ATIservices2 from "../../assets/images/services/end-to-end/ATI-services-2.png";
import bggrmarketing from "../../assets/images/services/end-to-end/bg-gr-1-marketing-410x547.png";
import leftBg1 from "../../assets/images/services/end-to-end/ATI-services-1.png";
import leftBg2 from "../../assets/images/services/end-to-end/bg-gr-2-marketing-410x756.png";


export default function NextGenTech() {
  return (
    <>
      <div className=""         style={{
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
        }}>
        <NextGenTechHero />
        <NextGenAbout />
      </div>
      <WhatIsNextGen />
      <HowNextGenWorks />
      <BenifitsOfNextGen />
      <WhyChooseNextGen />
    </>
  );
}
