import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import investors from "../../../assets/images/BussinessSolutions/inventors/Supporting-Startup-Growth.jpg";

export default function InvestorsStartup() {
  const navigate = useNavigate();

  const features = [
    "Growth Strategies: Develop and implement agile growth strategies, including market expansion and revenue generation plans.",
    "Operational Efficiency: Enhance operational efficiency by applying lean principles to reduce costs and streamline processes.",
    "Scalability Solutions: Provide resources and guidance to support scalable growth, including process automation and technology upgrades.",
  ];

  return (
    <TalentServiceSection
      title="Supporting Startup Growth"
      image={investors}
      imageAlt="investors"
      problemtitle="problem"
      problem="Ensuring that startups achieve sustainable growth requires continuous support and strategic guidance, which can be challenging for investors and partners."
      solutiontitle="solution"
      solution="Our Supporting Startup Growth services apply agile and lean strategies to help startups scale effectively and achieve long-term success. We provide the resources and support necessary to drive growth and improve performance."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="Our agile and lean methods ensure that startups can scale efficiently and achieve their growth objectives, benefiting both investors and partners."
      ctaText="DRIVE LONG-TERM SUCCESS FOR STARTUPS WITH OUR AGILE AND LEAN SUPPORTING STARTUP GROWTH SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
