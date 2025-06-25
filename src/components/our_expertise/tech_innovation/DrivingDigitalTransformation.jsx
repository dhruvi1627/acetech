import React, { useState } from "react";
import FeatureSection from "../common/FeatureSection";
import digitalTransformation from "../../../assets/images/our-expertise/tech_innovation/Driving-Digital-Transformation.jpg";

const DrivingDigitalTransformation = () => {
  const [openAccordion, setOpenAccordion] = useState("strategic-roadmaps");

  const accordionData = [
    {
      id: "strategic-roadmaps",
      title: "STRATEGIC ROADMAPS",
      content: "We develop comprehensive digital transformation roadmaps that align with your business goals and leverage the latest technologies.",
    },
    {
      id: "seamless-integration",
      title: "SEAMLESS INTEGRATION",
      content: "Integrate cutting-edge technologies into your existing systems and processes, ensuring a smooth transition and minimal disruption.",
    },
    {
      id: "continuous-innovation",
      title: "CONTINUOUS INNOVATION",
      content: "Foster a culture of continuous innovation with our ongoing support and expertise in emerging technologies.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="DRIVING DIGITAL"
      animatedText="TRANSFORMATION"
      image={digitalTransformation}
      imageAlt="Driving digital transformation through innovative technologies"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Many businesses struggle to keep up with the rapid pace of technological change, risking obsolescence and lost opportunities.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our innovation technology solutions are designed to drive digital transformation across your organization. By integrating advanced technologies like AI, blockchain, IoT, and cloud computing, we help you modernize your operations, enhance your digital capabilities, and stay competitive in a rapidly evolving market.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="START YOUR DIGITAL TRANSFORMATION JOURNEY"
    />
  );
};

export default DrivingDigitalTransformation;
