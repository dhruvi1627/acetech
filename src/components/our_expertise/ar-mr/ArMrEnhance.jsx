import React, { useState, useEffect } from "react";
import AR_MR_Customer_Experience from "../../../assets/images/our-expertise/ar-mr/AR-MR-Customer-Experience-qtlqfbsjwzqaivwoic9ahflnju8ghlvd1aqsry7612.jpg";
import FeatureSection from "../common/FeatureSection";

const ArMrEnhance = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Enhancing customer engagement";
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
      id: "advanced-threat-intelligence",
      title: "Interactive Product Visualizations",
      content:
        "Allow customers to explore products in 3D, customize features, and visualize how they fit into their lives, leading to more informed purchasing decisions.",
    },
    {
      id: "continuous-monitoring",
      title: "Immersive Brand Experiences",
      content:
        "Create branded AR and MR experiences that engage customers in new and innovative ways, leaving a lasting impression.",
    },
    {
      id: "gamification",
      title: "Gamification",
      content:
        "Integrate gamification elements into your AR and MR applications to boost engagement and encourage customer interaction.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Enhancing"
      animatedText={displayText}
      image={AR_MR_Customer_Experience}
      imageAlt="AR_MR_Customer_Experience"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Capturing and retaining customer attention in a digital-first world is increasingly difficult, with traditional methods often falling short.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our AR and MR solutions create immersive, interactive experiences that captivate customers and provide deeper engagement. By blending the digital and physical worlds, we help you deliver memorable experiences that drive brand loyalty and increase conversion rates.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="CAPTIVATE CUSTOMERS WITH IMMERSIVE AR EXPERIENCES"
    />
  );
};

export default ArMrEnhance;
