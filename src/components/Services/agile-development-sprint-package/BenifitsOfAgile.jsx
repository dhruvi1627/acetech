import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../end-to-end-startup-support/ServiceSection";
import Create_image_benifits from "../../../assets/images/services/agile-development-sprint-package/create-a-image-representing-business-model-devel.jpg";

export default function BenifitsOfAgile() {
  const navigate = useNavigate();

  const features = [
    "Faster Time-to-Market: By working in short, iterative cycles, we help you get your product to market faster, capturing opportunities ahead of your competitors.",
    "Flexibility and Adaptability: Our agile approach allows you to pivot quickly in response to market changes or new insights, ensuring your product remains relevant and competitive.",
    "Cost Efficiency: Sprints enable more accurate budgeting and resource allocation, helping you manage costs effectively and avoid expensive overruns.",
    "Higher Quality: Continuous testing and feedback throughout each sprint ensure that quality is built into your product from the start, reducing the need for costly revisions later",
  ];

  return (
    <ServiceSection
      title="Benefits of ATI’s Agile Development Sprint Package"
      image={Create_image_benifits}
      imageAlt="Benefits of ATI’s Agile Development Sprint Package"
      challengeTitle="Problem"
      challenge="Many startups struggle with long development cycles that delay time-to-market, reduce competitiveness, and increase costs."
      solutionTitle="Ati's Solution"
      solution="Our Agile Development Sprint Package offers several key benefits that address these challenges:"
      features={features}
      imagePosition="left" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="Our agile approach empowers you to stay ahead of the curve, delivering a high-quality product that meets market demands while controlling costs and timelines."
      ctaText="Track your product development progress here"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
