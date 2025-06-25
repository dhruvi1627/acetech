import React, { useState, useEffect } from "react";
import seamlessIntegration from "../../../assets/images/our-expertise/system_integration/ATIs-Systems-Integration-Services-Seamlessly-Connecting-Your-Technology.jpg";
import FeatureSection from "../common/FeatureSection";

const StreamliningOperations = () => {
  const [openAccordion, setOpenAccordion] = useState("unified-processes");
  const [displayText, setDisplayText] = useState("");
  const fullText = "OPERATIONS";
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
      id: "unified-processes",
      title: "UNIFIED PROCESSES",
      content:
        "Create streamlined, end-to-end processes by integrating your key systems, enabling smooth and efficient operations.",
    },
    {
      id: "real-time-data",
      title: "REAL-TIME DATA FLOW",
      content:
        "Ensure real-time data flow across your organization, providing accurate and up-to-date information for better decision-making.",
    },
    {
      id: "automation",
      title: "AUTOMATION",
      content:
        "Automate repetitive tasks by integrating systems, reducing manual effort, and minimizing the risk of errors.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="STREAMLINING"
      animatedText={displayText}
      image={seamlessIntegration}
      imageAlt="ATI's Systems Integration Services - Seamlessly Connecting Your Technology"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Disconnected systems can lead to inefficiencies, data silos, and operational bottlenecks, making it difficult to achieve optimal performance.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our systems integration services streamline your operations by ensuring that all your systems work together seamlessly. By integrating your enterprise applications, data sources, and cloud environments, we help you eliminate inefficiencies, reduce manual processes, and improve overall productivity.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ELIMINATE INEFFICIENCIES WITH SEAMLESS INTEGRATION"
    />
  );
};

export default StreamliningOperations; 