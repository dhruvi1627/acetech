import React from "react";
import DedicatedTeam from "../../components/Talents/dedicatedteam/DedicatedTeam";
import DedicatedTeamContent from "../../components/Talents/dedicatedteam/DedicatedTeamContent";
import WhatIsDedicatedTeam from "../../components/Talents/dedicatedteam/WhatIsDedicatedTeam";
import HowTeamWorks from "../../components/Talents/dedicatedteam/HowTeamWorks";
import Benefits from "../../components/Talents/dedicatedteam/BenefitsDedicatedTeam";
import WhyDedicatedTeam from "../../components/Talents/dedicatedteam/WhyDedicatedTeam";

export default function DedicatedTeamPage() {
  return (
    <>
        <DedicatedTeam/>
        <DedicatedTeamContent/>
        <WhatIsDedicatedTeam/>
        <HowTeamWorks/>
        <Benefits/>
        <WhyDedicatedTeam/>
    </>
  );
}
