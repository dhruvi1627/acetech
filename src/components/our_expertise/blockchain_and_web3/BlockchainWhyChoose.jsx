import React from "react";
import { useNavigate } from "react-router-dom";
import WhyChooseSection from "../common/WhyChooseSection";
import Why_Choose_ATI_for_blockchain from "../../../assets/images/our-expertise/blockchain_and_web3/standard-quality-control-collage-concept-1-qtlref3n2brnysxnlibvkkt5xp9rut6luzjdru61qe.jpg";

const BlockchainWhyChoose = () => {
  const navigate = useNavigate();
  const accordionData = [
    {
      id: "historic-approch",
      title: "Deep Technical Expertise",
      content:
        "Our team of blockchain and Web 3.0 experts has extensive experience in developing decentralized applications, smart contracts, and blockchain infrastructures across various industries.",
    },
    {
      id: "expert-team",
      title: "Custom Solutions",
      content:
        "We tailor our blockchain and Web 3.0 solutions to meet your specific business needs, ensuring that you achieve your goals while maximizing the benefits of decentralization.",
    },
    {
      id: "cutting-edge-tech",
      title: "Security-First Approach",
      content:
        "We prioritize security in every blockchain project, conducting thorough audits and implementing best practices to protect your assets and data.",
    },
    {
      id: "proven-success",
      title: "Proven Track Record",
      content:
        "ATI has successfully delivered blockchain and Web 3.0 solutions that drive innovation, enhance transparency, and empower users across multiple sectors",
    },
  ];

  return (
    <WhyChooseSection
      title="Why Choose ATI"
      animatedText="for Blockchain & Web 3.0 Solutions?"
      challengeTitle="CHALLENGE"
      challengeContent="Navigating the complexities of blockchain and Web 3.0 technologies requires specialized expertise and a deep understanding of decentralized systems."
      solutionTitle="ATI'S SOLUTION"
      solutionContent="ATI’s Blockchain & Web 3.0 Solutions provide you with the knowledge, tools, and strategic insights needed to successfully leverage these transformative technologies."
      accordionData={accordionData}
      image={Why_Choose_ATI_for_blockchain}
      imageAlt="Why_Choose_ATI_for_blockchain"
      buttonText="CONTACT US"
      buttonAction={() => navigate("/contact-us")}
      backgroundColor="#620e6e"
      buttonHoverColor="#e156e6"
    />
  );
};

export default BlockchainWhyChoose;
