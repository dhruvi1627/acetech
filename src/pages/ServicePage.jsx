import React from "react";
import ServiceHero from "../components/Services/ServiceHero";
import Approach from "../components/Services/Approach";
import Expertise from "../components/Expertise";
import Ati from "../components/about_us/Ati";
import HeroBg from "../assets/images/services/svgviewer-png-output.png";
import CreatveApproch from "../assets/images/services/Creative-approch.png";

export default function ServicePage() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundPosition: "left -150px top 450px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "400px auto",
        }}
      >
        <ServiceHero />
        <Expertise />
      </div>
      <div
        style={{
          backgroundImage: `url(${CreatveApproch})`,
          backgroundPosition: "Right 50px top 70px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "300px auto",
        }}
      >
        <Approach />
      </div>
      <Ati />
    </>
  );
}
