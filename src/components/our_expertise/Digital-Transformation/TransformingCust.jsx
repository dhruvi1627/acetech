import React, { useState, useEffect } from "react";
import TransformingCustomerExperiences from "../../../assets/images/our-expertise/Digital-Transformation/Transforming-Customer-Experiences-qtljuice1njlfnwdcz33a6yvn1hb6vpx55ou09bxom.jpg";
import FeatureSection from "../common/FeatureSection";

const TransformingCust = () => {
  const [openAccordion, setOpenAccordion] = useState("customer-journey");
  const [displayText, setDisplayText] = useState("");
  const fullText = "customer experiences";
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
      id: "Cloud-Enabled-Innovation",
      title: "Omni- channel Engagement",
      content:
        "Deliver consistent, personalized experiences across all customer touchpoints, including web, mobile, social, and in-store.",
    },
    {
      id: "ai-and-machinelearning",
      title: "AI-Driven Personalization",
      content:
        "Use AI to tailor content, recommendations, and offers to individual customers, enhancing engagement and satisfaction.",
    },
    {
      id: "customer-journey",
      title: "Customer Journey Optimization",
      content:
        "Visualize key metrics and data in custom dashboards that provide a clear, actionable view of your business performance.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Transforming"
      animatedText={displayText}
      image={TransformingCustomerExperiences}
      imageAlt="Data-driven innovation visualization with global network"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Delivering exceptional customer experiences in the digital age requires a deep understanding of customer needs and the ability to engage across multiple channels.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our customer experience transformation services are designed to help you build meaningful connections with your customers. By integrating AI, automation, and data analytics, we create personalized, seamless experiences that drive customer satisfaction, loyalty, and lifetime value.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="TRANSFORM YOUR CUSTOMER EXPERIENCE TODAY"
    />
  );
};

export default TransformingCust;
