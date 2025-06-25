import React, { useState, useEffect } from "react";
import Control_and_privacy from "../../../assets/images/our-expertise/blockchain_and_web3/Privacy-qtlrdsjiiaws85uf98ktwqi3ogcyq2p1rvvq973hvq.jpg";
import FeatureSection from "../common/FeatureSection";

const BlockchainEmpowering = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = "User Control & Privacy";
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
      title: "Decentralized Identity (DID)",
      content:
        "Implement decentralized identity solutions that allow users to own and manage their digital identities across platforms.",
    },
    {
      id: "continuous-monitoring",
      title: "Data Ownership",
      content:
        "Build platforms that enable users to control their own data, deciding who can access it and how it’s used.",
    },
    {
      id: "gamification",
      title: "Enhanced Privacy",
      content:
        "Leverage blockchain’s privacy-preserving features to protect user data and ensure compliance with global privacy regulations.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Empowering"
      animatedText={displayText}
      image={Control_and_privacy}
      imageAlt="Control_and_privacy"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "In the traditional web, users often lack control over their data, which is stored and monetized by centralized platforms.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "ATI’s Web 3.0 solutions empower users by giving them greater control over their data and digital identities. We help businesses build decentralized platforms that prioritize user privacy, data security, and self-sovereign identity, enabling a more equitable and user-centric internet.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="EMPOWER USER CONTROL WITH WEB 3.0 SOLUTIONS"
    />
  );
};

export default BlockchainEmpowering;
