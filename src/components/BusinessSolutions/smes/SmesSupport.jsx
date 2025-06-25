import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import smes from "../../../assets/images/BussinessSolutions/smes/IT-Support-Management.jpg";

export default function SmesSupport() {
  const navigate = useNavigate();

  const features = [
    "24/7 IT Support: Access round-the-clock technical support to resolve issues quickly and minimize downtime.",
    "Managed Services: Benefit from proactive management of your IT systems, including regular maintenance, updates, and performance optimization.",
    "Help Desk Services: Provide your employees with reliable help desk support to address everyday technical issues and improve productivity.",
  ];

  return (
    <TalentServiceSection
      title="IT Support & Management"
      image={smes}
      imageAlt="smes"
      problemtitle="problem"
      problem="Managing IT operations effectively can be challenging for SMEs, often leading to inefficiencies and increased operational costs."
      solutiontitle="solution"
      solution="Our IT Support & Management services are designed to streamline your IT operations, providing ongoing support and management to ensure everything runs smoothly and efficiently."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="By outsourcing your IT support and management, you can focus on your core business activities while ensuring your technology runs seamlessly."
      ctaText="OPTIMIZE YOUR IT OPERATIONS WITH OUR IT SUPPORT & MANAGEMENT SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
