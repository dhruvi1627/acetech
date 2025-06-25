import React from "react";

import Augmented_Reality_AR_Development from "../../../assets/images/our-expertise/ar-mr/Augmented-Reality-AR-Development.jpg";
import ar__mr_solutions from "../../../assets/images/our-expertise/ar-mr/ar__mr_solutions-qtlqa3sum8wvq6uxjsienpr5uf635qya0plq0g4ol4.jpg";
import HeroSection from "../common/HeroSection";

const ArMrHero = () => (
  <HeroSection
    subtitle="AR & MR"
    title={"Transforming Reality with Cutting-Edge Technology"}
    description={`As the boundaries between the physical and digital worlds continue to blur, Augmented Reality (AR) and Mixed Reality (MR) are leading the way in revolutionizing how businesses interact with their customers, train employees, and optimize operations. ATI’s AR & MR Solutions are designed to help businesses leverage these immersive technologies to create engaging experiences, enhance productivity, and drive innovation. With our deep expertise in AR and MR, ATI is your partner in transforming reality to unlock new possibilities.`}
    leftImage={ar__mr_solutions}
    rightImage={Augmented_Reality_AR_Development}
    leftImageAlt="ar__mr_solutions"
    rightImageAlt="Augmented_Reality_AR_Development"
    showDecor={true}
  />
);

export default ArMrHero;
