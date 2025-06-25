import React from "react";
import AppDevelopmentHero from "../../components/our_expertise/app_development/AppDevelopmentHero";
import AppDevelopmentExpertise from "../../components/our_expertise/app_development/AppDevelopmentExpertise";
import AppDevelopmentServices from "../../components/our_expertise/app_development/AppDevelopmentServices";
import EnhancingCustomerEngagement from "../../components/our_expertise/app_development/EnhancingCustomerEngagement";
import StreamliningBusinessOperations from "../../components/our_expertise/app_development/StreamliningBusinessOperations";
import AcceleratingTimeToMarket from "../../components/our_expertise/app_development/AcceleratingTimeToMarket";
import WhyChooseAppDevelopment from "../../components/our_expertise/app_development/WhyChooseAppDevelopment";

export default function AppDevelopmentPage() {
  return (
    <>
      <AppDevelopmentHero />
      <AppDevelopmentExpertise />
      <AppDevelopmentServices />
      <EnhancingCustomerEngagement />
      <StreamliningBusinessOperations />
      <AcceleratingTimeToMarket />
      <WhyChooseAppDevelopment />
    </>
  );
} 