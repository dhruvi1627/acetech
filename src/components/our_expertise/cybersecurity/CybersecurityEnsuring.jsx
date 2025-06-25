import React, { useState, useEffect } from "react";
import Ensuring_Compliance_Reducing from "../../../assets/images/our-expertise/cybersecurity/Ensuring-Compliance-Reducing-Risk-cyber-qtlo8rg6oi6i48109vovkrbo3fh04cz18fqrqcos3q.jpg";
import FeatureSection from "../common/FeatureSection";

const CybersecurityEnsuring = () => {
  const [openAccordion, setOpenAccordion] = useState("incident-preparedness");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Compliance & Reducing Risk";
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
      id: "regulatory-compliance",
      title: "Regulatory Compliance",
      content:
        "Stay compliant with GDPR, HIPAA, PCI-DSS, and other regulations through tailored security solutions and ongoing support.",
    },
    {
      id: "risk-assessments",
      title: "Risk Assessments",
      content:
        "Identify and mitigate vulnerabilities in your systems with comprehensive risk assessments and security audits.",
    },
    {
      id: "incident-preparedness",
      title: "Incident Preparedness",
      content:
        "Be prepared for potential cyber incidents with detailed incident response plans and regular drills to ensure your team is ready to act.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Ensuring"
      animatedText={displayText}
      image={Ensuring_Compliance_Reducing}
      imageAlt="Ensuring_Compliance_Reducing"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Regulatory compliance is essential for avoiding fines, maintaining customer trust, and protecting your business from legal repercussions.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our compliance and risk management services ensure that your cybersecurity strategy aligns with industry regulations and standards. We help you implement the necessary controls, conduct regular audits, and manage risks effectively, so you can focus on growing your business with peace of mind.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ENSURE COMPLIANCE AND PROTECT YOUR BUSINESS"
    />
  );
};

export default CybersecurityEnsuring;
