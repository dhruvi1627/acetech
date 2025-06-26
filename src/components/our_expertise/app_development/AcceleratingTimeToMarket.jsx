import React, { useState } from "react";
import FeatureSection from "../common/FeatureSection";
import acceleratingTime from "../../../assets/images/our-expertise/app_development/Accelerating-Time-to-Market.jpg";

const AcceleratingTimeToMarket = () => {
  const [openAccordion, setOpenAccordion] = useState("rapid-prototyping");

  const accordionData = [
    {
      id: "rapid-prototyping",
      title: "RAPID PROTOTYPING",
      content: "Quickly develop and iterate on app prototypes to refine features and functionality before full-scale development.",
    },
    {
      id: "continuous-integration",
      title: "CONTINUOUS INTEGRATION",
      content: "Use automated tools to integrate and test code frequently, reducing development time and identifying issues early.",
    },
    {
      id: "phased-rollouts",
      title: "PHASED ROLLOUTS",
      content: "Implement phased rollouts to gather user feedback and make improvements while gradually scaling the app to a broader audience.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="ACCELERATING"
      animatedText="TIME-TO-MARKET"
      image={acceleratingTime}
      imageAlt="Accelerating time-to-market in app development"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "In today's fast-paced market, getting your app to users quickly is crucial for capturing market share and staying ahead of competitors.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our agile development process allows us to accelerate the time-to-market for your app without compromising on quality. By using modular development, continuous integration, and automated testing, we ensure that your app is delivered on schedule and ready for launch.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ACCELERATE APP LAUNCH WITH AGILE DEVELOPMENT"
    />
  );
};

export default AcceleratingTimeToMarket;
