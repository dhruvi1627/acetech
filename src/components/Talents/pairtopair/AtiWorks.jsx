import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "./TalentServiceSection"; // Adjust path as needed
import Ideation_and_Validation from "../../../assets/images/Talents/pairtopair/How-ATIs-Talents-Pair-to-Pair-Works.jpg";

export default function AtiWorks() {
  const navigate = useNavigate();

  const features = [
    "Project Analysis: We start by understanding your project’s specific needs, and identifying the skills and experience required for success.",
    "Talent Pool Selection: Using our extensive network of professionals, we select the best candidates who match your project’s requirements.",
    "Seamless Onboarding: The selected talent is integrated into your project team with minimal disruption, using agile methods to ensure a smooth onboarding process and immediate productivity.",
  ];

  return (
    <TalentServiceSection
      title="How ATI’s Talents Pair-to-Pair Works"
      image={Ideation_and_Validation}
      imageAlt="pair-to-pair"
      problem="Traditional hiring processes can be slow, costly, and often result in mismatches between the talent acquired and the project needs."
      solution=" Our Talents Pair-to-Pair service streamlines the process of acquiring specialized talent, ensuring that you get the right professionals quickly and efficiently."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="Our process is designed to reduce the time and cost associated with traditional hiring while ensuring that the talent you receive is perfectly aligned with your project’s needs."
      ctaText="STREAMLINE HIRING AND SAVE TIME NOW"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
