import React, { useState, useEffect } from "react";
import FInancial_service from "../../../assets/images/our-expertise/blockchain_and_web3/FInancial-service-qtlrd8swis5rgcn3gi1nydhf7d298fiop66j6dwrie.jpg";
import FeatureSection from "../common/FeatureSection";

const BlockchainRevolutionizing = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Financial Services";
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
      title: "Decentralized Finance (DeFi)",
      content:
        "Build and deploy DeFi platforms that offer lending, borrowing, and trading services without the need for traditional banks.",
    },
    {
      id: "continuous-monitoring",
      title: "Tokenization",
      content:
        "Create and manage digital assets on the blockchain, enabling fractional ownership and liquidity for traditionally illiquid assets.",
    },
    {
      id: "gamification",
      title: "Cross-Border Payments",
      content:
        "Facilitate instant, low-cost cross-border payments with blockchain technology, eliminating the need for intermediaries and reducing transaction fees.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Revolutionizing"
      animatedText={displayText}
      image={FInancial_service}
      imageAlt="FInancial_service"
      imageLeft={false}
      sections={[
        {
          heading: "CHALLENGE",
          text: "The traditional financial system is often slow, costly, and inaccessible to many, limiting the potential for innovation and inclusion.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "ATI’s blockchain and Web 3.0 solutions are revolutionizing financial services through decentralized finance (DeFi) platforms, peer-to-peer lending, and digital asset management. By removing intermediaries and leveraging smart contracts, we enable faster, more efficient, and more inclusive financial transactions.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="REVOLUTIONIZE FINANCE WITH BLOCKCHAIN SOLUTIONS NOW"
    />
  );
};

export default BlockchainRevolutionizing;
