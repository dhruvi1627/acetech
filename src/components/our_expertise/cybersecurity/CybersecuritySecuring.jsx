import React, { useState, useEffect } from "react";
import securingdigitaltrasformtion from "../../../assets/images/our-expertise/cybersecurity/securing-digital-trasformtion-cyber-security-qtlny3y183lijbi2h9x3bg3lq7z8vuojrpknxgheme.jpg";
import FeatureSection from "../common/FeatureSection";

const CybersecuritySecuring = () => {
  const [openAccordion, setOpenAccordion] = useState("ai-driven-security");
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
      id: "secure-cloud-adoption",
      title: "Secure Cloud Adoption",
      content:
        "Migrate to the cloud with confidence, knowing that your data, applications, and infrastructure are protected by industry-leading security controls.",
    },
    {
      id: "iot-ecurity",
      title: "IoT Security",
      content:
        "Protect connected devices and their data from cyber threats with comprehensive IoT security solutions tailored to your specific environment.",
    },
    {
      id: "ai-driven-security",
      title: "AI-Driven Security",
      content:
        "Leverage AI to enhance your security posture, using machine learning to detect and respond to threats faster and more accurately.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Securing"
      animatedText={displayText}
      image={securingdigitaltrasformtion}
      imageAlt="securingdigitaltrasformtion"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "As businesses embrace digital transformation, the attack surface expands, making it more difficult to secure data and systems.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "ATI integrates robust cybersecurity measures into your digital transformation initiatives, ensuring that your journey to the cloud, IoT, AI, and other emerging technologies is secure. We help you build security into your digital infrastructure from the ground up, enabling innovation without compromising on protection.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="SECURE YOUR DIGITAL TRANSFORMATION WITH ATI"
    />
  );
};

export default CybersecuritySecuring;
