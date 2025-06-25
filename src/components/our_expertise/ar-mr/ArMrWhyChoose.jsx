import React from "react";
import { useNavigate } from "react-router-dom";
import WhyChooseSection from "../common/WhyChooseSection";
import Why_Choose_ATI_for_ar_mr from "../../../assets/images/our-expertise/ar-mr/why-us-AR-MR-qtlqhyq939c93i2s3zalz9n7jr8j31c92cmu8waekm.jpg";

const ArMrWhyChoose = () => {
  const navigate = useNavigate();
  const accordionData = [
    {
      id: "historic-approch",
      title: "Industry-Leading Expertise",
      content:
        "Our team of AR and MR specialists has extensive experience across various industries, ensuring that we deliver solutions tailored to your specific needs.",
    },
    {
      id: "expert-team",
      title: "Custom-Tailored Solutions",
      content:
        "We understand that every business is unique, which is why we create custom AR and MR applications that align with your goals and deliver real value",
    },
    {
      id: "cutting-edge-tech",
      title: "End-to-End Development",
      content:
        "From concept and design to development and deployment, ATI provides comprehensive AR and MR services that cover the entire project lifecycle.",
    },
    {
      id: "proven-success",
      title: "Proven Success",
      content:
        "ATI has a proven track record of delivering successful AR and MR projects that drive engagement, enhance training, and streamline product development.",
    },
  ];

  return (
    <WhyChooseSection
      title="Why Choose ATI"
      animatedText="for AR & MR Solutions?"
      challengeTitle="CHALLENGE"
      challengeContent="Leveraging AR and MR technologies to their full potential requires deep technical expertise and a strategic approach."
      solutionTitle="ATI'S SOLUTION"
      solutionContent="ATI’s AR & MR Solutions are designed to provide you with the expertise, creativity, and cutting-edge tools needed to harness these transformative technologies effectively."
      accordionData={accordionData}
      image={Why_Choose_ATI_for_ar_mr}
      imageAlt="Why_Choose_ATI_for_ar_mr"
      buttonText="CONTACT US"
      buttonAction={() => navigate("/contact-us")}
      backgroundColor="#620e6e"
      buttonHoverColor="#e156e6"
    />
  );
};

export default ArMrWhyChoose;
