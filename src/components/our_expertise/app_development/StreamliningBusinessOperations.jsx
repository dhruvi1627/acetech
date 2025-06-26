import React, { useState } from "react";
import FeatureSection from "../common/FeatureSection";
import streamliningOperations from "../../../assets/images/our-expertise/app_development/Streamlining-Business-Operations.jpg";

const StreamliningBusinessOperations = () => {
  const [openAccordion, setOpenAccordion] = useState("process-automation");

  const accordionData = [
    {
      id: "process-automation",
      title: "PROCESS AUTOMATION",
      content: "Automate repetitive tasks and reduce manual effort with custom apps tailored to your operational needs.",
    },
    {
      id: "data-integration",
      title: "DATA INTEGRATION",
      content: "Seamlessly integrate your app with existing systems, ensuring a unified approach to data management and decision-making.",
    },
    {
      id: "real-time-analytics",
      title: "REAL-TIME ANALYTICS",
      content: "Gain insights into your business operations with real-time data and analytics, enabling you to make informed decisions.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="STREAMLINING BUSINESS"
      animatedText="OPERATIONS"
      image={streamliningOperations}
      imageAlt="Streamlining business operations through custom applications"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Many businesses struggle to manage operations efficiently, often due to outdated systems and manual processes.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "We develop custom business apps that streamline operations, automate workflows, and improve overall efficiency. Whether it's a mobile CRM, an inventory management system, or an employee collaboration tool, our apps are designed to optimize your business processes.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="OPTIMIZE OPERATIONS WITH CUSTOM APPS"
    />
  );
};

export default StreamliningBusinessOperations; 