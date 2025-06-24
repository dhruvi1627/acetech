import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import startup from "../../../assets/images/BussinessSolutions/startup/square-partnership.jpg";

export default function StartUpLaunch() {
  const navigate = useNavigate();

  const features = [
    "Industry Partnerships: Collaborate with established tech companies for co-development, technology integration, and access to new markets. ",
    "Funding Access: Tap into our network of venture capitalists and angel investors, with guidance on crafting compelling pitches and securing funding.",
    "Growth Hacking: Implement data-driven marketing and growth strategies to rapidly expand your user base and increase revenue.",
  ];

  return (
    <TalentServiceSection
      title="Strategic Partnerships & Growth Acceleration"
      image={startup}
      imageAlt="StartUp"
      problemtitle="problem"
      problem="Startups often lack the industry connections and strategic guidance needed to scale quickly and secure funding."
      solutiontitle="solution"
      solution="Our Strategic Partnerships & Growth Acceleration services connect you with key industry players, potential partners, and investors. We help you build relationships that drive growth and provide expert advice to accelerate your success."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="By leveraging our network and expertise, you gain the strategic partnerships and funding necessary to scale your business efficiently."
      ctaText="ACCELERATE YOUR STARTUP'S GROWTH WITH STRATEGIC PARTNERSHIP'S - LET'S CONNECT"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
