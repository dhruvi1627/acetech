import React from "react";
import ServicesSection from "../common/ServicesSection";
import digitalTransformation from "../../../assets/images/our-expertise/tech_innovation/Driving-Digital-Transformation-1.jpg";

const TechInnovationServices = () => {
  const services = [
    {
      title: "BLOCKCHAIN TECHNOLOGY",
      content: "Blockchain is transforming industries by providing secure, transparent, and decentralized solutions for transactions, data sharing, and contract management. ATI's blockchain expertise includes developing smart contracts, decentralized applications (DApps), and blockchain-based systems that enhance security, transparency, and efficiency. We help businesses leverage blockchain to streamline operations, reduce costs, and build trust with their stakeholders.",
    },
    {
      title: "INTERNET OF THINGS (IoT)",
      content: "IoT connects the physical and digital worlds, enabling real-time monitoring, data collection, and automation across a wide range of applications. ATI's IoT solutions include the design, development, and deployment of IoT ecosystems that integrate devices, sensors, and data analytics to improve efficiency and drive innovation. From smart manufacturing and connected healthcare to smart cities and retail, our IoT expertise helps businesses transform their operations and customer experiences.",
    },
    {
      title: "CLOUD COMPUTING & EDGE COMPUTING",
      content: "Cloud computing is the backbone of modern digital infrastructure, providing scalable, flexible, and cost-effective solutions for data storage, processing, and application deployment. ATI's cloud computing services encompass cloud migration, infrastructure management, and cloud-native application development across platforms like AWS, Microsoft Azure, and Google Cloud. Additionally, our edge computing solutions bring processing power closer to data sources, enabling real-time analytics and reducing latency for critical applications.",
    },
    {
      title: "AUGMENTED REALITY (AR) & VIRTUAL REALITY (VR)",
      content: "AR and VR are redefining how businesses interact with their customers, train employees, and visualize data. ATI's AR and VR solutions include the development of immersive experiences for marketing, training, simulation, and product design. By integrating AR and VR into your business, we help you create engaging, interactive experiences that drive customer engagement and enhance learning and visualization.",
    },
    {
      title: "ROBOTIC PROCESS AUTOMATION (RPA)",
      content: "RPA automates repetitive tasks and processes, freeing up human resources for higher-value activities. ATI's RPA solutions are designed to streamline operations, reduce errors, and improve efficiency across various business functions, including finance, HR, and customer service. By implementing RPA, we help you achieve significant cost savings and operational improvements.",
    },
    {
      title: "GENERATIVE AI (GenAI)",
      content: "Generative AI represents the cutting edge of AI technology, capable of creating new content, designs, and solutions from existing data. ATI leverages GenAI to drive innovation in areas such as content creation, product development, and creative problem-solving. Our GenAI solutions empower businesses to explore new possibilities, optimize creative processes, and stay ahead of the competition.",
    },
  ];

  return (
    <ServicesSection
      title="OUR TECH INNOVATION SERVICES"
      image={digitalTransformation}
      imageAlt="Driving digital transformation through innovative technologies"
      services={services}
    />
  );
};

export default TechInnovationServices; 