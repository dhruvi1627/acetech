import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../end-to-end-startup-support/ServiceSection";
import WhatIsNext from "../../../assets/images/services/next-gen-tech-integration/Next-Gen-Tech-Integration.jpg";

export default function WhatIsNextGen() {
  const navigate = useNavigate();

  const features = [
    "Technology Assessment: We start by assessing your current systems and identifying opportunities where next-gen technologies can add the most value.",
    "Customized Integration Plan: Our team develops a tailored integration strategy that aligns with your business objectives and technological needs.",
    "Seamless Implementation: Using our agile approach, we integrate new technologies smoothly into your existing infrastructure, minimizing downtime and disruption.",
  ];

  return (
    <ServiceSection
      title="What is Next-Gen Tech Integration?"
      image={WhatIsNext}
      imageAlt="What is Next-Gen Tech Integration?"
      challengeTitle="Problem"
      challenge="TAs technology advances, many businesses struggle to keep up with the pace of change, missing out on the benefits of cutting-edge solutions."
      solutionTitle="Ati's Solution"
      solution="Our Next-Gen Tech Integration services provide a comprehensive approach to adopting and implementing the latest technologies. Whether you’re looking to incorporate AI, blockchain, IoT, or other advanced tech, ATI ensures that these solutions are seamlessly integrated into your existing systems, enhancing your operations without disruption."
      features={features}
      imagePosition="left" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="ATI’s methodical approach ensures that next-gen technologies are integrated in a way that maximizes their benefits while minimizing risks and disruptions to your operations."
      ctaText="DISCOVER NEXT-GEN TECHNOLOGY SOLUTIONS NOW"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
