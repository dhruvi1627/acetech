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
      <div
        className="bg-no-repeat bg-transparent hidden md:block"
        style={{
          backgroundImage: `
                    url(${talentBg}),
                    url(${colorBg})
                  `,
          backgroundPosition: `
                          right -300px top -100px,
                          right center
                        `,
        }}
      >
        <TalentHero />
      </div>
      <div className="md:hidden">
        <TalentHero />
      </div>

      <div className="w-full flex justify-center items-center bg-transparent">
        <img
          src={talentAceImage}
          alt="Ace Tech Logo"
          className="w-full h-auto"
        />
      </div>
      <div
        className="bg-no-repeat bg-transparent w-full h-auto justify-center items-center hidden md:flex"
        style={{
          backgroundImage: `url(${bgCapsule}), url(${colorBgLeft})`,
          backgroundPosition: "left -300px top 100px, left center",
          backgroundSize: "500px auto, cover",
        }}
      >
        <CollaborativeTalent />
      </div>
      <div className="md:hidden">
        <CollaborativeTalent />
      </div>
      <div className="bg-transparent">
        <WhoWeAre />
      </div>
      <div
        className="bg-no-repeat bg-transparent hidden md:block"
        style={{
          backgroundImage: `
          url(${decor2Startup}),
          url(${colorBg})
        `,
          backgroundPosition: `
          right -400px top 10px,
          right center
        `,
        }}
      >
        <Expertise />
      </div>
      <div className="md:hidden">
        <Expertise />
      </div>
    </>
  );
}
