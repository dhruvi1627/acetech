import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import smes from "../../../assets/images/BussinessSolutions/smes/Digital-Transformation.jpg";

export default function SmesDigital() {
  const navigate = useNavigate();

  const features = [
    "Technology Upgrades: Implement the latest technologies and tools to enhance your business processes and stay competitive",
    "Process Automation: Automate routine tasks to increase efficiency and reduce operational costs.",
    "Data Analytics: Utilize data-driven insights to make informed decisions and optimize your business strategies.",
  ];

  return (
    <TalentServiceSection
      title="Digital Transformation"
      image={smes}
      imageAlt="smes"
      problemtitle="problem"
      problem="Keeping up with digital trends and modernizing your business processes can be overwhelming, especially for SMEs with limited resources."
      solutiontitle="solution"
      solution="Our Digital Transformation services help you modernize your operations and leverage digital technologies to drive growth and improve efficiency."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="Digital transformation services help you stay ahead of the curve, making your business more agile, efficient, and competitive."
      ctaText="TRANSFORM YOUR BUSINESS WITH OUR DIGITAL TRANSFORMATION SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
