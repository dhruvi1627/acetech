import React from "react";
import ATIservices2 from "../../assets/images/services/end-to-end/ATI-services-2.png";
import bggrmarketing from "../../assets/images/services/end-to-end/bg-gr-1-marketing-410x547.png";
import leftBg1 from "../../assets/images/services/end-to-end/ATI-services-1.png";
import leftBg2 from "../../assets/images/services/end-to-end/bg-gr-2-marketing-410x756.png";
import SmesHero from "../../components/BusinessSolutions/smes/SmesHero";
import SmesContent from "../../components/BusinessSolutions/smes/SmesContent";
import SmesTalent from "../../components/BusinessSolutions/smes/SmesTalent";
import SmesTechService from "../../components/BusinessSolutions/smes/SmesTechService";
import SmesCustomTech from "../../components/BusinessSolutions/smes/SmesCustomTech";
import SmesDigital from "../../components/BusinessSolutions/smes/SmesDigital";
import SmesSupport from "../../components/BusinessSolutions/smes/SmesSupport";
import WhySmes from "../../components/BusinessSolutions/smes/WhySmes";

export default function EntrepreneursPage() {
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
        <SmesHero />
        <SmesContent/>
      </div>
      <SmesTalent/>
      <SmesTechService/>
      <SmesSupport/>
      <SmesCustomTech/>
      <SmesDigital/>
      <WhySmes/>
    </>
  );
}
