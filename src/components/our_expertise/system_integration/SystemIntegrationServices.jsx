import React from "react";
import apiIntegration from "../../../assets/images/our-expertise/system_integration/API-Integration.jpg";
import ServicesSection from "../common/ServicesSection";

const SystemIntegrationServices = () => {
  const services = [
    {
      title: "CLOUD INTEGRATION",
      content: "As businesses increasingly adopt cloud technologies, integrating cloud based systems with on-premises and other cloud environments becomes essential. ATI's cloud integration services help you create a hybrid or multi-cloud environment that maximizes flexibility, scalability, and cost-effectiveness. We have expertise in integrating cloud platforms like AWS, Microsoft Azure, Google Cloud, and private cloud solutions, ensuring that your cloud resources are fully aligned with your business objectives.",
    },
    {
      title: "API INTEGRATION",
      content: "Application Programming Interfaces (APIs) are the backbone of modern digital ecosystems, enabling different software applications to communicate and share data. ATI's API integration services ensure that your applications are connected efficiently and securely, allowing for real-time data exchange and streamlined workflows. We design, develop, and implement custom APIs, as well as integrate existing APIs, to enhance the functionality and interoperability of your systems.",
    },
    {
      title: "LEGACY SYSTEM INTEGRATION",
      content: "Many businesses still rely on legacy systems that are critical to their operations but lack the flexibility and connectivity of modern technologies. ATI's legacy system integration services help you modernize these systems by integrating them with new technologies and platforms. We ensure that your legacy systems continue to deliver value while being seamlessly integrated into your overall IT landscape.",
    },
    {
      title: "DATA INTEGRATION",
      content: "Effective data management is key to making informed business decisions. ATI's data integration services ensure that data from various sources is consolidated, cleansed, and made accessible across your organization. We specialize in integrating databases, data warehouses, and data lakes, enabling you to have a unified view of your data for better analytics and reporting.",
    },
    {
      title: "MIDDLEWARE SOLUTIONS",
      content: "Middleware acts as the glue that connects different systems, applications, and services within an organization. ATI's middleware integration services enable seamless communication between your systems, ensuring that data flows smoothly and processes run efficiently. We work with leading middleware platforms like IBM WebSphere, Oracle Fusion Middleware, and Microsoft BizTalk to create robust, scalable integration solutions.",
    },
  ];

  return (
    <ServicesSection
      title="OUR SYSTEM INTEGRATION SERVICES"
      image={apiIntegration}
      imageAlt="API and System Integration Services"
      services={services}
    />
  );
};

export default SystemIntegrationServices; 