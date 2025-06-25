import React from "react";
import ATIservices2 from "../../assets/images/services/end-to-end/ATI-services-2.png";
import bggrmarketing from "../../assets/images/services/end-to-end/bg-gr-1-marketing-410x547.png";
import leftBg1 from "../../assets/images/services/end-to-end/ATI-services-1.png";
import leftBg2 from "../../assets/images/services/end-to-end/bg-gr-2-marketing-410x756.png";
import InvestorsHero from "../../components/BusinessSolutions/investorsandpartners/InvestorsHero";
import InvestorsContent from "../../components/BusinessSolutions/investorsandpartners/InvestorsContent";
import InvestorsTalent from "../../components/BusinessSolutions/investorsandpartners/InvestorsTalent";
import InvestorsScalableTech from "../../components/BusinessSolutions/investorsandpartners/InvestorsScalableTech";
import InvestorsSupport from "../../components/BusinessSolutions/investorsandpartners/InvestorsSupport";
import InvestorsCustomTech from "../../components/BusinessSolutions/investorsandpartners/InvestorsCustomTech";
import InvestorsStartup from "../../components/BusinessSolutions/investorsandpartners/InvestorsStartup";
import WhyInvestors from "../../components/BusinessSolutions/investorsandpartners/WhyInvestors";

export default function InventorsAndPartnersPage() {
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
        <InvestorsHero />
        <InvestorsContent/>
      </div>
      <InvestorsTalent/>
      <InvestorsScalableTech/>
      <InvestorsSupport/>
      <InvestorsCustomTech/>
      <InvestorsStartup/>
      <WhyInvestors/>
    </>
  );
}
