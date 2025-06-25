import React from "react";
import Custom_AR_MR_Applications from "../../../assets/images/our-expertise/ar-mr/Custom-AR-MR-Applications.jpg";
import ServicesSection from "../common/ServicesSection";

const ArMrServices = () => {
  const services = [
    {
      title: "Mixed Reality (MR) Solutions",
      content:
        "Mixed Reality combines elements of both virtual reality (VR) and AR, allowing digital and physical objects to coexist and interact in real-time. ATI’s MR solutions enable businesses to create immersive environments where users can engage with digital content in a natural, intuitive way. We develop MR applications for industries such as healthcare, manufacturing, and real estate, where visualization and hands-on interaction are critical.",
    },
    {
      title: "Custom AR & MR Applications",
      content:
        "Every business has unique needs, and ATI is committed to delivering tailored AR and MR solutions that align with your specific goals. We work closely with you to design and develop custom applications that leverage the full potential of AR and MR technologies. Whether you need an interactive product demo, an immersive training program, or a virtual showroom, ATI has the expertise to bring your vision to life.",
    },
    {
      title: "AR & MR for Training & Simulation",
      content:
        "Training employees in complex tasks or high-risk environments can be challenging and costly. ATI’s AR and MR solutions offer a safe, cost effective alternative by creating immersive training simulations. Our training and simulation applications provide realistic, hands-on experiences that enhance learning outcomes, reduce training time, and improve safety.",
    },
    {
      title: "AR & MR for Marketing & Customer Engagement",
      content:
        "In a crowded marketplace, capturing customer attention and delivering memorable experiences is more important than ever. ATI’s AR and MR solutions for marketing allow businesses to create engaging, interactive campaigns that stand out. From AR-powered product visualizations to MR-based brand experiences, we help you connect with your audience in meaningful ways.",
    },
    {
      title: "AR & MR for Product Design & Prototyping",
      content:
        "Visualizing and testing product designs in a virtual environment can significantly reduce development time and costs. ATI’s AR and MR solutions enable businesses to create interactive prototypes, visualize designs in 3D, and collaborate with stakeholders in real-time. Our solutions streamline the design process, allowing for faster iterations and more informed decisions.",
    }
  ];

  return (
    <ServicesSection
      image={Custom_AR_MR_Applications}
      imageAlt="Custom_AR_MR_Applications"
      services={services}
    />
  );
};

export default ArMrServices;
