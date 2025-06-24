import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import startup from "../../../assets/images/BussinessSolutions/startup/square-Tech-Infrastructure.jpg";

export default function StartUpLaunch() {
  const navigate = useNavigate();

  const features = [
    "Cloud Infrastructure: Start with a scalable cloud platform (AWS, Google Cloud, Azure) that grows with you, offering the flexibility and power you need from day one.",
    "DevOps Automation: Streamline your development process with CI/CD pipelines, containerization (Docker, Kubernetes), and automated deployment tools.",
    "Cybersecurity: Protect your startup’s data and systems with enterprise-grade cybersecurity solutions, including threat detection and encryption.",
  ];

  return (
    <TalentServiceSection
      title="Scalable Tech Infrastructure"
      image={startup}
      imageAlt="StartUp"
      problemtitle="problem"
      problem="Many startups struggle with building a scalable and secure tech infrastructure that can grow with their business."
      solutiontitle="solution"
      solution="Our Scalable Tech Infrastructure services provide you with the tools and expertise needed to build, deploy, and scale your technology with confidence. We offer cloud solutions, DevOps automation, and cybersecurity measures tailored to the needs of tech startups."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="We help you build a robust and flexible infrastructure that supports rapid growth while ensuring security and reliability."
      ctaText="BUILD AND SCALE YOUR TECH INFRASTRUCTURE WITH EASE - START NOW"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
