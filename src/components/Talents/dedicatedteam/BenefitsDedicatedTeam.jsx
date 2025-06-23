import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../pairtopair/TalentServiceSection"; // Adjust path as needed
import Team from "../../../assets/images/Talents/dedicatedteam/3-ded-team-people-a.jpg";

export default function BenefitsDedicatedTeam() {
  const navigate = useNavigate();   

  const features = [
    "Consistency and Focus: With a dedicated team working exclusively on your projects, you benefit from consistent progress, high-quality output, and a deep commitment to your goals.",
    "Scalability: Easily scale your dedicated team up or down based on project demands, ensuring that your resources align with your business needs without the overhead of traditional hiring.",
    "Enhanced Collaboration: A dedicated team operates as an in-house unit, fostering close collaboration, quick decision-making, and strong alignment with your business objectives.",
    "Cost Efficiency: By outsourcing a dedicated team through ATI, you avoid the costs and complexities of recruiting, training, and retaining full-time employees while still gaining the benefits of an in-house team.",
  ];

  return (
    <TalentServiceSection
      title="Benefits of ATI’s Talents Dedicated Team Service"
      image={Team}
      imageAlt="Dedicated Team"
      problem="Relying on temporary or scattered resources can lead to inconsistencies, delays, and challenges in maintaining project momentum."
      solution="The Talents Dedicated Team service from ATI offers several key benefits that address these challenges, providing your business with a reliable and focused resource."
      features={features}
      imagePosition="left"
      ctamain="why it works"
      ctaquote="ATI’s dedicated team model provides the consistency, expertise, and focus needed to drive your projects forward, ensuring that you achieve your business objectives efficiently and effectively."
      ctaText="DRIVE YOUR PROJECTS WITH CONSISTENT EXPERTISE"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
