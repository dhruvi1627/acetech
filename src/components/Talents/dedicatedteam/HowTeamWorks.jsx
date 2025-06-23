import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../pairtopair/TalentServiceSection"; // Adjust path as needed
import Team from "../../../assets/images/Talents/dedicatedteam/2-ded-team-people.jpg";

export default function HowTeamWorks() {
  const navigate = useNavigate();   

  const features = [
    "Team Formation: We carefully select and assemble a dedicated team that matches your project requirements, ensuring that you have the right mix of skills and expertise.",
    "Agile Methodology: The dedicated team operates using agile methodologies, allowing for flexibility, iterative development, and rapid response to changing project needs.",
    "Continuous Integration: Your dedicated team integrates with your internal processes, using tools and communication channels that ensure seamless collaboration and transparency.",
  ];

  return (
    <TalentServiceSection
      title="How ATI’s Talents Dedicated Team Works"
      image={Team}
      imageAlt="Dedicated Team"
      problem="Scaling your internal team or acquiring specialized talent for ongoing projects can be time-consuming, costly, and difficult to manage."
      solution="Our Talents Dedicated Team service streamlines the process of building and managing a specialized team that operates within your company, without the complexities of traditional hiring."
      features={features}
      imagePosition="right"
      ctamain="why it works"
      ctaquote="Our approach to building and managing dedicated teams ensures that your projects benefit from consistent expertise, clear communication, and a streamlined workflow that drives success."
      ctaText="BUILD YOUR SUCCESS-DRIVEN TEAM TODAY"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
