import React, { useState, useEffect } from "react";
import Trust_and_transparency from "../../../assets/images/our-expertise/blockchain_and_web3/Trust-and-transparency-qtlrcihf7f5qf9pbq6o40k4ikknz8wm79jwxqmzscm.jpg";
import FeatureSection from "../common/FeatureSection";

const BlockchainEnhancing = () => {
  const [openAccordion, setOpenAccordion] = useState("gamification");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Transparency & Trust";
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
      title: "Immutable Ledgers",
      content:
        "Store transactions on an immutable blockchain ledger, ensuring that data cannot be altered or tampered with.",
    },
    {
      id: "continuous-monitoring",
      title: "Real-Time Transparency",
      content:
        "Provide stakeholders with real-time access to data and transaction histories, fostering greater trust and collaboration.",
    },
    {
      id: "gamification",
      title: "Decentralized Trust",
      content:
        "Eliminate the need for central authorities by leveraging blockchain’s decentralized architecture to facilitate trust less transactions.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <FeatureSection
      title="Enhancing"
      animatedText={displayText}
      image={Trust_and_transparency}
      imageAlt="Trust_and_transparency"
      imageLeft={true}
      sections={[
        {
          heading: "CHALLENGE",
          text: "Traditional business processes often lack transparency, leading to inefficiencies, disputes, and a lack of trust among stakeholders.",
        },
        {
          heading: "ATI'S SOLUTION",
          text: "Our blockchain solutions enhance transparency and trust by providing immutable, transparent ledgers that record every transaction and interaction. Whether you’re managing supply chains, executing contracts, or facilitating cross-border payments, blockchain ensures that all parties have access to the same, unalterable data, reducing the potential for disputes and fraud.",
        },
      ]}
      accordionData={accordionData}
      openAccordion={openAccordion}
      toggleAccordion={toggleAccordion}
      buttonText="ENHANCE TRANSPARENCY AND TRUST WITH BLOCKCHAIN"
    />
  );
};

export default BlockchainEnhancing;
