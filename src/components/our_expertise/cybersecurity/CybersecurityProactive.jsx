import React, { useState, useEffect } from "react";
import cybersecurity_shiedls from "../../../assets/images/our-expertise/cybersecurity/shiedls-asasas-qtke6xjotsqh784au9uyw3uecapi6hi0mxr2ferqdi.jpg";
import FeatureSection from "../common/FeatureSection";

const CybersecurityProactive = () => {
  const [openAccordion, setOpenAccordion] = useState("behavioral-analysis");
  const [displayText, setDisplayText] = useState("");
  const fullText = "threat prevention";
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
      title: "Advanced Threat Intelligence",
      content:
        "Stay ahead of cybercriminals with real-time threat intelligence that informs your security strategy and enhances your defenses.",
    },
    {
      id: "continuous-monitoring",
      title: "Continuous Monitoring",
      content:
        "Benefit from 24/7 monitoring and automated alerts that ensure potential threats are detected and addressed immediately.",
    },
    {
      id: "behavioral-analysis",
      title: "Behavioral Analysis",
      content:
        "Identify and stop anomalous behavior before it escalates into a full-blown security incident, protecting your critical assets.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Driving"
      animatedText={displayText}
      image={cybersecurity_shiedls}
      imageAlt="cybersecurity_shiedls"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "The increasing sophistication of cyber threats makes it difficult for businesses to stay protected using traditional security measures alone.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our cybersecurity services focus on proactive threat prevention, utilizing advanced technologies and methodologies to identify and neutralize threats before they can cause harm. By deploying a multi-layered security approach, we ensure that your organization is protected from all angles.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="STRENGTHEN PROTECTION WITH PROACTIVE CYBERSECURITY"
    />
  );
};

export default CybersecurityProactive;
