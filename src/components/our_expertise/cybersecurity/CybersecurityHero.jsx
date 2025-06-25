import React from "react";

import DigitalTransformationBusiness from "../../../assets/images/our-expertise/cybersecurity/aoffie-qtke3jct7c25nwgcil02e19rut6n6aexqhf4w32y6m.jpg";
import dataDrivenInnovCloudMigration from "../../../assets/images/our-expertise/cybersecurity/laperfwsofa-qtke49o64tf60bcqxtxiuqr2un13syqmn0jkp0wnzs.jpg";
import HeroSection from "../common/HeroSection";

const CybersecurityHero = () => (
  <HeroSection
    subtitle="Cybersecurity"
    title={"Safeguarding Your Business in a Digital World"}
    description={`In an increasingly interconnected and digital world, cybersecurity is more critical than ever. Cyber threats are evolving rapidly, and the consequences of a breach can be devastating, from financial losses to reputational damage. ATI’s Cybersecurity Services are designed to protect your business from these threats, ensuring that your digital assets, customer data, and operations remain secure. With deep expertise across various security technologies and methodologies, ATI provides comprehensive cybersecurity solutions tailored to your unique needs.`}
    leftImage={dataDrivenInnovCloudMigration}
    rightImage={DigitalTransformationBusiness}
    leftImageAlt="Cloud-Migration-Modernization-Digital-transformation"
    rightImageAlt="Digital-Transformation-Business-driven"
    showDecor={true}
  />
);

export default CybersecurityHero;
