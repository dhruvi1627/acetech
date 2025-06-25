import React from "react";
import { useNavigate } from "react-router-dom";
import TalentServiceSection from "../../Talents/pairtopair/TalentServiceSection"; 
import entrepreneurs from "../../../assets/images/BussinessSolutions/entrepreneurs/Step-by-step-guidance.jpg";

export default function Advisor() {
  const navigate = useNavigate();

  const features = [
    "One-on-One Mentorship: Get personalized guidance from experienced entrepreneurs who have successfully built and scaled businesses.",
    "Business Strategy Consulting: Receive expert advice on critical business decisions, from product development to market entry and expansion.",
    "Leadership Coaching: Enhance your leadership skills with coaching that focuses on managing teams, driving growth, and fostering innovation.",
  ];

  return (
    <TalentServiceSection
      title="Strategic Advisory Services"
      image={entrepreneurs}
      imageAlt="entrepreneurs"
      problemtitle="problem"
      problem="Entrepreneurs often face critical decisions that can make or break their business but lack the experience or guidance to make the right choice."
      solutiontitle="solution"
      solution="Our Entrepreneurial Road map is a step-by-step guide that helps you navigate the complexities of starting and growing a business. From idea validation to scaling, our road map provides the tools and strategies you need to succeedOur Strategic Advisory Services offer you direct access to seasoned entrepreneurs, industry experts, and business strategists who can provide tailored advice at every stage of your journey."
      features={features}
      imagePosition="right"
      ctamain="Why it works"
      ctaquote="By learning from those who have already succeeded, you can avoid common pitfalls and make strategic decisions with confidence."
      ctaText="ACCESS EXPERT GUIDANCE AND TAKE YOUR BUSINESS TO THE NEXT LEVEL WITH OUR STRATEGIC ADVISORY SERVICES"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
