import React from "react";
import enterpriseSystemIntegration from "../../../assets/images/our-expertise/system_integration/Enterprise-System-Integration.jpg";
import enterpriseSystemIntegration2 from "../../../assets/images/our-expertise/system_integration/Cloud-Integration.jpg";
import HeroSection from "../common/HeroSection";

const SystemIntegrationHero = () => (
  <HeroSection
    subtitle="SYSTEM INTEGRATION"
    title={
      <>
        SEAMLESSLY CONNECTING
        <br />
        YOUR TECHNOLOGY ECOSYSTEM
      </>
    }
    description={`In today's rapidly evolving digital landscape, businesses rely on a variety of technologies and systems to operate efficiently and stay competitive. However, these systems often operate in silos, leading to inefficiencies and missed opportunities. ATI's Systems Integration services are designed to bridge these gaps, ensuring that your technology ecosystem works seamlessly as a cohesive unit. With our deep expertise in systems integration, we help you unlock the full the potential of your technology investments, driving operational efficiency and enabling innovation.`}
    leftImage={enterpriseSystemIntegration2}
    rightImage={enterpriseSystemIntegration}
    leftImageAlt="Enterprise system integration visualization"
    rightImageAlt="Technology ecosystem integration visualization"
    showDecor={true}
  />
);

export default SystemIntegrationHero; 