import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import investors from "../../../assets/images/BussinessSolutions/inventors/Scalable-Tech-Infrastructure.jpg";

export default function InvestorsScalableTech() {
  const navigate = useNavigate();

  const features = [
    "Cloud Solutions: Implement lean and scalable cloud services (AWS, Google Cloud, Azure) tailored to the specific needs of startups.",
    "Efficient Infrastructure Setup: Build and optimize tech infrastructure with a focus on agility and scalability, including servers, networking, and software.",
    "Advanced Cybersecurity: Protect startups with lean cybersecurity measures, including threat detection, data encryption, and compliance support.",
  ];

  return (
    <TalentServiceSection
      title="Scalable Tech Infrastructure"
      image={investors}
      imageAlt="investors"
      problemtitle="problem"
      problem="Startups often struggle with setting up and maintaining a tech infrastructure that is both scalable and secure, which can hinder their ability to grow and innovate."
      solutiontitle="solution"
      solution="Our Scalable Tech Infrastructure services use lean startup principles to provide startups with a robust tech foundation. We ensure that their infrastructure is agile, secure, and capable of supporting rapid growth."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="Our lean approach ensures that startups have a tech infrastructure that supports growth without unnecessary complexity or cost."
      ctaText="ENHANCE YOUR STARTUP'S TECH FOUNDATION WITH OUR SCALABLE TECH INFRASTRUCTURE SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
