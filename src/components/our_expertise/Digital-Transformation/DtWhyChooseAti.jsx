import React from "react";
import { useNavigate } from "react-router-dom";
import WhyChooseSection from "../common/WhyChooseSection";
import WhyusDigitalTransformation from "../../../assets/images/our-expertise/Digital-Transformation/Why-us-Digital-Transformation-qtljv30u80bwj32c080vt1r0pindw800k01ikch9vq.jpg";

const DtWhyChooseAti = () => {
  const navigate = useNavigate();
  const accordionData = [
    {
      id: "historic-approch",
      title: "Holistic Approach",
      content:
        "We take a comprehensive approach to digital transformation, addressing every aspect of your business, from strategy and operations to customer experience and technology.",
    },
    {
      id: "customized-solutions",
      title: "Customized Solutions",
      content:
        "We understand that every business is unique. That’s why we tailor our digital transformation strategies to align with your specific goals, challenges, and industry requirements",
    },
    {
      id: "expert-team",
      title: "Expert Team",
      content:
        "Our team of digital transformation experts brings a wealth of experience across various industries, ensuring that we deliver solutions that drive real business outcomes.",
    },
    {
      id: "agile-meth",
      title: "Agile & Lean Methodologies",
      content:
        "We apply agile and lean principles to ensure that your digital transformation is efficient, flexible, and focused on delivering maximum value.",
    },
    {
      id: "proven-success",
      title: "Proven Success",
      content:
        "ATI has a proven track record of successfully guiding businesses through digital transformation, helping them achieve operational excellence, enhanced customer experiences, and sustained growth.",
    },
  ];

  return (
    <WhyChooseSection
      title="Why Choose ATI "
      animatedText="for Digital Transformation??"
      challengeTitle="CHALLENGE"
      challengeContent="Successfully navigating digital transformation requires a strategic approach, deep technical expertise, and a commitment to continuous innovation."
      solutionTitle="ATI'S SOLUTION"
      solutionContent="ATI’s Digital Transformation Services are designed to guide your business through this journey, providing you with the expertise, tools, and support needed to achieve lasting success."
      accordionData={accordionData}
      image={WhyusDigitalTransformation}
      imageAlt="ATI's data and AI expertise in action"
      buttonText="CONTACT US"
      buttonAction={() => navigate("/contact-us")}
      backgroundColor="#620e6e"
      buttonHoverColor="#e156e6"
    />
  );
};

export default DtWhyChooseAti;
