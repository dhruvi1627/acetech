import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "./TalentServiceSection"; // Adjust path as needed
import Talents from "../../../assets/images/Talents/pairtopair/What-is-Talents-Pair-to-Pair-1.jpg";

export default function WhatIsPairToPair() {
  const navigate = useNavigate();

  const features = [
    "Skill Matching: We carefully match your project with experts who have the exact skills required, from software development and engineering to marketing and data analysis.",
    "Flexible Engagement: Our Pair-to-Pair service offers flexibility, allowing you to engage talent on a project basis, ensuring you get the right expertise when you need it.",
    "Agile Integration: We integrate paired talent into your existing team seamlessly, using agile methodologies to ensure quick adaptation and collaboration.",
  ];

  return (
    <TalentServiceSection
      title="What is Talents Pair-to-Pair?"
      image={Talents}
      imageAlt="pair-to-pair"
      problem="Finding specialized talent quickly can be a daunting task, especially when projects require unique skills that are not readily available within your current team."
      solution="ATI’s Talents Pair-to-Pair service is designed to solve this challenge by providing precise skill matching. We pair your project with highly skilled professionals who have the expertise needed to meet your specific goals, ensuring that your team is equipped to deliver outstanding results. "
      features={features}
      imagePosition="left"
      ctamain="why it works"
      ctaquote="By focusing on precise skill matching and agile integration, ATI ensures that your projects are supported by the right talent, enhancing efficiency and effectiveness."
      ctaText="FIND YOUR PERFECT PROJECT TALENT HERE"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
