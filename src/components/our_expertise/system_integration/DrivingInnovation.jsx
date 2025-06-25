import React, { useState, useEffect } from "react";
import drivingInnovation from "../../../assets/images/our-expertise/system_integration/Driving-Innovation-and-Agility.jpg";
import FeatureSection from "../common/FeatureSection";

const DrivingInnovation = () => {
  const [openAccordion, setOpenAccordion] = useState("agile-infrastructure");
  const [displayText, setDisplayText] = useState("");
  const fullText = "AND AGILITY";
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
      id: "agile-infrastructure",
      title: "AGILE IT INFRASTRUCTURE",
      content:
        "Build an agile IT infrastructure that supports rapid innovation and enables you to adapt quickly to changing business needs.",
    },
    {
      id: "scalable-solutions",
      title: "SCALABLE SOLUTIONS",
      content:
        "Ensure that your systems can scale with your business, supporting growth and expansion without disruption.",
    },
    {
      id: "innovation-enablement",
      title: "INNOVATION ENABLEMENT",
      content:
        "Integrate emerging technologies, such as AI, IoT, and blockchain, with your existing systems to drive innovation and gain a competitive edge.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="DRIVING INNOVATION"
      animatedText={displayText}
      image={drivingInnovation}
      imageAlt="Driving innovation and agility through system integration"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "In a rapidly changing business environment, the ability to innovate and adapt quickly is crucial for staying competitive.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our systems integration services empower your business to innovate and adapt by creating a flexible, scalable IT environment. By integrating new technologies with your existing systems, we help you respond to market changes, launch new products and services, and scale your operations efficiently.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ADAPT QUICKLY WITH SCALABLE INTEGRATION"
    />
  );
};

export default DrivingInnovation; 