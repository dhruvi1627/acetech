import React from "react";
import advancedDataAnalytics from "../../../assets/images/our-expertise/data_ai/Advanced-Data-Analytics-Data-and-AI.jpg";
import ServicesSection from "../common/ServicesSection";

const DataAiServices = () => {
  const services = [
    {
      title: "ARTIFICIAL INTELLIGENCE",
      content: "AI is revolutionizing industries by automating processes, enhancing decision-making, and creating new opportunities for innovation. ATI is at the forefront of this transformation, offering AI solutions that range from machine learning models and natural language processing (NLP) to computer vision and AI-driven automation. Our AI capabilities empower businesses to operate more efficiently and deliver better customer experiences.",
    },
    {
      title: "MACHINE LEARNING",
      content: "Machine learning is a core component of our AI expertise. We develop and deploy machine learning models that learn from data and improve over time, enabling predictive analytics, personalized experiences, and intelligent automation. ATI's machine learning solutions are designed to help businesses anticipate trends, optimize operations, and deliver superior products and services.",
    },
    {
      title: "GENERATIVE AI (GENAI)",
      content: "Generative AI is one of the most exciting advancements in AI technology, enabling the creation of new content, designs, and solutions based on existing data. ATI leverages GenAI to help businesses innovate in areas such as content generation, product design, and creative problem-solving. Our GenAI solutions include text generation, image synthesis, and automated creative processes, opening up new possibilities for innovation and efficiency.",
    },
    {
      title: "BIG DATA MANAGEMENT",
      content: "Managing large volumes of data requires specialized expertise and infrastructure. ATI's big data solutions ensure that your data is stored, processed, and analyzed efficiently, enabling you to leverage vast amounts of information to gain strategic insights. Our big data services include data warehousing, ETL (Extract, Transform, Load) processes, and data lake management.",
    },
    {
      title: "DATA ENGINEERING",
      content: "Building a robust data infrastructure is crucial for effective data management and analytics. ATI's data engineering services include the design, implementation, and optimization of data pipelines, ensuring that your data flows seamlessly across systems and is readily available for analysis. We also specialize in data integration, helping you unify data from disparate sources into a cohesive, actionable format.",
    },
    {
      title: "AI-DRIVEN AUTOMATION",
      content: "Automation powered by AI can significantly enhance productivity and reduce operational costs. ATI offers AI-driven automation solutions that streamline repetitive tasks, optimize workflows, and improve accuracy. From robotic process automation (RPA) to intelligent chatbots, our solutions enable businesses to operate more efficiently and focus on strategic initiatives.",
    },
  ];

  return (
    <ServicesSection
      title="OUR DATA & AI SERVICES"
      image={advancedDataAnalytics}
      imageAlt="Advanced Data Analytics and AI Services"
      services={services}
    />
  );
};

export default DataAiServices; 