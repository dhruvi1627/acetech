import React, { useState } from "react";
import FeatureSection from "../common/FeatureSection";
import enhancingEngagement from "../../../assets/images/our-expertise/app_development/Enhancing-Customer-Engagement.jpg";

const EnhancingCustomerEngagement = () => {
  const [openAccordion, setOpenAccordion] = useState("personalization");

  const accordionData = [
    {
      id: "personalization",
      title: "PERSONALIZATION",
      content: "Deliver personalized experiences to users based on their behavior, preferences, and interactions.",
    },
    {
      id: "interactive-features",
      title: "INTERACTIVE FEATURES",
      content: "Incorporate interactive elements like gamification, in-app messaging, and social sharing to enhance user engagement.",
    },
    {
      id: "optimized-performance",
      title: "OPTIMIZED PERFORMANCE",
      content: "Ensure fast load times and smooth performance to keep users satisfied and engaged.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="ENHANCING CUSTOMER"
      animatedText="ENGAGEMENT"
      image={enhancingEngagement}
      imageAlt="Enhancing customer engagement through app development"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "In a competitive market, retaining customer attention and engagement through an app can be challenging.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our app development services focus on creating engaging, intuitive apps that captivate users and keep them coming back. By integrating features such as push notifications, personalized content, and seamless navigation, we help you build apps that foster strong customer relationships.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="BUILD ENGAGING APPS THAT RETAIN USERS"
    />
  );
};

export default EnhancingCustomerEngagement;
