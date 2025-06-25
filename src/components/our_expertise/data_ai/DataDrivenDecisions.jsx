import React, { useState, useEffect } from "react";
import dataDrivenInnovation1 from "../../../assets/images/our-expertise/data_ai/Data-Driven-Innovation-1.jpg";
import FeatureSection from "../common/FeatureSection";

const DataDrivenDecisions = () => {
  const [openAccordion, setOpenAccordion] = useState("custom-dashboards");
  const [displayText, setDisplayText] = useState("");
  const fullText = "DECISION MAKING";
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
      title="DATA-DRIVEN"
      animatedText={displayText}
      image={dataDrivenInnovation1}
      imageAlt="Data-driven innovation visualization with global network"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Many businesses struggle to make informed decisions due to the overwhelming amount of data available and the difficulty of extracting actionable insights.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our data analytics and AI solutions empower you to make data-driven decisions with confidence. By transforming raw data into meaningful insights, we help you identify trends, predict outcomes, and optimize strategies, leading to better business performance.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="UNLOCK POWERFUL INSIGHTS NOW"
    />
  );
};

export default DataDrivenDecisions;
