import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import smes from "../../../assets/images/BussinessSolutions/smes/Custom-Tech-Solutions.jpg";

export default function SmesCustomTech() {
  const navigate = useNavigate();

  const features = [
    "Custom Software Development: Develop bespoke software solutions that address your specific business processes and requirements.",
    "Integration Services: Integrate disparate systems and technologies to streamline operations and improve data flow.",
    "Tech Consulting: Receive expert advice on technology strategy, digital transformation, and tech stack optimization.",
  ];

  return (
    <TalentServiceSection
      title="Custom Tech Solutions"
      image={smes}
      imageAlt="smes"
      problemtitle="problem"
      problem="Off-the-shelf tech solutions may not meet the specific needs of your SME, leading to inefficiencies and unmet requirements."
      solutiontitle="solution"
      solution="Our Custom Tech Solutions are designed to address your unique business needs with tailored technology solutions that enhance efficiency and performance."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="Our custom solutions are designed to fit your business perfectly, ensuring that technology works for you, not against you."
      ctaText="GET TAILORED TECH SOLUTIONS THAT FIT YOUR SME'S UNIQUE NEEDS"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
