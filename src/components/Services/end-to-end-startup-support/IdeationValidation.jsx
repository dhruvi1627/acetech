import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "./ServiceSection"; // Adjust path as needed
import Ideation_and_Validation from "../../../assets/images/services/end-to-end/Ideation-and-Validation.jpg";

export default function IdeationValidation() {
  const navigate = useNavigate();

  const features = [
    "Market Research and Analysis: We conduct in-depth market research to understand your target audience, identify opportunities, and assess the competitive landscape.",
    "Business Model Development: Our team helps you craft a sustainable business model that aligns with your vision and market realities.",
    "Prototyping and MVP Development: We guide you in creating a Minimum Viable Product (MVP) that addresses key customer needs and allows for early feedback and iteration.",
  ];

  return (
    <ServiceSection
      title="Ideation and Validation: Turning Ideas into Viable Ventures"
      image={Ideation_and_Validation}
      imageAlt="Talents Pair-to-Pair professionals with skills icons showing Human Resource Support, Development, Design, Management, Marketing, and Accounting"
      challengeTitle="challenge"
      challenge="Many startups struggle to move from a great idea to a validated business model. The journey from concept to market-ready product requires careful planning, research, and testing."
      solutionTitle="Solution"
      solution="Our Ideation and Validation services ensure that your startup is built on a strong foundation. We work closely with you to refine your idea, validate your market, and develop a solid business model."
      features={features}
      imagePosition="left"
      ctaMain="Why it works"
      ctaQuote="By validating your idea early, ATI helps you avoid costly missteps and ensures that your startup is on the right path from the start"
      ctaText="Validate your idea with ATI today"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
