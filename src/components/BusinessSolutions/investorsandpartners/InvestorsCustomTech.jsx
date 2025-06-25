import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import investors from "../../../assets/images/BussinessSolutions/inventors/Maximize-Your-Investment-with-Agile-Talent-and-Advanced-Tech-Solutions.jpg";

export default function InvestorsCustomTech() {
  const navigate = useNavigate();

  const features = [
    "Bespoke Software Development:  Develop custom software solutions using lean methodologies to address startup-specific needs and challenges.",
    "System Integration:  Integrate various technologies and systems to improve efficiency and data flow within startups.",
    "Tech Consulting:  Provide expert consulting on technology strategy and optimization, applying lean principles to align with startup objectives.",
  ];

  return (
    <TalentServiceSection
      title="Custom Tech Solutions"
      image={investors}
      imageAlt="investors"
      problemtitle="problem"
      problem="Generic tech solutions may not address the unique challenges and requirements of startups, leading to inefficiencies and missed opportunities."
      solutiontitle="solution"
      solution="Our Custom Tech Solutions use lean startup methods to deliver tailored technology solutions that meet the specific needs of each startup. We ensure that technology supports their unique business processes and goals."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="Our lean approach ensures that startups receive technology solutions that are precisely tailored to their needs, enhancing their operational efficiency and growth potential."
      ctaText="GET CUSTOMIZED TECH SOLUTIONS THAT FIT YOUR STARTUP'S UNIQUE NEEDS WITH OUR CUSTOM TECH SOLUTIONS SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
