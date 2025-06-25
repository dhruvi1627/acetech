import React from "react";
import { useNavigate } from "react-router-dom";
import WhyChooseSection from "../common/WhyChooseSection";
import Why_Choose_ATI_for_Cybersecurity from "../../../assets/images/our-expertise/cybersecurity/Why-Choose-ATI-for-Cybersecurity-qtlokeo7cm4dyb429wwhgtj91a2phd7bi2pbrrf70m.jpg";

const CybersecurityWhyChoose = () => {
  const navigate = useNavigate();
  const accordionData = [
    {
      id: "historic-approch",
      title: "Comprehensive Security Solutions",
      content:
        "From threat detection and endpoint security to compliance management and incident response, ATI covers every aspect of cybersecurity.",
    },
    {
      id: "expert-team",
      title: "Expert Team",
      content:
        "Our team of cybersecurity professionals has extensive experience across various industries, ensuring that we deliver solutions tailored to your specific needs.",
    },
    {
      id: "cutting-edge-tech",
      title: "Cutting-Edge Technology",
      content:
        "We utilize the latest tools and technologies in cybersecurity to protect your business against both known and emerging threats.",
    },
    {
      id: "agile-meth",
      title: "Agile & Lean Methodologies",
      content:
        "We apply agile and lean principles to ensure that your digital transformation is efficient, flexible, and focused on delivering maximum value.",
    },
    {
      id: "proven-success",
      title: "Proven Success",
      content:
        "ATI has a proven track record of securing businesses of all sizes against cyber threats, helping them avoid breaches, minimize risks, and maintain trust with their customers.",
    },
  ];

  return (
    <WhyChooseSection
      title="Why Choose ATI"
      animatedText="for Cybersecurity???"
      challengeTitle="CHALLENGE"
      challengeContent="Protecting your business from ever-evolving cyber threats requires a comprehensive, expertly managed approach to security."
      solutionTitle="ATI'S SOLUTION"
      solutionContent="ATI’s Cybersecurity Services are designed to provide end-to-end protection for your digital assets, ensuring that your business remains secure in a constantly changing threat landscape."
      accordionData={accordionData}
      image={Why_Choose_ATI_for_Cybersecurity}
      imageAlt="Why_Choose_ATI_for_Cybersecurity"
      buttonText="CONTACT US"
      buttonAction={() => navigate("/contact-us")}
      backgroundColor="#620e6e"
      buttonHoverColor="#e156e6"
    />
  );
};

export default CybersecurityWhyChoose;
