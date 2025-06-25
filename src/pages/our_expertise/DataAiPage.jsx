import React from "react";
import DataAiHero from "../../components/our_expertise/data_ai/DataAiHero";
import DataAiExpertise from "../../components/our_expertise/data_ai/DataAiExpertise";
import DataAiServices from "../../components/our_expertise/data_ai/DataAiServices";
import DataDrivenDecisions from "../../components/our_expertise/data_ai/DataDrivenDecisions";
import OperationalEfficiency from "../../components/our_expertise/data_ai/OperationalEfficiency";
import EnhancedCustomerExperiences from "../../components/our_expertise/data_ai/EnhancedCustomerExperiences";
import InnovationWithGenAi from "../../components/our_expertise/data_ai/InnovationWithGenAi";
import WhyChooseAti from "../../components/our_expertise/data_ai/WhyChooseAti";

export default function DataAiPage() {
  return (
    <>
      <DataAiHero />
      <DataAiExpertise />
      <DataAiServices />
      <DataDrivenDecisions />
      <OperationalEfficiency />
      <EnhancedCustomerExperiences />
      <InnovationWithGenAi />
      <WhyChooseAti />
    </>
  );
}
