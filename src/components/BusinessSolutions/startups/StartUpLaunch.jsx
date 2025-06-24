import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import startup from "../../../assets/images/BussinessSolutions/startup/Square-Startup-launch.jpg";

export default function StartUpLaunch() {
  const navigate = useNavigate();

  const features = [
    "Idea Validation: Avoid costly mistakes by using AI-driven insights to ensure your idea meets real market demand.",
    "MVP Development: Accelerate your time to market with low-code/no-code tools that allow you to develop and test your Minimum Viable Product (MVP) swiftly.",
    "Product Management: Keep your team aligned and on track with our product management dashboard, ensuring timely and efficient development.",
  ];

  return (
    <TalentServiceSection
      title="Tech Startup Launchpad"
      image={startup}
      imageAlt="StartUp"
      problemtitle="problem"
      problem="Many startups struggle to validate their ideas and develop a viable product quickly, often wasting valuable time and resources."
      solutiontitle="Solution"
      solution=" Our Tech Startup Launchpad is a comprehensive platform that guides you through every step of turning your idea into a market-ready product. With our tools, you can validate your concept, build a prototype, and manage your product development efficiently."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="Our Launchpad reduces the risk and uncertainty of early-stage product development, helping you move quickly from concept to execution."
      ctaText="GET STARTED WITH THE TECH STARTUP LAUNCHPAD TO BRING YOUR TECH PRODUCT TO MARKET FASTER AND SMARTER"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
