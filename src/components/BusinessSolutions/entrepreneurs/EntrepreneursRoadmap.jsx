import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import entrepreneurs from "../../../assets/images/BussinessSolutions/entrepreneurs/From-Idea-to-Thriving-Business.jpg";

export default function EntrepreneursRoadmap() {
  const navigate = useNavigate();

  const features = [
    "Idea Validation: Ensure your business idea has strong market potential with our AI driven market analysis and competitor bench marking.",
    "Business Model Development: Craft a solid business model with our interactive templates and expert guidance, tailored to your unique vision.",
    "Go-to-Market Strategy: Develop a powerful go-to-market plan that positions your business for success from day one.",
  ];

  return (
    <TalentServiceSection
      title="Entrepreneurial Roadmap"
      image={entrepreneurs}
      imageAlt="entrepreneurs"
      problemtitle="problem"
      problem="Many entrepreneurs struggle with turning their ideas into a viable business, often facing uncertainty and roadblocks along the way."
      solutiontitle="solution"
      solution="Our Entrepreneurial Road map is a step-by-step guide that helps you navigate the complexities of starting and growing a business. From idea validation to scaling, our road map provides the tools and strategies you need to succeed."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="Our road map reduces risk by helping you make informed decisions at every stage of your entrepreneurial journey."
      ctaText="START YOUR JOURNEY WITH OUR ENTREPRENEURIAL ROAD MAP AND TURN YOUR VISION INTO REALITY"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
