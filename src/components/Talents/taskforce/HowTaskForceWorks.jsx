import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../pairtopair/TalentServiceSection"; // Adjust path as needed
import Team from "../../../assets/images/Talents/taskforce/2.jpg";

export default function WhatIsTaskForce() {
  const navigate = useNavigate();   

  const features = [
    "Immediate Needs Assessment: We begin with a rapid assessment of your project’s requirements, identifying the skills and expertise needed to achieve your objectives.",
    "Task Force Assembly: Based on the assessment, we assemble a custom team of experts from our talent pool, ensuring that all necessary skills are covered.",
    "Agile Project Management: The task force operates under agile project management principles, allowing for flexible, iterative progress and the ability to adapt to changing project demands.",
  ];

  return (
    <TalentServiceSection
      title="What is the Talents Task Force Service?"
      image={Team}
      imageAlt="Task Force"
      problem="When faced with critical projects, businesses often struggle to mobilize the right resources quickly, leading to delays, suboptimal results, or missed opportunities."
      solution="Our Talents Task Force service is structured to ensure that your urgent projects are handled by the right experts, with a focus on swift execution and high-impact results."
      features={features}
      imagePosition="right"
      ctamain="why it works"
      ctaquote="ATI’s structured approach ensures that your task force is not only assembled quickly but also managed efficiently, ensuring that your project is completed on time and to the highest standards."
      ctaText="GET YOUR TASK FORCE TODAY"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
