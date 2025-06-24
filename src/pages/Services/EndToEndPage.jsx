import React from "react";
import AboutEndToEnd from "../../components/Services/end-to-end-startup-support/AboutEndToEnd";
import IdeationValidation from "../../components/Services/end-to-end-startup-support/IdeationValidation";
import ProductDevelopment from "../../components/Services/end-to-end-startup-support/ProductDevelopment";
import GrowthScaling from "../../components/Services/end-to-end-startup-support/GrowthScaling";
import ImprovementInnovation from "../../components/Services/end-to-end-startup-support/ImprovementInnovation";
import WhyChooseAti from "../../components/Services/end-to-end-startup-support/WhyChooseAit";
import EndToEndHero from "../../components/Services/end-to-end-startup-support/EndToEndHero";
import ATIservices2 from "../../assets/images/services/end-to-end/ATI-services-2.png";
import bggrmarketing from "../../assets/images/services/end-to-end/bg-gr-1-marketing-410x547.png";
import leftBg1 from "../../assets/images/services/end-to-end/ATI-services-1.png";
import leftBg2 from "../../assets/images/services/end-to-end/bg-gr-2-marketing-410x756.png";

export default function EndToEndPage() {
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
        <EndToEndHero />
        <AboutEndToEnd />
      </div>

      <IdeationValidation />
      <ProductDevelopment />
      <GrowthScaling />
      <ImprovementInnovation />
      <WhyChooseAti />
    </>
  );
}
