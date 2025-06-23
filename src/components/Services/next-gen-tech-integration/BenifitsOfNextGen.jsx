import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../end-to-end-startup-support/ServiceSection";
import BenifitsNxt from "../../../assets/images/services/next-gen-tech-integration/Benefits-of-ATIs.jpg";

export default function BenifitsOfNextGen() {
  const navigate = useNavigate();

  const features = [
    "Future-Proofing Your Business: We help you stay ahead of the curve by integrating the latest technologies that are poised to shape the future of your industry.",
    "Improved Efficiency and Productivity: Next-gen technologies can automate processes, improve accuracy, and enhance decision-making, leading to significant efficiency gains.",
    "Scalability and Flexibility: Our integration solutions are designed to scale with your business, ensuring that as your needs grow, your technology infrastructure can grow with you.",
    "Competitive Advantage: By adopting and integrating advanced technologies, your business can differentiate itself in the market, offering innovative solutions that competitors can’t match.",
  ];

  return (
    <ServiceSection
      title="Benefits of ATI’s Next-Gen Tech Integration"
      image={BenifitsNxt}
      imageAlt="Benefits of ATI’s Next-Gen Tech Integration"
      challengeTitle="Problem"
      challenge="Without the right expertise, businesses can face significant challenges when integrating new technologies, from operational disruptions to wasted investments."
      solutionTitle="Ati's Solution"
      solution="By partnering with ATI for your Next-Gen Tech Integration, you gain access to a range of benefits that mitigate these risks and ensure a successful transformation."
      features={features}
      imagePosition="left" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="Our expertise in next-gen tech and our commitment to lean and agile principles ensure that your integration process is smooth, strategic, and aligned with your long-term goals."
      ctaText="STREAMLINE YOUR INTEGRATION PROCESS TODAY!"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
