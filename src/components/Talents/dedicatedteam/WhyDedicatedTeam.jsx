import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../pairtopair/TalentServiceSection"; // Adjust path as needed
import Team from "../../../assets/images/Talents/dedicatedteam/3-ded-team-people-a.jpg";

export default function WhyDedicatedTeam() {
  const navigate = useNavigate();   

  const features = [
    "Expertise in Team Building:ATI has extensive experience in assembling and managing dedicated teams that deliver high-quality results across various industries.",
    "Scalability: Easily scale your dedicated team up or down based on project demands, ensuring that your resources align with your business needs without the overhead of traditional hiring.",
    "Agile and Lean Approach: Our teams operate with agility and lean efficiency, ensuring that your projects are completed on time, within budget, and to the highest standards.",
    "Proven Track Record: ATI’s dedicated teams have successfully driven numerous projects to completion, helping businesses like yours achieve their goals and maintain a competitive edge.",
  ];

  const ctaFeatures = [
    "Tailored Talent Solutions: We customize the composition and expertise of your dedicated team to match your specific project needs, ensuring that you have the right skills at the right time.",
        "End-to-End Management: From team formation to project completion, ATI provides full management and support, ensuring that your dedicated team delivers exceptional value and results.",
  ];

  return (
    <TalentServiceSection
      title="Why Choose ATI’s Talents Dedicated Team Service?"
      image={Team}
      imageAlt="Dedicated Team"
      problem="Many businesses struggle with finding the right balance between managing their internal resources and meeting the demands of complex, ongoing projects."
      solution="ATI’s Talents Dedicated Team service is the perfect solution for businesses needing a specialized, in-house team without the long-term commitment of traditional hiring."
      features={features}
      imagePosition="right"
      ctamain="Unique Value Proposition"
      ctaFeatures={ctaFeatures}
      ctaText="CUSTOMIZE AND MANAGE YOUR TEAM EFFORTLENSSLY"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
