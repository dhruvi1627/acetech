import React from "react";
import TalentHero from "../components/Talents/TalentsHero";
import talentAceImage from "../assets/images/Talents/Talent-Ace-Tech-Inside-840x263.png";
import talentBg from "../assets/images/Talents/ai-bg-screw.webp";
import colorBg from "../assets/images/bg-gr-1-startup.png";
import colorBgLeft from "../assets/images/bg_gr_3_startup.png";
import Expertise from "../components/Expertise";
import decor2Startup from "../assets/images/decor_2_startup.webp";
import WhoWeAre from "../components/WhoWeAre";
import CollaborativeTalent from "../components/Talents/CollaborativeTalent";
import bgCapsule from "../assets/images/Talents/ai-bg-capsule-300x300.webp";

export default function TalentPage() {
  return (
    <>
      {/* HERO SECTION WITH RESPONSIVE BACKGROUND */}
      <div
        className="bg-no-repeat bg-transparent"
        style={{
          backgroundImage: `url(${talentBg}), url(${colorBg})`,
          backgroundPosition: "right -200px top -50px, right center",
          backgroundSize: "300px auto, cover", // Adjust sizes for responsiveness
        }}
      >
        <TalentHero />
      </div>

      {/* ACE TECH IMAGE */}
      <div className="w-full flex justify-center items-center bg-transparent">
        <img
          src={talentAceImage}
          alt="Ace Tech Logo"
          className="w-full h-auto"
        />
      </div>

      {/* COLLABORATIVE TALENT SECTION */}
      <div
        className="bg-no-repeat bg-transparent w-full h-auto justify-center items-center flex"
        style={{
          backgroundImage: `url(${bgCapsule}), url(${colorBgLeft})`,
          backgroundPosition: "left -200px top 80px, left center",
          backgroundSize: "250px auto, cover",
        }}
      >
        <CollaborativeTalent />
      </div>

      {/* WHO WE ARE */}
      <div className="bg-transparent">
        <WhoWeAre />
      </div>

      {/* EXPERTISE SECTION */}
      <div
        className="bg-no-repeat bg-transparent"
        style={{
          backgroundImage: `url(${decor2Startup}), url(${colorBg})`,
          backgroundPosition: "right -300px top 10px, right center",
          backgroundSize: "200px auto, cover",
        }}
      >
        <Expertise />
      </div>
    </>
  );
}
