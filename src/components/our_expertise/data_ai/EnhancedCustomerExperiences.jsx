import React, { useState, useEffect } from "react";
import enhancedCustomerExperiences from "../../../assets/images/our-expertise/data_ai/Enhanced-Customer-Experiences.jpg";
import FeatureSection from "../common/FeatureSection";

const EnhancedCustomerExperiences = () => {
  const [openAccordion, setOpenAccordion] = useState("real-time");
  const [displayText, setDisplayText] = useState("");
  const fullText = "EXPERIENCES";
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
      id: "real-time",
      title: "REAL-TIME ANALYTICS",
      content:
        "Gain insights in real time, enabling you to respond quickly to market changes and emerging opportunities.",
    },
    {
      id: "predictive",
      title: "PREDICTIVE ANALYTICS",
      content:
        "Anticipate future trends and behaviors with predictive models, allowing you to make proactive decisions.",
    },
    {
      id: "custom-dashboards",
      title: "CUSTOM DASHBOARDS",
      content:
        "Visualize key metrics and data in custom dashboards that provide a clear, actionable view of your business performance.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="ENHANCED CUSTOMER"
      animatedText={displayText}
      image={enhancedCustomerExperiences}
      imageAlt="Enhanced customer experiences through AI and data analytics"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Delivering personalized, responsive customer experiences is increasingly challenging as customer expectations rise.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "ATI's AI and data solutions enable businesses to deliver highly personalized and responsive customer experiences. From AI-powered chatbots to predictive customer analytics, we help you understand your customers better and engage with them more effectively.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ENHANCE CUSTOMER EXPERIENCE TODAY"
    />
  );
};

export default EnhancedCustomerExperiences; 