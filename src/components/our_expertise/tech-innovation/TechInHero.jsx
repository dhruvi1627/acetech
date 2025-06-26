import React from "react";

import Innovation_Technology_Solutions from "../../../assets/images/our-expertise/tech-innovation/Innovation-Technology-Solutions.jpg";
import deliver_innovative_products_and_services from "../../../assets/images/our-expertise/tech-innovation/deliver-innovative-products-and-services-qtkckt6ywpi50jwqruxxqqk148dhnukr0iw9db4v3s.jpg";
import HeroSection from "../common/HeroSection";

const TechInHero = () => (
  <HeroSection
    subtitle="Tech Innovation"
    title={"Leading the Future of Business Transformation"}
    description={`In an era where technology evolves at an unprecedented pace, staying ahead requires more than just keeping up—it requires innovation. ATI’s Innovation Technology Solutions are designed to help businesses harness the power of emerging technologies to drive transformation, enhance efficiency, and create new opportunities for growth. With deep expertise in the latest tech stacks, ATI is your partner in navigating the digital future with confidence and creativity.`}
    leftImage={deliver_innovative_products_and_services}
    rightImage={Innovation_Technology_Solutions}
    leftImageAlt="deliver_innovative_products_and_services"
    rightImageAlt="Innovation_Technology_Solutions"
    showDecor={true}
  />
);

export default TechInHero;
