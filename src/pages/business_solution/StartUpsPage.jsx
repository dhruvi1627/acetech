import React from "react";
import ATIservices2 from "../../assets/images/services/end-to-end/ATI-services-2.png";
import bggrmarketing from "../../assets/images/services/end-to-end/bg-gr-1-marketing-410x547.png";
import leftBg1 from "../../assets/images/services/end-to-end/ATI-services-1.png";
import leftBg2 from "../../assets/images/services/end-to-end/bg-gr-2-marketing-410x756.png";
import StartupsHero from "../../components/BusinessSolutions/startups/StartupsHero";
import StartUpContent from "../../components/BusinessSolutions/startups/StartUpContent";
import StartUpLaunch from "../../components/BusinessSolutions/startups/StartUpLaunch";
import StartUpTalent from "../../components/BusinessSolutions/startups/StartUpTalent";
import StartUpInfra from "../../components/BusinessSolutions/startups/StartUpInfra";
import StartUpPartnership from "../../components/BusinessSolutions/startups/StartUpPartnership";
import StartUpDev from "../../components/BusinessSolutions/startups/StartUpDev";
import WhyAcetech from "../../components/BusinessSolutions/startups/WhyAcetech";

export default function AgileDevelopmentSprint() {
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
        <StartupsHero />
        <StartUpContent/>
      </div>
      <StartUpLaunch />
      <StartUpTalent/>
      <StartUpInfra/>
      <StartUpPartnership/>
      <StartUpDev/>
      <WhyAcetech/>
    </>
  );
}
