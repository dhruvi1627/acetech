import React from "react";

import { useNavigate } from "react-router-dom";
import ServiceSection from "./ServiceSection"; // Adjust path as needed
import ImprovementInnovationImage from "../../../assets/images/services/end-to-end/Continuous-Improvement-and-Innovation-840x839.jpg";

export default function ImprovementInnovation() {
  const navigate = useNavigate();

  const features = [
    "Product Iteration: We work with you to continuously improve your product based on customer feedback and market trends, ensuring ongoing relevance and value.",
    "Innovation Strategy: Our team helps you stay ahead of industry trends, identifying new opportunities for innovation and growth.",
    "Performance Optimization: We provide ongoing support to optimize your operations, marketing, and sales efforts, ensuring sustained growth and profitability.",
  ];

  return (
    <ServiceSection
      title="Continuous Improvement and Innovation: Staying Ahead of the Curve Challenge"
      image={ImprovementInnovationImage}
      imageAlt="Continuous Improvement and Innovation team collaborating on project"
      challengeTitle="challenge"
      challenge="In a rapidly evolving market, startups must continuously innovate and improve their offerings to stay competitive. Without ongoing support, many startups struggle to adapt and grow."
      solutionTitle="Solution"
      solution="Our Continuous Improvement and Innovation services ensure that your startup remains agile and innovative, ready to meet the challenges of tomorrow."
      features={features}
      imagePosition="right" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="ATI’s commitment to continuous improvement ensures that your startup remains competitive and capable of long-term success."
      ctaText="Unlock your startup's potential!"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
