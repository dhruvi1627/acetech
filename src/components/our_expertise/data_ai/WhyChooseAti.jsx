import React from "react";
import WhyChooseSection from "../common/WhyChooseSection";
import whyUsDataAi from "../../../assets/images/our-expertise/data_ai/why-us-data-ai-soliution.jpg";

const WhyChooseAti = () => {
  const accordionData = [
    {
      id: "cutting-edge",
      title: "CUTTING-EDGE EXPERTISE",
      content:
        "Our data scientists, AI experts, and engineers are at the forefront of the latest data and AI technologies advancements, ensuring that you benefit from the most innovative solutions available.",
    },
    {
      id: "tailored",
      title: "TAILORED SOLUTIONS",
      content:
        "We understand that every business is unique. That's why we develop customized data and AI strategies that align with your specific goals and requirements.",
    },
    {
      id: "agile-lean",
      title: "AGILE AND LEAN METHODOLOGIES",
      content:
        "We apply agile and lean principles to deliver data and AI solutions that are efficient, scalable, and cost-effective, ensuring you get the maximum return on your investment.",
    },
    {
      id: "proven-track",
      title: "PROVEN TRACK RECORD",
      content:
        "ATI has a history of successfully delivering data and AI solutions that drive real business results. Our clients trust us to deliver the insights and automation they need to stay competitive and thrive in a data-driven world.",
    },
  ];

  return (
    <WhyChooseSection
      title="WHY CHOOSE ATI"
      animatedText="FOR DATA & AI SOLUTIONS?"
      challengeTitle="CHALLENGE"
      challengeContent="Integrating and leveraging advanced data and AI technologies can be complex and resource-intensive, often requiring specialized expertise and significant investment."
      solutionTitle="ATI'S SOLUTION"
      solutionContent="ATI's Data & AI Solutions are designed to overcome these challenges, providing businesses with the expertise, tools, and support needed to successfully harness the power of data and AI."
      accordionData={accordionData}
      image={whyUsDataAi}
      imageAlt="ATI's data and AI expertise in action"
      buttonText="CONTACT US"
      buttonAction={() => console.log("Contact us clicked")}
      backgroundColor="#620e6e"
      buttonHoverColor="#e156e6"
    />
  );
};

export default WhyChooseAti;
 