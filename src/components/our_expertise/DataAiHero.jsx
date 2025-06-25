import React from "react";

import dataDrivenInnovation from "../../assets/images/our-expertise/Data-Driven-Innovation.jpg";
import dataDrivenInnovation2 from "../../assets/images/our-expertise/Data-Driven-Innovation-2.jpg";
import HeroSection from "./common/HeroSection";

const DataAiHero = () => (
  <HeroSection
    subtitle="DATA & AI SOLUTIONS"
    title={
      <>
        UNLOCKING THE POWER OF
        <br />
        DATA-DRIVEN INNOVATION
      </>
    }
    description={`In today's digital age, data is one of the most valuable assets a business can possess. Leveraging advanced data analytics and artificial intelligence (AI) can provide insights that drive smarter decisions, optimize operations, and fuel innovation. At ATI, we specialize in harnessing the power of data and AI to transform businesses, delivering cutting-edge solutions that give you a competitive edge in the marketplace.`}
    leftImage={dataDrivenInnovation2}
    rightImage={dataDrivenInnovation}
    leftImageAlt="Data-driven innovation visualization"
    rightImageAlt="Data and AI solutions visualization"
    showDecor={true}
  />
);

export default DataAiHero;
