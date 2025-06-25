import React from "react";
import advancedDataAnalytics from "../../../assets/images/our-expertise/Digital-Transformation/Digital-Transformation-Agile-business-purpose.jpg";
import ServicesSection from "../common/ServicesSection";

const DtServices = () => {
  const services = [
    {
      title: "Cloud Migration & Modernization",
      content:
        "Cloud computing is the foundation of modern digital infrastructure, providing the scalability, flexibility, and cost-efficiency that businesses need to compete in today’s market. ATI’s cloud migration and modernization services help you move from legacy systems to cloud-based environments, ensuring a smooth transition with minimal disruption. We work with leading cloud platforms such as AWS, Microsoft Azure, and Google Cloud to deliver tailored solutions that support your digital transformation goals.",
    },
    {
      title: "Data-Driven Decision Making",
      content:
        "In a data-driven world, the ability to harness and analyze data effectively is critical to making informed decisions. ATI’s data transformation services focus on building robust data architectures, implementing advanced analytics, and enabling real-time insights. We help you transform raw data into actionable intelligence, empowering your business to make strategic decisions that drive growth and innovation.",
    },
    {
      title: "Customer Experience Transformation",
      content:
        "In the digital age, customer experience is a key differentiator. ATI’s customer experience transformation services are designed to help you create personalized, seamless, and engaging experiences across all touchpoints. From AI driven personalization and omni-channel strategies to user-centric design and automation, we help you build lasting customer relationships that drive loyalty and revenue.",
    },
    {
      title: "Agile Business Processes",
      content:
        "Digital transformation requires more than just new technologies—it demands a shift in how your business operates. ATI’s agile business process services help you implement agile methodologies across your organization, enabling faster decisionmaking, greater flexibility, and continuous improvement. We work with you to redesignworkflows, streamline operations, and foster a culture of agility and innovation.",
    },
    {
      title: "Cybersecurity & Compliance",
      content:
        "As businesses undergo digital transformation, ensuring thesecurity and compliance of new systems and processes is paramount. ATI’s cybersecurity and compliance services protect your digital assets, safeguard customer data, and ensure compliance with industry regulations. We provide comprehensive security assessments,implement robust security measures, and offer ongoing monitoring to keep your business safe in the digital world.",
    },
    {
      title: "AI-Driven Automation",
      content:
        "Automation powered by AI can significantly enhance productivity and reduce operational costs. ATI offers AI-driven automation solutions that streamline repetitive tasks, optimize workflows, and improve accuracy. From robotic process automation (RPA) to intelligent chatbots, our solutions enable businesses to operate more efficiently and focus on strategic initiatives.",
    },
  ];

  return (
    <ServicesSection
      image={advancedDataAnalytics}
      imageAlt="Advanced Data Analytics and AI Services"
      services={services}
    />
  );
};

export default DtServices;
