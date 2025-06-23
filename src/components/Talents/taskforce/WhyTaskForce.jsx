import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../pairtopair/TalentServiceSection"; // Adjust path as needed
import Team from "../../../assets/images/Talents/taskforce/4.jpg";

export default function WhyTaskForce() {
  const navigate = useNavigate();   

  const features = [
    "Expertise in Rapid Response: ATI has extensive experience in deploying highimpact task forces quickly, ensuring that your urgent projects are handled by professionals who can deliver results.",
    "Agile and Lean Approach: Our task forces operate using agile and lean principles, ensuring that your projects are executed efficiently, with a focus on delivering maximum value in minimal time.",
    "Proven Success: ATI’s task forces have a track record of successfully addressing critical business challenges, helping companies like yours achieve their goals under tight deadlines and high pressure.",
  ];

  return (
    <TalentServiceSection
      title="Why Choose ATI’s Talents Pair-to-Pair Service?"
      image={Team}
      imageAlt="Task Force"
      problem="Urgent projects and critical challenges require a swift, effective response, but finding the right team to handle these tasks can be a major hurdle."
      solution="ATI’s Talents Task Force service is designed to overcome this hurdle, offering a rapid, expert-driven solution for your most pressing business needs."
      features={features}
      imagePosition="right"
      ctamain="Unique Value Proposition"
      ctaquote={[
        "Tailored Talent Needs: We customize each task force to match the specific requirements of your project, ensuring that you get the right skills and expertise at the right time.",
        "End-to-End Management:  From rapid deployment to project completion, ATI manages the entire process, providing you with a seamless, stress-free experience that delivers outstanding results."
      ]}
      ctaText="GET TAILORED TALENT & STRESS-FREE MANAGMENT"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
