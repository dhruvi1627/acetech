import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "./TalentServiceSection"; // Adjust path as needed
import Ati from "../../../assets/images/Talents/pairtopair/Why-Choose-ATIs-Talents-Pair-to-Pair-Service.jpg";

export default function WhyAti() {
  const navigate = useNavigate();

  const features = [
    "Expertise in Skill Matching: Our deep understanding of various industries and technologies allows us to match your project with the best possible talent.",
    "Agile and Lean Approach:  We employ agile and lean methodologies to ensure that talent integration is quick, efficient, and aligned with your project goals.",
    "Proven Success: ATI has a track record of successfully pairing businesses with the right professionals, leading to enhanced project outcomes and business growth.",
  ];

  return (
    <TalentServiceSection
      title="Why Choose ATI’s Talents Pair-to-Pair Service?"
      image={Ati}
      imageAlt="pair-to-pair"
      problem="Finding and integrating specialized talent into your project can be challenging, time-consuming, and often results in less-than-ideal outcomes."
      solution="ATI’s Talents Pair-to-Pair service is designed to overcome these challenges, providing a streamlined, efficient way to acquire and integrate top talent into your projects. "
      features={features}
      imagePosition="right"
      ctamain="Unique Value Proposition"
      ctaquote={[
        "Tailored Talent Solutions: We provide talent that is not only skilled but also fits your company culture and project requirements, ensuring a seamless working relationship.",
        "End-to-End Support: From initial consultation to project completion, ATI is with you every step of the way, ensuring that the talent we pair with your team delivers exceptional results."
      ]}
      ctaText="ENHANCE YOUR PROJECT WITH EXPERT TALENT"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
