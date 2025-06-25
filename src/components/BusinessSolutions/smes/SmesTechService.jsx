import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import smes from "../../../assets/images/BussinessSolutions/smes/roburst-tech.jpg";

export default function SmesTechService() {
  const navigate = useNavigate();

  const features = [
    "Cloud Solutions: Implement scalable cloud services (AWS, Google Cloud, Azure) with cost-effective options tailored to SMEs.",
    "Tech Infrastructure Setup: Build a solid IT foundation with our assistance in setting up servers, networking, and enterprise software.",
    "Cyber-security: Protect your business from cyber threats with advanced security measures, including threat detection, data encryption, and compliance support.",
  ];

  return (
    <TalentServiceSection
      title="Advanced Tech Services"
      image={smes}
      imageAlt="smes"
      problemtitle="problem"
      problem="SMEs often face challenges in setting up and maintaining scalable and secure technology infrastructure, which can impede growth and efficiency."
      solutiontitle="solution"
      solution="Our Advanced Tech Services offer the technological expertise and support you need to build and maintain a robust IT infrastructure. From cloud solutions to cyber-security, we provide comprehensive services to keep your operations running smoothly."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="Our tech services ensure that your IT infrastructure supports your business goals, providing reliability and security while enabling growth."
      ctaText="STRENGTHEN YOUR TECHNOLOGICAL FOUNDATION WITH OUR ADVANCED TECH SERVICES."
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
