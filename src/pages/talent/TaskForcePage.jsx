import React from "react";
import TaskForce from "../../components/Talents/taskforce/TaskForce";
import TaskForceContent from "../../components/Talents/taskforce/TaskForceContent";
import WhatIsTaskForce from "../../components/Talents/taskforce/WhatIsTaskForce";
import HowTaskForceWorks from "../../components/Talents/taskforce/HowTaskForceWorks";
import Benefits from "../../components/Talents/taskforce/BenefitsTaskForce";
import WhyTaskForce from "../../components/Talents/taskforce/WhyTaskForce";

export default function DedicatedTeamPage() {
  return (
    <>
        <TaskForce/>
        <TaskForceContent/>
        <WhatIsTaskForce/>
        <HowTaskForceWorks/>
        <Benefits/>
        <WhyTaskForce/>
    </>
  );
}
