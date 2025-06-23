import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../pairtopair/TalentServiceSection"; // Adjust path as needed
import Team from "../../../assets/images/Talents/dedicatedteam/1-ded-tem.png";

export default function WhatIsDedicatedTeam() {
  const navigate = useNavigate();   

  const features = [
    "Exclusive Focus: Your dedicated team works solely on your projects, ensuring undivided attention and commitment.",
    "Seamless Integration: We align the dedicated team with your company’s processes, goals, and culture, creating a cohesive unit that operates as part of your organization.",
    "Ongoing Collaboration: Through continuous collaboration, we ensure that the team stays aligned with your evolving needs, adapting to changes quickly and efficiently.",
  ];

  return (
    <TalentServiceSection
      title="What is the Talents Dedicated Team Service?"
      image={Team}
      imageAlt="Dedicated Team"
      problem="Managing multiple projects and initiatives can be challenging, especially when resources are stretched thin or specific expertise is needed."
      solution="ATI’s Talents Dedicated Team service is designed to provide you with a specialized, in-house team that works exclusively on your projects. This dedicated team becomes an extension of your company, fully integrating into your processes and culture while maintaining focus on delivering high-quality outcomes."
      features={features}
      imagePosition="left"
      ctamain="why it works"
      ctaquote="By providing a dedicated team that is fully committed to your projects, ATI ensures consistent progress, high-quality outcomes, and a deep understanding of your business needs."
      ctaText="SECURE YOUR DEDICATED PROJECT TEAM TODAY"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
