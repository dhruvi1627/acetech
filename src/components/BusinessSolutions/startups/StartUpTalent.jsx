import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import startup from "../../../assets/images/BussinessSolutions/startup/square-Team-of-talented-individual.jpg";

export default function StartUpTalent() {
  const navigate = useNavigate();

  const features = [
    "Expert Recruitment: We find and vet candidates with the precise skills you need, from AI and machine learning to blockchain and cloud computing.",
    "Remote Team Setup: Seamlessly build and manage remote teams with our support, ensuring your startup runs smoothly no matter where your team is located.",
    "Scalable Talent Solutions: Easily scale your team up or down as your startup grows, with flexible hiring options that fit your changing needs.",
  ];

  return (
    <TalentServiceSection
      title="Premium Talent Services"
      image={startup}
      imageAlt="StartUp"
      problemtitle="problem"
      problem="Finding skilled tech professionals who are the right fit for your startup can be daunting, especially when you need specific expertise."
      solutiontitle="solution"
      solution="Our Premium Talent Services connect you with top-tier tech talent, whether you need full-time hires, part-time consultants, or remote teams. We specialize in matching startups with developers, engineers, and designers who understand your vision and can help you execute it."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="By providing access to the right talent at the right time, we help you avoid the pitfalls of poor hiring decisions and keep your development on track."
      ctaText="FIND THE PERFECT TECH TALENT TO POWER YOUR STARTUP'S GROWTH TODAY"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
