import React, { useState, useEffect } from "react";
import Driving_Digital_Transformation from "../../../assets/images/our-expertise/tech-innovation/Driving-Digital-Transformation-qtkc05om2mwe7ojjtq1jfhgq4sz43nru51j5jlkhty.jpg";
import FeatureSection from "../common/FeatureSection";

const TechInDriving = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Digital Transformation";
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
      title: "Strategic Roadmaps",
      content:
        "We develop comprehensive digital transformation roadmaps that align with your business goals and leverage the latest technologies.",
    },
    {
      id: "continuous-monitoring",
      title: "Seamless Integration",
      content:
        "Integrate cutting-edge technologies into your existing systems and processes, ensuring a smooth transition and minimal disruption.",
    },
    {
      id: "gamification",
      title: "Continuous Innovation",
      content:
        "Foster a culture of continuous innovation with our ongoing support and expertise in emerging technologies.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="driving"
      animatedText={displayText}
      image={Driving_Digital_Transformation}
      imageAlt="Driving_Digital_Transformation"
      imageLeft={true}
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
      buttonText="TRANSFORM YOUR BUSINESS WITH INNOVATION TODAY"
    />
  );
};

export default TechInDriving;
