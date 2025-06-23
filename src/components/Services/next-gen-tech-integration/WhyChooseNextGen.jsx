import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../end-to-end-startup-support/ServiceSection";
import WhyChoose from "../../../assets/images/services/next-gen-tech-integration/Why-Choose-ATI-for-Next-Gen-840x839.jpg";

export default function WhyChooseNextGen() {
  const navigate = useNavigate();

  const features = [
    "Expertise in Cutting-Edge Technologies: Our team stays at the forefront of technological advancements, ensuring that we can integrate the most relevant and powerful solutions for your business.",
    "Agile and Lean Approach: We utilize agile methodologies and lean principles to ensure that the integration process is efficient, flexible, and focused on delivering maximum value with minimal waste.",
    "Proven Success: ATI has a track record of successful tech integrations across various industries, helping businesses like yours achieve seamless transitions and significant performance improvements.",
  ];

  const ctaFeatures = [
    "Customized Solutions: We tailor our integration services to your specific needs, ensuring that the technology we implement delivers tangible benefits aligned with your business goals.",
    "End-to-End Support: From initial consultation through to post-integration support, ATI is with you every step of the way, ensuring a successful transition to next-gen technologies",
  ];

  return (
    <ServiceSection
      title="Why Choose ATI for Next-Gen Tech Integration?"
      image={WhyChoose}
      imageAlt="Why Choose ATI for Next-Gen Tech Integration?"
      challengeTitle="Problem"
      challenge="Successfully integrating new technologies requires deep technical expertise, strategic planning, and the ability to execute without disrupting ongoing operations."
      solutionTitle="Ati's Solution"
      solution="ATI’s Next-Gen Tech Integration service is designed to provide all of this and more. Here’s why ATI is the right partner for your technology transformation:"
      features={features}
      imagePosition="right" // This will put the image on the right side
      ctaMain="Unique Value Proposition"
      ctaFeatures={ctaFeatures}
      ctaText="GET YOUR CUSTOMIZED INTEGRATION SOLUTIONS NOW!"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
