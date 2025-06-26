import React, { useState, useEffect } from "react";
import Optimizing_Operations from "../../../assets/images/our-expertise/tech-innovation/Optimizing-Operations-and-Efficiency-qtkbylaaokr6v2tgz1nx9vp2hop39tjxxae0qzw47a.jpg";
import FeatureSection from "../common/FeatureSection";

const TechInOptimizing = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = "operations & efficiency";
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
      title: "Process Automation",
      content:
        "Implement RPA to automate routine tasks, reducing manual effort and minimizing errors.",
    },
    {
      id: "continuous-monitoring",
      title: "Real-Time Analytics",
      content:
        "Use IoT and edge computing to monitor and optimize operations in real time, improving efficiency and responsiveness.",
    },
    {
      id: "gamification",
      title: "Scalable Infrastructure",
      content:
        "Leverage cloud computing to scale your operations flexibly and cost-effectively as your business grows.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Optimizing"
      animatedText={displayText}
      image={Optimizing_Operations}
      imageAlt="Optimizing_Operations"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Operational inefficiencies can hinder growth and reduce profitability, especially in a competitive market.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our technology solutions optimize your operations by automating processes, improving data flow, and enabling real-time decision-making. From RPA and IoT to cloud and edge computing, we provide the tools you need to streamline workflows, reduce costs, and boost productivity.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="STREAMLINE OPERATIONS AND BOOST PRODUCTIVITY NOW"
    />
  );
};

export default TechInOptimizing;
