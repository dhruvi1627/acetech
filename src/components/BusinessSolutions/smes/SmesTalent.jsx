import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import smes from "../../../assets/images/BussinessSolutions/smes/Elite-Talent-Solutions.jpg";

export default function SmesTalent() {
  const navigate = useNavigate();

  const features = [
    "Specialized Recruitment: Access a curated network of skilled professionals, including developers, engineers, and IT specialists with expertise in emerging technologies.",
    "Talent Management: Efficiently manage your workforce with our tools and services designed for on-boarding, performance tracking, and team development.",
    "Flexible Hiring Options: Whether you need full-time, part-time, or remote staff, we offer flexible hiring solutions to match your business needs.",
  ];

  return (
    <TalentServiceSection
      title="Elite Talent Solutions"
      image={smes}
      imageAlt="smes"
      problemtitle="problem"
      problem="SMEs often struggle with recruiting skilled talent and managing their workforce efficiently due to limited resources and competition from larger companies."
      solutiontitle="solution"
      solution="Our Elite Talent Solutions provide you with access to a pool of top-tier professionals who can drive your business forward. We handle the recruitment and management processes, allowing you to focus on your core business activities."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="Our talent solutions help you attract and retain the right people, ensuring you have the skills needed to drive growth and innovation."
      ctaText="ELEVATE YOUR TEAM WITH OUR ELITE TALENT SOLUTIONS AND DRIVE YOUR SME'S SUCCESS"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
