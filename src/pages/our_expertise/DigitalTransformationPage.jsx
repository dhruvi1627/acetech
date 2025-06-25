import React from "react";
import DigitalTransformationHero from "../../components/our_expertise/Digital-Transformation/DigitalTransformationHero";
import DigitalTransformationExperties from "../../components/our_expertise/Digital-Transformation/DigitalTransformationExperties";
import DtServices from "../../components/our_expertise/Digital-Transformation/DtServices";
import DtEfficiency from "../../components/our_expertise/Digital-Transformation/DtEfficiency";
import DrivingInnovation from "../../components/our_expertise/Digital-Transformation/DrivingInnovation";
import TransformingCust from "../../components/our_expertise/Digital-Transformation/TransformingCust";
import DtWhyChooseAti from "../../components/our_expertise/Digital-Transformation/DtWhyChooseAti";

export default function DigitalTransformationPage() {
  return (
    <>
      <DigitalTransformationHero />
      <DigitalTransformationExperties />
      <DtServices />
      <DtEfficiency />
      <DrivingInnovation />
      <TransformingCust />
      <DtWhyChooseAti />
    </>
  );
}
