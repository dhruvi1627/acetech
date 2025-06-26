import React from "react";
import WhyChooseSection from "../common/WhyChooseSection";
import systemIntegrationLast from "../../../assets/images/our-expertise/system_integration/SYSTEM-INTEGRATION-LAST-IMAGE.jpg";

const WhyChooseAti = () => {
  const accordionData = [
    {
      id: "end-to-end",
      title: "END-TO-END INTEGRATION",
      content:
        "From initial assessment and planning to implementation and ongoing support, ATI offers comprehensive systems integration services that cover every aspect of the integration process.",
    },
    {
      id: "industry-expertise",
      title: "INDUSTRY EXPERTISE",
      content:
        "Our team has extensive experience in integrating systems across a wide range of industries, including finance, healthcare, retail, manufacturing, and more. We understand the unique challenges of each sector and tailor our solutions to meet your specific needs.",
    },
    {
      id: "creative-problem-solving",
      title: "CREATIVE PROBLEM-SOLVING",
      content:
        "We apply agile and lean principles to our integration projects, ensuring they are completed on time, within budget, and aligned with your business goals. Our approach allows us to adapt to changing requirements and deliver high-quality integrations that drive real business value.",
    },
    {
      id: "proven-success",
      title: "PROVEN SUCCESS",
      content:
        "ATI has a track record of successfully delivering complex systems integration projects for businesses of all sizes. Our clients trust us to create integrations that enhance efficiency, improve performance, and support long-term growth.",
    },
  ];

  return (
    <WhyChooseSection
      title="WHY CHOOSE ATI"
      animatedText="FOR SYSTEMS INTEGRATION?"
      challengeTitle="CHALLENGE"
      challengeContent="Integrating disparate systems and technologies can be complex, time-consuming, and resource-intensive, often requiring specialized expertise to ensure success."
      solutionTitle="ATI'S SOLUTION"
      solutionContent="ATI's Systems Integration Services are designed to overcome these challenges, providing you with the expertise, tools, and support needed to create a cohesive, efficient technology ecosystem."
      accordionData={accordionData}
      image={systemIntegrationLast}
      imageAlt="ATI's comprehensive systems integration expertise"
      buttonText="CONTACT US"
      buttonAction={() => console.log("Contact us clicked")}
      backgroundColor="#620e6e"
      buttonHoverColor="#e156e6"
    />
  );
};

export default WhyChooseAti; 