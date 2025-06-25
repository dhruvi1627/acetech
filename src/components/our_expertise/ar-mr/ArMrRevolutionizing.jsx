import React, { useState, useEffect } from "react";
import Revolutionizing_Product_Design_Prototyping from "../../../assets/images/our-expertise/ar-mr/Revolutionizing-Product-Design-Prototyping-_-qtlqh8errwc82f50dnx21gaawyu93ifrmqd8t5dfeu.jpg";
import FeatureSection from "../common/FeatureSection";

const ArMrRevolutionizing = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = "PRODUCT DESIGN PROTOTYPING";
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
      title: "3D Visualization",
      content:
        "View and manipulate product designs in 3D, allowing for better understanding and quicker identification of potential issues.",
    },
    {
      id: "continuous-monitoring",
      title: "Collaborative Design",
      content:
        "Collaborate with team members and stakeholders in a shared MR environment, facilitating real-time feedback and decision-makingn.",
    },
    {
      id: "gamification",
      title: "Rapid Iteration",
      content:
        "Quickly make changes to designs and immediately see the impact in a virtual environment, speeding up the prototyping process.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="REVOLUTIONIZING"
      animatedText={displayText}
      image={Revolutionizing_Product_Design_Prototyping}
      imageAlt="Revolutionizing_Product_Design_Prototyping"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "The traditional product design process can be slow and expensive, with multiple iterations required to refine a product.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our AR and MR solutions for product design and prototyping streamline the development process by enabling designers to visualize and interact with 3D models in real time. This approach reduces the need for physical prototypes, accelerates iteration cycles, and fosters better collaboration among teams.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ACCELERATE DESIGN WITH AR AND MR PROTOTYPING"
    />
  );
};

export default ArMrRevolutionizing;
