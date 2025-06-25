import React, { useState, useEffect } from "react";
import DrivingInnovationImg from "../../../assets/images/our-expertise/Digital-Transformation/Driving-Innovation-and-Growth-Digital-transformation-qtljr7wq4j1gssoekjw3k0usshp290nqovhnje7jgm.jpg";
import FeatureSection from "../common/FeatureSection";

const DrivingInnovation = () => {
  const [openAccordion, setOpenAccordion] = useState("iot-integration");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Innovation and Growth";
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
      id: "Cloud-Enabled-Innovation",
      title: "Cloud-Enabled Innovation",
      content:
        "Leverage cloud computing to rapidly develop, test, and deploy new solutions, enabling faster time-to-market and scalability.",
    },
    {
      id: "ai-and-machinelearning",
      title: "AI & Machine Learning",
      content:
        "Use advanced analytics and machine learning to uncover new business opportunities, optimize operations, and deliver personalized customer experiences.",
    },
    {
      id: "iot-integration",
      title: "IoT Integration",
      content:
        "Implement agile methodologies to enhance flexibility, improve collaboration, and accelerate project delivery.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Driving"
      animatedText={displayText}
      image={DrivingInnovationImg}
      imageAlt="Data-driven innovation visualization with global network"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Staying competitive in a rapidly changing market requires continuous innovation and the ability to scale new ideas quickly.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "ATI empowers your business to innovate by providing the tools,technologies, and strategies needed to drive growth. Whether through cloud-based platforms, AI-driven analytics, or IoT solutions, we help you explore new opportunities, develop innovative products and services, and expand your market reach.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="TRANSFORM YOUR BUSINESS TODAY"
    />
  );
};

export default DrivingInnovation;
