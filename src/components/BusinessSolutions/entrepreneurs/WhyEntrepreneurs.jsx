import React from "react";
import { useNavigate } from "react-router-dom";
import WhyStartupAcetech from "../startups/WhyStartupAcetech";
import startup from "../../../assets/images/BussinessSolutions/entrepreneurs/Why-Partner-with-AceTechInside-qtd0jj3rhic0f3x1lr9xrvmtqu0j0scsu07pr1ehaw.jpg";

export default function WhyEntrepreneurs() {
  const navigate = useNavigate();

  return (
    <WhyStartupAcetech
      title="Why Partner with AceTechInside?"
      image={startup}
      imageAlt="StartUp"
      problemtitle="problem"
      problem="The path to entrepreneurial success is fraught with challenges, and navigating it alone can be overwhelming."
      solutiontitle="solution"
      solution="At AceTechInside, we provide the expert support, resources, and strategic insights you need to overcome these challenges. With our expertise and hands-on experience, we are committed to helping you achieve your entrepreneurial goals."
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="By partnering with us, you gain access to a wealth of knowledge, experience, and connections that can propel your business to success."
      ctaText="Contact Us"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
