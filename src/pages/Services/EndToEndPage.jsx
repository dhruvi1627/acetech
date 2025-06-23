import React from "react";
import AboutEndToEnd from "../../components/Services/end-to-end-startup-support/AboutEndToEnd";
import IdeationValidation from "../../components/Services/end-to-end-startup-support/IdeationValidation";
import ProductDevelopment from "../../components/Services/end-to-end-startup-support/ProductDevelopment";
import GrowthScaling from "../../components/Services/end-to-end-startup-support/GrowthScaling";
import ImprovementInnovation from "../../components/Services/end-to-end-startup-support/ImprovementInnovation";
import WhyChooseAti from "../../components/Services/end-to-end-startup-support/WhyChooseAit";
import EndToEndHero from "../../components/Services/end-to-end-startup-support/EndToEndHero";

export default function EndToEndPage() {
  return (
    <>
      <EndToEndHero />
      <AboutEndToEnd />
      <IdeationValidation />
      <ProductDevelopment />
      <GrowthScaling />
      <ImprovementInnovation />
      <WhyChooseAti />
    </>
  );
}
