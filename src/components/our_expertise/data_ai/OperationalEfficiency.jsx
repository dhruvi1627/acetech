import React, { useState, useEffect } from "react";
import operationalEfficiency from "../../../assets/images/our-expertise/data_ai/Operational-Efficiency.jpg";
import FeatureSection from "../common/FeatureSection";

const OperationalEfficiency = () => {
  const [openAccordion, setOpenAccordion] = useState("process-automation");
  const [displayText, setDisplayText] = useState("");
  const fullText = "EFFICIENCY";
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
      id: "process-automation",
      title: "PROCESS AUTOMATION",
      content:
        "Automate repetitive tasks with AI-driven solutions, freeing up your team to focus on higher-value work.",
    },
    {
      id: "data-integration",
      title: "DATA INTEGRATION",
      content:
        "Break down data silos and create a unified data environment that supports seamless information flow and collaboration.",
    },
    {
      id: "optimized-workflows",
      title: "OPTIMIZED WORKFLOWS",
      content:
        "Leverage AI to optimize workflows, reducing bottlenecks and improving productivity",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="OPERATIONAL"
      animatedText={displayText}
      image={operationalEfficiency}
      imageAlt="Operational efficiency visualization with AI and automation"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Businesses often face inefficiencies due to manual processes, data silos, and outdated technology.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our AI-driven automation and data engineering services streamline operations, reduce manual effort, and improve overall efficiency. We help you automate routine tasks, optimize workflows, and ensure that your data is always accessible and actionable.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="STREAMLINE OPERATIONS WITH AUTOMATION"
    />
  );
};

export default OperationalEfficiency; 