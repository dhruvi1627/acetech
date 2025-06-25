import React from "react";
import { useNavigate } from "react-router-dom";
import WhyStartupAcetech from "../startups/WhyStartupAcetech";
import startup from "../../../assets/images/BussinessSolutions/smes/SME-Main-image-qt87vsuvsngw0em03h31yw9m0cjvjlcb904g8jixaw.jpg";

export default function WhySmes() {
  const navigate = useNavigate();

  return (
    <WhyStartupAcetech
      title="Why Partner with AceTechInside?"
      image={startup}
      imageAlt="StartUp"
      problemtitle="problem"
      problem="SMEs often struggle to access the same level of expertise and resources as larger organizations, which can hinder their growth and competitiveness."
      solutiontitle="solution"
      solution="At AceTechInside, we bridge this gap by providing top-notch talent and advanced tech services tailored specifically for SMEs. With our insights, we offer solutions that are both innovative and practical, designed to help you succeed."
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="Our expertise and tailored solutions empower SMEs to compete effectively, grow sustainably, and achieve their business goals."
      ctaText="Contact Us"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
