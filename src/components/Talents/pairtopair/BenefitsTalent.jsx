import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "./TalentServiceSection"; // Adjust path as needed
import Benefits from "../../../assets/images/Talents/pairtopair/Benefits-of-ATIs-Talents-Pair-to-Pair-Service.jpg";

export default function BenefitsTalent() {
  const navigate = useNavigate();

  const features = [
    "Precision Matching: By pairing your project with the right professionals, we ensure that your team has the skills needed to succeed, reducing the risk of delays and errors.",
    "Cost Efficiency: Avoid the high costs and long timelines associated with traditional hiring methods by engaging specialized talent on a project basis.",
    "Scalability: As your project evolves, our Pair-to-Pair service allows you to scale your team up or down quickly, ensuring that your resources are always aligned with your needs.",
    "Agility and Flexibility: Our agile approach ensures that the paired talent can adapt quickly to your project’s demands, delivering high-quality results in a dynamic environment."
  ];

  return (
    <TalentServiceSection
      title="Benefits of ATI’s Talents Pair-to-Pair Service"
      image={Benefits}
      imageAlt="pair-to-pair"
      problem="Without the right talent, projects can experience delays, budget overruns, and quality issues, ultimately impacting your business’s success."
      solution="The Talents Pair-to-Pair service from ATI offers numerous benefits that address these challenges and help your business thrive."
      features={features}
      imagePosition="left"
      ctamain="why it works"
      ctaquote="ATI’s Talents Pair-to-Pair service provides you with the flexibility, precision, and expertise needed to complete projects on time and within budget, enhancing your competitive edge."
      ctaText="ENHANCE YOUR PROJECT WITH EXPERT TALENT"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
