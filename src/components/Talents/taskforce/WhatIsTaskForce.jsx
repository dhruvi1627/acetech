import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../pairtopair/TalentServiceSection"; // Adjust path as needed
import Team from "../../../assets/images/Talents/taskforce/1.jpg";

export default function WhatIsTaskForce() {
  const navigate = useNavigate();   

  const features = [
    "Rapid Deployment:We quickly assemble and deploy a specialized team tailored to your project’s specific requirements, ensuring minimal downtime and immediate action.",
    "High-Impact Expertise: Our task force comprises experts with deep experience in their respective fields, capable of delivering high-quality results under tight deadlines.",
    "Agile Execution: The task force operates using agile methodologies, allowing for quick adaptation, iterative progress, and continuous improvement throughout the project.",
  ];

  return (
    <TalentServiceSection
      title="What is the Talents Task Force Service?"
      image={Team}
      imageAlt="Task Force"
      problem="Urgent projects or sudden challenges require immediate attention, but assembling the right team quickly can be difficult and disruptive to ongoing operations."
      solution="ATI’s Talents Task Force service offers a rapid-response team of skilled professionals who are deployed to address your most critical needs. Whether it’s a timesensitive project, an unexpected crisis, or an urgent business opportunity, our task force is ready to deliver results."
      features={features}
      imagePosition="left"
      ctamain="why it works"
      ctaquote="With ATI’s Talents Task Force, you get a dedicated, high-performing team that’s ready to take on your most urgent challenges, delivering solutions with speed and precision."
      ctaText="UNLOCK EXPERT SOLUTIONS NOW"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
