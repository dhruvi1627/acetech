import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../end-to-end-startup-support/ServiceSection";
import new_1 from "../../../assets/images/services/agile-development-sprint-package/1-new.jpg";

export default function WhatIsAgile() {
  const navigate = useNavigate();

  const features = [
    "Sprint Planning: We start by working with you to define the goals and deliverables for each sprint, ensuring alignment with your overall product vision.",
    "Rapid Iteration: Our agile teams work in short, focused bursts, delivering working product increments at the end of each sprint.",
    "Continuous Feedback: Each sprint concludes with a review session, allowing for immediate feedback and iterative improvements in the next sprint.",
  ];

  return (
    <ServiceSection
      title="What is the Agile Development Sprint Package?"
      image={new_1}
      imageAlt="What is the Agile Development Sprint Package?"
      challengeTitle="Problem"
      challenge="Traditional development methods can be slow and rigid, leading to delays, higher costs, and products that may not fully meet customer needs."
      solutionTitle="Ati's Solution"
      solution="Our Agile Development Sprint Package is a focused, time-boxed approach that breaks down product development into manageable sprints. Each sprint is designed to produce tangible, functional increments of your product, allowing for continuous feedback and improvement."
      features={features}
      imagePosition="left" // This will put the image on the right side
      ctaMain="Why it works"
      ctaQuote="By breaking down development into sprints, we ensure that your product evolves in response to real-time feedback, reducing risks and increasing the chances of market success."
      ctaText="Start your sprint for success!"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
