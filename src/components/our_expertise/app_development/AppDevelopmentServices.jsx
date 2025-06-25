import React from "react";
import ServicesSection from "../common/ServicesSection";
import webAppDev from "../../../assets/images/our-expertise/app_development/Our-Expertise-in-App-Development-Web-App-Development.jpg";

const AppDevelopmentServices = () => {
  const services = [
    {
      title: "WEB APP DEVELOPMENT",
      content: "A strong web presence is key to business success in the digital age. ATI's web app development services focus on building dynamic, responsive, and secure web applications that cater to your business objectives. We leverage the latest web technologies, including HTML5, CSS3, JavaScript, and frameworks like Angular, React, and Vue.js, to create web apps that are fast, reliable, and scalable.",
    },
    {
      title: "CUSTOM APP DEVELOPMENT",
      content: "Every business has unique needs, and ATI is here to address them. We offer custom app development services that are tailored to your specific requirements, whether you're looking to build an e-commerce platform, a customer relationship management (CRM) system, or a bespoke business tool. Our custom solutions are designed to integrate seamlessly with your existing systems and processes, providing you with a competitive edge.",
    },
    {
      title: "UI/UX DESIGN",
      content: "A great app isn't just about functionality—it's also about providing an exceptional user experience. ATI's UI/UX design team is dedicated to creating visually appealing, user-friendly interfaces that enhance usability and ensure customer satisfaction. We follow a user-centered design approach, conducting extensive research and usability testing to create designs that resonate with your target audience.",
    },
    {
      title: "AGILE APP DEVELOPMENT",
      content: "At ATI, we employ agile methodologies to ensure that our app development process is flexible, collaborative, and efficient. By breaking the development process into iterative sprints, we can adapt quickly to changes, incorporate feedback, and deliver high-quality apps on time and within budget. Our agile approach ensures continuous improvement and allows us to align closely with your business goals throughout the project lifecycle.",
    },
    {
      title: "APP TESTING AND QA",
      content: "Quality is at the core of everything we do. Our app testing and quality assurance (QA) services are designed to identify and resolve issues before your app goes live. We perform comprehensive testing, including functional testing, performance testing, security testing, and user acceptance testing (UAT), to ensure that your app is reliable, secure, and ready for launch.",
    },
  ];

  return (
    <ServicesSection
      title="OUR APP DEVELOPMENT SERVICES"
      image={webAppDev}
      imageAlt="Web application development expertise"
      services={services}
    />
  );
};

export default AppDevelopmentServices; 