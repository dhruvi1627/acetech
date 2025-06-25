import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import investors from "../../../assets/images/BussinessSolutions/inventors/Agile-Talent-Acquisition.jpg";

export default function InvestorsTalent() {
  const navigate = useNavigate();

  const features = [
    "Rapid Recruitment: Leverage our agile recruitment process to quickly identify and onboard skilled professionals, including developers, engineers, and IT specialists.",
    "Effective Talent Management: Implement agile strategies for managing and developing talent, including performance tracking and team alignment.",
    "Flexible Staffing:  Offer flexible staffing solutions to meet the dynamic needs of startups, whether through full-time hires, part-time roles, or remote teams.",
  ];

  return (
    <TalentServiceSection
      title="Agile Talent Acquisition"
      image={investors}
      imageAlt="investors"
      problemtitle="problem"
      problem="Investors and partners often face challenges ensuring that startups have access to the right talent, which is crucial for driving innovation and achieving growth."
      solutiontitle="solution"
      solution="Our Agile Talent Acquisition services streamline the recruitment and management of top talent for startups. We utilize agile methods to quickly adapt to changing needs and ensure that startups have the skilled professionals required for success."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="Our agile approach allows startups to adapt quickly to market demands and technological changes, ensuring they have the right people to drive growth."
      ctaText="BOOST YOUR STARTUP'S CAPABILITIES WITH OUR AGILE TALENT ACQUISITION SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
