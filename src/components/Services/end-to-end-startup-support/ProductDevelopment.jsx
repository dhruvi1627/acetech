import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "./ServiceSection"; // Adjust path as needed
import ProductDevelopmentImage from "../../../assets/images/services/end-to-end/Product-Development-and-Launch.jpg";

export default function ProductDevelopment() {
  const navigate = useNavigate();

  const features = [
    "Client Relations: Implement lean and comprehensive solutions to help bridge social contact while enhancing communications.",
    "Technical Development: Our team of expert developers and designers create technical solutions that create scalable products fit for your demands.",
    "Go-To-Market Strategy: We help you plan a comprehensive go-to-market plan, including forecasting, marketing, and sales strategies associated with your target audience.",
  ];

  return (
    <ServiceSection
      title="Product Development and Launch: Bringing Your Vision to Life"
      image={ProductDevelopmentImage}
      imageAlt="Product development team collaborating on project"
      challengeTitle="challenge"
      challenge="Transforming a validated idea into a fully-fledged product is a critical stage where many startups face significant challenges, including technical execution and market readiness."
      solutionTitle="Solution"
      solution="Our Scalable Tech Infrastructure services turn your startup principles and innovation strategy into measurable and sustainable foundations. We collaborate with your team to develop and successfully launch your product."
      features={features}
      imagePosition="right" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="ATI’s structured, yet flexible approach ensures that your product is developed on time, within budget, and ready for a successful market launch."
      ctaText="Discover how ATI can elevate your product development"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
