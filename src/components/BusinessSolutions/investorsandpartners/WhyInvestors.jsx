import React from "react";
import { useNavigate } from "react-router-dom";
import WhyStartupAcetech from "../startups/WhyStartupAcetech";
import investors from "../../../assets/images/BussinessSolutions/inventors/Why-Choose-AceTechInside.jpg";

export default function WhyInvestors() {
  const navigate = useNavigate();

  return (
    <WhyStartupAcetech
      title="Why Choose AceTechInside?"
      image={investors}
      imageAlt="investors"
      problemtitle="problem"
      problem="Investors and partners need reliable solutions to support the startups they back, ensuring that these startups have the talent and tech resources necessary for success."
      solutiontitle="solution"
      solution="At AceTechInside, we provide agile and lean talent and tech services tailored specifically for startups. Our innovative approach ensures that startups have the resources they need to grow efficiently and effectively."
      imagePosition="left"
      ctamain="Why it works"
      ctaquote="By partnering with us, you ensure that the startups in your portfolio or partnerships receive the support they need to succeed, maximizing your return on investment and enhancing their chances of success."
      ctaText="Contact Us"
      onCtaClick={() => navigate("/contact-us")}
    />
  );
}
