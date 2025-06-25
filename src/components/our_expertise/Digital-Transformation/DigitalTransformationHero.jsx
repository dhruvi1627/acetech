import React from "react";

import DigitalTransformationBusiness from "../../../assets/images/our-expertise/Digital-Transformation/Digital-Transformation-Business-driven.jpg";
import dataDrivenInnovCloudMigration from "../../../assets/images/our-expertise/Digital-Transformation/Cloud-Migration-Modernization-Digital-transformation-qtljnunkb0rewexpsazq5c619fhr3o3llgo1uje3qw.jpg";
import HeroSection from "../common/HeroSection";

const DigitalTransformationHero = () => (
  <HeroSection
    subtitle="Digital Transformation
"
    title={"Services Empowering Businesses for the Future"}
    description={`In today's digital age, data is one of the most valuable assets a business can possess. Leveraging advanced data analytics and artificial intelligence (AI) can provide insights that drive smarter decisions, optimize operations, and fuel innovation. At ATI, we specialize in harnessing the power of data and AI to transform businesses, delivering cutting-edge solutions that give you a competitive edge in the marketplace.`}
    leftImage={dataDrivenInnovCloudMigration}
    rightImage={DigitalTransformationBusiness}
    leftImageAlt="Cloud-Migration-Modernization-Digital-transformation"
    rightImageAlt="Digital-Transformation-Business-driven"
    showDecor={true}
  />
);

export default DigitalTransformationHero;
