import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "./ServiceSection"; // Adjust path as needed
import WhyChooseATI from "../../../assets/images/services/end-to-end/Why-Choose-ATI-for-End-to-End-Startup-Support-768x767.jpg";

export default function WhyChooseAti() {
  const navigate = useNavigate();

  const ctaFeatures = [
    "Agile and Lean Expertise: Our approach is grounded in agile and lean principles, ensuring flexibility, efficiency, and rapid iteration.",
    "Comprehensive Support: We provide holistic support, addressing every aspect of your startup’s development, from initial idea to global expansion.",
    "Proven Success: With a track record of helping startups achieve their goals, ATI is your trusted partner in navigating the complexities of entrepreneurship.",
  ];

  return (
    <ServiceSection
      title="Why Choose ATI for End-to-End Startup Support?"
      image={WhyChooseATI}
      imageAlt="Why-Choose-ATI-for-End-to-End-Startup-Support"
      challengeTitle="challenge"
      challenge="Navigating the startup journey alone can be overwhelming, with many challenges that can derail even the most promising ventures."
      solutionTitle="Solution"
      solution="At ATI, we offer End-to-End Startup Support that covers every stage of your startup’s journey. From ideation to scaling, our team of experts provides the guidance, resources, and support you need to overcome challenges and achieve success."
      imagePosition="left" // This will put the image on the right side
      ctaMain="Unique Value Proposition"
      ctaText="Discover Your Startup's path to succcess"
      ctaFeatures={ctaFeatures}
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
