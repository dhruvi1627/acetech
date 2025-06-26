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
          backgroundPosition: "right -230px top 10px, right center",
          backgroundSize: "500px auto, cover",
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

      {/* SECTION: COLLABORATIVE TALENT + WHO WE ARE with colorBgLeft */}
      <div
        className="bg-no-repeat bg-transparent w-full h-auto flex flex-col items-center"
        style={{
          backgroundImage: `url(${bgCapsule}), url(${colorBgLeft})`,
          backgroundPosition: `left -250px top 150px, left center`,
          backgroundSize: `400px auto, 200 cover`,
        }}
      >
        {/* COLLABORATIVE TALENT */}
        <CollaborativeTalent />

        {/* WHO WE ARE + colorBg (shared with Expertise) */}
        <div
          className="w-full bg-no-repeat bg-transparent"
          style={{
            backgroundImage: `url(${colorBg})`,
            backgroundPosition: "right center",
            backgroundSize: "cover",
          }}
        >
          <WhoWeAre />

          {/* EXPERTISE with additional decor2Startup */}
          <div
            className="w-full bg-no-repeat bg-transparent"
            style={{
              backgroundImage: `url(${decor2Startup})`,
              backgroundPosition: "right -350px top 10px",
              backgroundSize: "auto",
            }}
          >
            <Expertise />
          </div>
        </div>
      </div>
    </>
  );
}
