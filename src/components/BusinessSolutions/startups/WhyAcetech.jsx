import React from "react";
import { useNavigate } from "react-router-dom";
import WhyStartupAcetech from "./WhyStartupAcetech";
import startup from "../../../assets/images/BussinessSolutions/startup/Ethical-Sustainable-Tech-Development-1.jpg";

export default function WhyAcetech() {
  const navigate = useNavigate();

  return (
    <WhyStartupAcetech
      title="Ethical & Sustainable Tech Development"
      image={startup}
      imageAlt="StartUp"
      problemtitle="problem"
      problem="In a fast-paced tech environment, it can be challenging to build products that are not only innovative but also ethical and sustainable."
      solutiontitle="solution"
      solution="Our Ethical & Sustainable Tech Development services ensure that your startup is at the forefront of responsible innovation. We help you integrate ethical considerations and sustainability into your product development process."
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="With our expertise and hands-on experience, we help you avoid common pitfalls and accelerate your path to success."
      ctaText="Contact Us"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
