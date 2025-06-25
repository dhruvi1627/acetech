import React from "react";
import WhyChooseSection from "../common/WhyChooseSection";
import whyChooseAti from "../../../assets/images/our-expertise/app_development/Why-Choose-ATI-for-App-Development.jpg";

const WhyChooseAppDevelopment = () => {
  const accordionData = [
    {
      id: "full-cycle",
      title: "FULL-CYCLE DEVELOPMENT",
      content: "From initial concept to final deployment and ongoing maintenance, ATI provides end-to-end app development services that cover every stage of the app lifecycle.",
    },
    {
      id: "industry-expertise",
      title: "EXPERTISE ACROSS INDUSTRIES",
      content: "Our team has experience in developing apps across a wide range of industries, including healthcare, finance, retail, education, and more. We understand the unique challenges of each sector and tailor our solutions accordingly.",
    },
    {
      id: "agile-approach",
      title: "AGILE AND LEAN APPROACH",
      content: "We apply agile and lean principles to ensure that our development process is efficient, flexible, and focused on delivering value to your business. This approach allows us to adapt to changing requirements and deliver high-quality apps faster.",
    },
    {
      id: "proven-track",
      title: "PROVEN TRACK RECORD",
      content: "ATI has a history of delivering successful apps that meet and exceed client expectations. Our clients trust us to create apps that are not only functional but also innovative, user friendly, and aligned with their business objectives.",
    },
  ];

  return (
    <WhyChooseSection
      title="WHY CHOOSE ATI"
      animatedText="FOR APP DEVELOPMENT?"
      challengeTitle="CHALLENGE"
      challengeContent="Developing an app that meets user expectations, drives engagement, and supports business goals can be a complex and resource-intensive process."
      solutionTitle="ATI'S SOLUTION"
      solutionContent="ATI's App Development Services are designed to simplify this process, providing you with expert guidance, cutting-edge technology, and a proven methodology that ensures success."
      accordionData={accordionData}
      image={whyChooseAti}
      imageAlt="Why choose ATI for app development"
      buttonText="START YOUR APP DEVELOPMENT JOURNEY"
      backgroundColor="#620e6e"
      buttonHoverColor="#e156e6"
    />
  );
};

export default WhyChooseAppDevelopment;
 