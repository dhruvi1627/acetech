import React from "react";
import { useNavigate } from "react-router-dom";
import WhyChooseSection from "../common/WhyChooseSection";
import Why_Choose_ATI_for_innovation_tecchnology from "../../../assets/images/our-expertise/tech-innovation/Why-us-for-innovation-technology-qtkc1a3o8ifq2wwu9pihwp9jodfwan8amll16hwkee.jpg";

const TechInWhyChoose = () => {
  const navigate = useNavigate();
  const accordionData = [
    {
      id: "historic-approch",
      title: "Deep Technical Expertise:",
      content:
        "Our team of experts stays at the forefront of technological advancements, ensuring that you benefit from the most innovative and effective solutions available.",
    },
    {
      id: "expert-team",
      title: "Tailored Innovation Strategies",
      content:
        "We understand that every business is unique. That’s why we develop customized innovation strategies that align with your specific goals and challenges.",
    },
    {
      id: "cutting-edge-tech",
      title: "Agile and Lean Methodologies",
      content:
        "We apply agile and lean principles to deliver solutions that are efficient, adaptable, and focused on delivering maximum value to your business.",
    },
    {
      id: "proven-success",
      title: "Proven Track Record",
      content:
        "ATI has a history of successfully implementing innovative technology solutions that drive real business outcomes. Our clients trust us to lead their digital transformation and innovation efforts with expertise and vision.",
    },
  ];

  return (
    <WhyChooseSection
      title="Why Choose ATI"
      animatedText="for Innovation Technology?"
      challengeTitle="CHALLENGE"
      challengeContent="Navigating the complexities of emerging technologies can be challenging, requiring specialized expertise and a strategic approach to ensure success."
      solutionTitle="ATI'S SOLUTION"
      solutionContent="ATI’s Innovation Technology Solutions are designed to overcome these challenges, providing you with the expertise, guidance, and cutting-edge tools needed to harness the power of innovation."
      accordionData={accordionData}
      image={Why_Choose_ATI_for_innovation_tecchnology}
      imageAlt="Why_Choose_ATI_for_innovation_tecchnology"
      buttonText="CONTACT US"
      buttonAction={() => navigate("/contact-us")}
      backgroundColor="#620e6e"
      buttonHoverColor="#e156e6"
    />
  );
};

export default TechInWhyChoose;
