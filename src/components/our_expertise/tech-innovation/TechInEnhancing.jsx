import React, { useState, useEffect } from "react";
import Enhancing_customer_Engagement from "../../../assets/images/our-expertise/tech-innovation/Enhancing-Customer-Engagement-1-qtkcip20v09z6tm5kqinlt1zwdlpwrd9cspwa22z46.jpg";
import FeatureSection from "../common/FeatureSection";

const TechInEnhancing = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = "customer engagement";
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
      title: "Personalized Experiences",
      content:
        "Use AI and ML to deliver tailored content, recommendations, and offers that resonate with individual customers.",
    },
    {
      id: "continuous-monitoring",
      title: "Immersive Interactions",
      content:
        "Leverage AR and VR to create immersive experiences that enhance customer engagement and drive conversions.",
    },
    {
      id: "gamification",
      title: "Connected Products",
      content:
        "Develop IoT-enabled products that provide real-time insights and seamless user experiences.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Enhancing"
      animatedText={displayText}
      image={Enhancing_customer_Engagement}
      imageAlt="Enhancing_customer_Engagement"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Engaging customers in meaningful ways is becoming increasingly challenging as customer expectations rise.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "ATI’s innovative solutions enable you to deliver personalized, immersive, and engaging customer experiences. Whether through AI-driven personalization, AR/VR experiences, or IoT-connected products, we help you create unique interactions that captivate your audience and build brand loyalty.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ELEVATE CUSTOMER ENGAGEMENT WITH INNOVATIVE
SOLUTIONS"
    />
  );
};

export default TechInEnhancing;
