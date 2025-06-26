import React from "react";
import HeroSection from "../common/HeroSection";
import mobileApp from "../../../assets/images/our-expertise/app_development/Our-Expertise-in-App-Development-Mobile-app-development.jpg";
import heroImage from "../../../assets/images/our-expertise/app_development/ATIs-App-Development-Services-Building-Innovative-High-Performance-Apps.jpg";

const AppDevelopmentHero = () => (
  <HeroSection
    subtitle="APP DEVELOPMENT"
    title={
      <>
        BUILDING INNOVATIVE,
        <br />
        HIGH-PERFORMANCE APPS
      </>
    }
    description={`In a world where mobile and web applications are at the forefront of digital interaction, having a robust, user-friendly app is essential for business success. At ATI, we specialize in developing cutting-edge mobile and web applications that drive engagement, enhance customer experiences, and deliver measurable results. Leveraging our deep expertise in the latest technologies and agile development practices, we create apps that are not only functional but also scalable, secure, and tailored to your specific business needs.`}
    leftImage={mobileApp}
    rightImage={heroImage}
    leftImageAlt="Mobile app development expertise"
    rightImageAlt="ATI's app development services"
    showDecor={true}
  />
);

export default AppDevelopmentHero;
