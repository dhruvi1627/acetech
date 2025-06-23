import React from "react";
import PairToPair from "../../components/Talents/pairtopair/PairToPair";
import PairToPairContent from "../../components/Talents/pairtopair/PairToPairContent";
import WhatIsPairToPair from "../../components/Talents/pairtopair/WhatIsPairToPair";
import AtiWorks from "../../components/Talents/pairtopair/AtiWorks";
import Benefits from "../../components/Talents/pairtopair/BenefitsTalent";
import Ati from "../../components/Talents/pairtopair/WhyAti";

export default function PairToPairPage() {
  return (
    <>
      <PairToPair /> 
      <PairToPairContent/>
      <WhatIsPairToPair/>
      <AtiWorks/>
      <Benefits/>
      <Ati/>
    </>
  );
}
