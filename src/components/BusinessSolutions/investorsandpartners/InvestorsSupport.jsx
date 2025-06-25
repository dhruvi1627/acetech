import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import investors from "../../../assets/images/BussinessSolutions/inventors/IT-Support-and-Management.jpg";

export default function InvestorsSupport() {
  const navigate = useNavigate();

  const features = [
    "24/7 IT Support: Offer continuous technical support to address issues promptly and minimize downtime.",
    "Proactive IT Management: Utilize agile practices to manage IT systems proactively, including regular maintenance and performance optimization.",
    "Help Desk Solutions:  Implement efficient help desk services to resolve everyday technical issues and enhance productivity.",
  ];

  return (
    <TalentServiceSection
      title="IT Support and Management"
      image={investors}
      imageAlt="investors"
      problemtitle="problem"
      problem="Managing IT operations effectively can be challenging for startups, leading to inefficiencies and increased costs that impact overall performance."
      solutiontitle="solution"
      solution="Our IT Support and Management services use agile methods to streamline IT operations for startups, providing ongoing support and management to improve efficiency and reduce costs."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="Agile IT management helps startups maintain smooth operations and focus on growth by resolving issues quickly and efficiently."
      ctaText="OPTIMIZE YOUR STARTUP'S IT OPERATIONS WITH OUR IT SUPPORT AND MANAGEMENT SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
