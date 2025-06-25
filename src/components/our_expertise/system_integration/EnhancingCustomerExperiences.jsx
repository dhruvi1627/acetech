import React, { useState, useEffect } from "react";
import customerExperiences from "../../../assets/images/our-expertise/system_integration/Enhancing-Customer-Experiences.jpg";
import FeatureSection from "../common/FeatureSection";

const EnhancingCustomerExperiences = () => {
  const [openAccordion, setOpenAccordion] = useState("customer-view");
  const [displayText, setDisplayText] = useState("");
  const fullText = "CUSTOMER EXPERIENCES";
  const [isTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 2000;

    const type = () => {
      if (isTyping && !isDeleting) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
          timeout = setTimeout(type, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            type();
          }, pauseDuration);
        }
      } else if (isDeleting) {
        if (displayText.length > 0) {
          setDisplayText(fullText.slice(0, displayText.length - 1));
          timeout = setTimeout(type, deletingSpeed);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(type, pauseDuration);
        }
      }
    };

    timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting]);

  const accordionData = [
    {
      id: "customer-view",
      title: "360-DEGREE CUSTOMER VIEW",
      content:
        "Gain a complete view of your customers by integrating data from multiple systems, enabling personalized interactions.",
    },
    {
      id: "seamless-interactions",
      title: "SEAMLESS INTERACTIONS",
      content:
        "Ensure that customer interactions are consistent across all channels and touchpoints by integrating your customer-facing systems.",
    },
    {
      id: "improved-responsiveness",
      title: "IMPROVED RESPONSIVENESS",
      content:
        "Enhance your ability to respond to customer needs quickly and effectively by providing your teams with real-time access to integrated customer data.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="ENHANCING"
      animatedText={displayText}
      image={customerExperiences}
      imageAlt="Enhancing customer experiences through integrated systems"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Inconsistent customer data across different systems can lead to poor customer experiences and missed opportunities for personalization.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "By integrating your CRM, ERP, and other customer-facing systems, ATI helps you create a unified view of your customers. This integration enables you to deliver personalized experiences, improve customer service, and increase customer satisfaction.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="UNIFY CUSTOMER DATA FOR BETTER EXPERIENCES"
    />
  );
};

export default EnhancingCustomerExperiences; 