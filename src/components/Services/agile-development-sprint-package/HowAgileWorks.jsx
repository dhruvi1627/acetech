import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../end-to-end-startup-support/ServiceSection";
import HowAgile_Works from "../../../assets/images/services/agile-development-sprint-package/How-the-Agile-Development-Sprint-Package-Works.jpg";

export default function HowAgileWorks() {
  const navigate = useNavigate();

  const features = [
    "Sprint Planning Sessions: We collaborate with your team to define the scope, objectives, and timeline for each sprint, ensuring clarity and focus",
    "Daily Standups: Our development team conducts daily standup meetings to keep the project moving forward, quickly addressing any roadblocks or challenges.",
    "Sprint Reviews and Retrospectives: At the end of each sprint, we review the completed work, gather feedback, and refine our approach for the next sprint, ensuring continuous improvement.",
  ];

  return (
    <ServiceSection
      title="How the Agile Development Sprint Package Works"
      image={HowAgile_Works}
      imageAlt="How the Agile Development Sprint Package Works"
      challengeTitle="Problem"
      challenge="Without a structured approach, product development can become chaotic, leading to missed deadlines, budget overruns, and subpar quality."
      solutionTitle="Ati's Solution"
      solution="Our Agile Development Sprint Package is structured to keep your project on track, on budget, and aligned with your goals. Here’s how it works:"
      features={features}
      imagePosition="right" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="Our structured yet flexible approach ensures that your product development stays on schedule, with clear milestones and measurable progress at every step."
      ctaText="Track your product development progress here"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
