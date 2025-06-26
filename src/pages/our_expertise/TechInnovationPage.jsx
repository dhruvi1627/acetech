import React from "react";
import TechInnovationHero from "../../components/our_expertise/tech_innovation/TechInnovationHero";
import TechInnovationExpertise from "../../components/our_expertise/tech_innovation/TechInnovationExpertise";
import TechInnovationServices from "../../components/our_expertise/tech_innovation/TechInnovationServices";
import DrivingDigitalTransformation from "../../components/our_expertise/tech_innovation/DrivingDigitalTransformation";

export default function TechInnovationPage() {
  return (
    <>
      <TechInnovationHero />
      <TechInnovationExpertise />
      <TechInnovationServices />
      <DrivingDigitalTransformation />
    </>
  );
} 
