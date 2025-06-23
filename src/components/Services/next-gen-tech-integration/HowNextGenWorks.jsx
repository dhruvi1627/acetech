import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../end-to-end-startup-support/ServiceSection";
import HowAtiWokrs from "../../../assets/images/services/next-gen-tech-integration/How-ATIs-Next-Gen-Works.jpg";

export default function HowNextGenWorks() {
  const navigate = useNavigate();

  const features = [
    "Discovery and Planning: We begin with a thorough discovery phase, understanding your business processes and pinpointing where next-gen tech can drive the most value. Our planning phase includes risk assessments, timelines, and resource allocation.",
    "Agile Integration Process: Leveraging our agile methodology, we break the integration process into manageable sprints, delivering incremental updates that allow for continuous feedback and adaptation.",
    "Testing and Optimization: Each integration undergoes rigorous testing to ensure it operates seamlessly within your existing systems. We then optimize the technology to enhance performance and meet your business needs.",
  ];

  return (
    <ServiceSection
      title="How ATI’s Next-Gen Tech Integration Works"
      image={HowAtiWokrs}
      imageAlt="How ATI’s Next-Gen Tech Integration Works"
      challengeTitle="Problem"
      challenge="Integrating advanced technologies can be complex, involving multiple systems, stakeholders, and potential risks that can disrupt business continuity."
      solutionTitle="Ati's Solution"
      solution="Our Next-Gen Tech Integration service is structured to ensure a smooth and efficient transition to new technologies, with minimal risk and maximum impact."
      features={features}
      imagePosition="right" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="Our agile, phased approach ensures that your business can adapt to new technologies without experiencing significant downtime or operational risks, allowing you to reap the benefits quickly."
      ctaText="DISCOVER OUR AGILE SOLUTIONS TODAY!"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
