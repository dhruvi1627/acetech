import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../pairtopair/TalentServiceSection"; // Adjust path as needed
import Team from "../../../assets/images/Talents/taskforce/3.jpg";

export default function BenefitsTaskForce() {
  const navigate = useNavigate();   

  const features = [
    "Speed and Efficiency: Our task force is deployed quickly, minimizing downtime and ensuring that your critical projects get the immediate attention they require.",
    "Specialized Expertise: Each task force is composed of professionals with the specific skills needed for your project, ensuring that the work is handled by experts.",
    "Flexibility and Scalability: The task force can be scaled up or down based on the evolving needs of your project, providing a flexible solution that adapts to your business.",
    "Cost-Effective: By assembling a task force only when needed, you avoid the costs."
  ];

  return (
    <TalentServiceSection
      title="Benefits of ATI’s Talents Task Force Service"
      image={Team}
      imageAlt="Task Force"
      problem="Critical projects often require immediate attention, specialized skills, and the ability to deliver results under pressure—all while maintaining ongoing business operations."
      solution="The Talents Task Force service from ATI offers several key benefits that address these challenges, providing your business with a powerful, flexible solution."
      features={features}
      imagePosition="left"
      ctamain="why it works"
      ctaquote="ATI’s Talents Task Force provides your business with the rapid, expert support needed to address urgent challenges without disrupting your ongoing operations, ensuring
      that critical projects are handled with the care and expertise they deserve."
      ctaText="SECURE RAPID EXPERT SUPPORT NOW"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
