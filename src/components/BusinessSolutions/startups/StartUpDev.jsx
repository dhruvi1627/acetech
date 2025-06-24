import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import startup from "../../../assets/images/BussinessSolutions/startup/Ethical-Sustainable-Tech-Development-1.jpg";

export default function StartUpDev() {
  const navigate = useNavigate();

  const features = [
    "Ethical AI Development: Build AI solutions that are transparent, fair, and free from bias, with expert guidance on ethical best practices.",
    "Sustainable Technology: Learn and implement green coding practices to reduce your environmental impact and create sustainable tech products.",
    "Impact Tracking: Use our tools to measure and report the social and environmental impact of your products, enhancing your brand’s reputation.",
  ];

  return (
    <TalentServiceSection
      title="Ethical & Sustainable Tech Development"
      image={startup}
      imageAlt="StartUp"
      problemtitle="problem"
      problem="In a fast-paced tech environment, it can be challenging to build products that are not only innovative but also ethical and sustainable."
      solutiontitle="solution"
      solution="Our Ethical & Sustainable Tech Development services ensure that your startup is at the forefront of responsible innovation. We help you integrate ethical considerations and sustainability into your product development process."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="We help you create technology that not only meets market needs but also aligns with ethical standards and sustainability goals, positioning your startup as a leader in responsible innovation."
      ctaText="LEAD THE WAY IN ETHICAL AND SUSTAINABLE TECHNOLOGY - START TODAY"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
