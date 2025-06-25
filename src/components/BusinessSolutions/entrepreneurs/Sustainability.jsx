import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import entrepreneurs from "../../../assets/images/BussinessSolutions/entrepreneurs/Entrepreneurial-Resilience-Sustainability.jpg";

export default function Sustainability() {
  const navigate = useNavigate();

  const features = [
    "Risk Management: Identify and mitigate potential risks with our comprehensive risk assessment and management tools.",
    "Sustainability Planning: Develop strategies that integrate sustainability into your business model, enhancing your brand’s reputation and longevity.",
    "Crisis Management: Be prepared for unexpected challenges with our crisis management planning and support.",
  ];

  return (
    <TalentServiceSection
      title="Entrepreneurial Resilience & Sustainability"
      image={entrepreneurs}
      imageAlt="entrepreneurs"
      problemtitle="problem"
      problem="The entrepreneurial journey is filled with challenges, from market fluctuations to unexpected setbacks, requiring resilience and adaptability."
      solutiontitle="solution"
      solution="Our Entrepreneurial Resilience & Sustainability services are designed to help you build a business that can withstand challenges and thrive in the long term. We provide the tools and strategies to ensure your business is resilient, adaptable, and sustainable."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="We help you build a resilient business that not only survives but thrives, even in the face of adversity."
      ctaText="BUILD A RESILIENT AND SUSTAINABLE BUSINESS WITH OUR ENTREPRENEURIAL RESILENCE & SUSTAINABILITY SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
