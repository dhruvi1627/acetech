import React from "react";
import DedicatedTeam from "../../components/Talents/dedicatedteam/DedicatedTeam";
import DedicatedTeamContent from "../../components/Talents/dedicatedteam/DedicatedTeamContent";
import WhatIsDedicatedTeam from "../../components/Talents/dedicatedteam/WhatIsDedicatedTeam";
import HowTeamWorks from "../../components/Talents/dedicatedteam/HowTeamWorks";
import Benefits from "../../components/Talents/dedicatedteam/BenefitsDedicatedTeam";
import WhyDedicatedTeam from "../../components/Talents/dedicatedteam/WhyDedicatedTeam";
import ATIservices2 from "../../assets/images/services/end-to-end/ATI-services-2.png";
import bggrmarketing from "../../assets/images/services/end-to-end/bg-gr-1-marketing-410x547.png";
import leftBg1 from "../../assets/images/services/end-to-end/ATI-services-1.png";
import leftBg2 from "../../assets/images/services/end-to-end/bg-gr-2-marketing-410x756.png";

export default function DedicatedTeamPage() {
  return (
    <>
      <div
        className=""
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
        <DedicatedTeam />
        <DedicatedTeamContent />
      </div>
      <WhatIsDedicatedTeam />
      <HowTeamWorks />
      <Benefits />
      <WhyDedicatedTeam />
    </>
  );
}
