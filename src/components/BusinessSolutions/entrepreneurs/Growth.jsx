import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import entrepreneurs from "../../../assets/images/BussinessSolutions/entrepreneurs/Scale-business-long-term.jpg";

export default function Growth() {
  const navigate = useNavigate();

  const features = [
    "Operational Optimization: Streamline your operations with our process improvement strategies, ensuring efficiency and scalability.",
    "Market Expansion: Enter new markets confidently with our market research, entry strategies, and local partnerships.",
    "Sales & Marketing Enhancement: Boost your revenue with data-driven sales and marketing strategies designed to accelerate growth.",
  ];

  return (
    <TalentServiceSection
      title="Growth Acceleration"
      image={entrepreneurs}
      imageAlt="entrepreneurs"
      problemtitle="problem"
      problem="Many entrepreneurs struggle to scale their businesses effectively, often facing operational challenges and growth bottlenecks."
      solutiontitle="solution"
      solution="Our Growth Acceleration services provide you with the strategies, tools, and support you need to scale your business efficiently and sustainably. From optimizing operations to expanding into new markets, we help you unlock your business’s full potential."
      features={features}
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="We focus on creating scalable systems and strategies that support long-term growth, helping you build a sustainable business."
      ctaText="ACCELERATE YOUR BUSINESS'S GROWTH AND ACHIEVE LONG-TERM SUCCESS WITH OUR GROWTH ACCELERATION SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
