import React from "react";
import ServiceHero from "../components/Services/ServiceHero";
import Approach from "../components/Services/Approach";
import Expertise from "../components/Expertise";
import Ati from "../components/about_us/Ati";

export default function TalentPage() {
  return (
    <>
      <ServiceHero />
      <Expertise />
      <Approach />
      <Ati />
    </>
  );
}
