import React from "react";
import HeroSection from "../common/HeroSection";
import innovativeTech from "../../../assets/images/our-expertise/tech_innovation/Innovation-Technology-Solutions.jpg";
import innovativeProducts from "../../../assets/images/our-expertise/tech_innovation/deliver-innovative-products-and-services.jpg";

const TechInnovationHero = () => (
  <HeroSection
    subtitle="TECH INNOVATION"
    title={
      <>
        LEADING THE FUTURE OF
        <br />
        BUSINESS TRANSFORMATION
      </>
    }
    description={`In an era where technology evolves at an unprecedented pace, staying ahead requires more than just keeping up—it requires innovation. ATI's Innovation Technology Solutions are designed to help businesses harness the power of emerging technologies to drive transformation, enhance efficiency, and create new opportunities for growth. With deep expertise in the latest tech stacks, ATI is your partner in navigating the digital future with confidence and creativity.`}
    leftImage={innovativeProducts}
    rightImage={innovativeTech}
    leftImageAlt="Delivering innovative products and services"
    rightImageAlt="Innovation technology solutions"
    showDecor={true}
  />
);

export default TechInnovationHero;
