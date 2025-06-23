import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "./ServiceSection"; // Adjust path as needed
import GrowthandScaling from "../../../assets/images/services/end-to-end/Growth-and-Scaling.jpg";

export default function GrowthScaling() {
  const navigate = useNavigate();

  const features = [
    "Operational Scaling: We help you optimize your operations for growth, including process automation, resource management, and infrastructure scaling.",
    "Customer Acquisition and Retention: Our team develops and implements strategies to attract new customers and retain existing ones, driving sustainable growth.",
    "Market Expansion: We assist you in identifying and entering new markets, providing the research, strategy, and support needed to succeed internationally.",
  ];

  return (
    <ServiceSection
      title="Growth and Scaling: Expanding Your Reach"
      image={GrowthandScaling}
      imageAlt="Growth and scaling team collaborating on project"
      challengeTitle="challenge"
      challenge="Scaling a startup requires strategic planning and efficient execution. Many startups struggle to manage rapid growth, optimize operations, and expand into new markets."
      solutionTitle="Solution"
      solution="Our Growth and Scaling services support your startup as it transitions from a small venture to a thriving business. We provide the expertise needed to scale operations, expand your customer base, and enter new markets."
      features={features}
      imagePosition="left" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="With ATI’s growth-focused support, your startup can scale efficiently, avoiding common pitfalls and maximizing its potential."
      ctaText="Unlock your startup's potential with ati's support"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
