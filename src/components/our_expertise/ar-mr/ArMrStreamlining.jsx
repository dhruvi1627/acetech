import React, { useState, useEffect } from "react";
import Streamlining_Training_Development from "../../../assets/images/our-expertise/ar-mr/Streamlining-Training-Development_-qtlqg8owk6zbt8kw68h8epascbqaz0hyttkskmudza.jpg";
import FeatureSection from "../common/FeatureSection";

const ArMrStreamlining = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = " raining & Development_";
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
      title: "Hands-On Simulations",
      content:
        "Provide employees with realistic, interactive simulations that mirror real-world scenarios, improving skill acquisition and safety.",
    },
    {
      id: "continuous-monitoring",
      title: "Remote Training",
      content:
        "Enable remote training with AR and MR, allowing employees to access training programs from anywhere, at any time.",
    },
    {
      id: "gamification",
      title: "Continuous Feedback",
      content:
        "Incorporate real-time feedback and performance tracking into training simulations, helping employees improve and refine their skills.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Streamlining"
      animatedText={displayText}
      image={Streamlining_Training_Development}
      imageAlt="Streamlining_Training_Development"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Training employees in complex or hazardous environments can be time consuming, costly, and risky.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "ATI’s AR and MR training solutions provide realistic, immersive simulations that enhance learning outcomes and reduce training costs. By allowing employees to practice skills in a safe, controlled environment, we help you accelerate the learning process and improve retention.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ENHANCE TRAINING WITH IMMERSIVE AR SIMULATIONS"
    />
  );
};

export default ArMrStreamlining;
