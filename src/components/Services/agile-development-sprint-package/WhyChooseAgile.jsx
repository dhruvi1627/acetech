import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../end-to-end-startup-support/ServiceSection";
import WhyChooseAti from "../../../assets/images/services/agile-development-sprint-package/Why-Choose-ATIs-Agile-Development-Sprint-Package-1024x1024.jpg";

export default function WhyChooseAgile() {
  const navigate = useNavigate();

  const ctaFeatures = [
    "Customer-Centric Development: We prioritize your needs and goals, delivering a product that not only meets but exceeds expectations.",
    "Lean and Agile Focus: Our lean and agile approach ensures that we deliver maximum value with minimal waste, optimizing both time and resources.",
  ];

  const features = [
    "Expertise in Agile Methodologies: Our team is deeply experienced in agile development, ensuring that each sprint is executed with precision and focus.",
    "Collaborative Partnership: We work closely with your team, maintaining open lines of communication and collaboration to ensure that your vision is realized.",
    "Proven Track Record: ATI has a history of successfully delivering products on time and within budget, thanks to our disciplined, agile approach.",
  ];

  return (
    <ServiceSection
      title="Why Choose ATI’s Agile Development Sprint Package?"
      image={WhyChooseAti}
      imageAlt="Why Choose ATI’s Agile Development Sprint Package?"
      challengeTitle="Problem"
      challenge="Many development teams struggle to maintain momentum, deliver on time, andmeet quality standards without a clear, structured process."
      solutionTitle="Ati's Solution"
      solution="At ATI, our Agile Development Sprint Package is designed to solve these common challenges. Here’s why our approach stands out:"
      features={features}
      imagePosition="right" // This will put the image on the right side
      ctaMain="Unique Value Proposition"
      ctaFeatures={ctaFeatures}
      ctaText="EXPERIENCE TAILORED SOLUTIONS TODAY!"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
