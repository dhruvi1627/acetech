import React from "react";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Blogs from "../components/Blogs";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Expertise from "../components/Expertise";
import WhoWeAre from "../components/WhoWeAre";
import footerbgstartup from "../assets/images/footer-bg-startup.png";
import decor2Startup from "../assets/images/decor_2_startup.webp";
import colorBg from "../assets/images/bg-gr-1-startup.png";
import decor_1_startup from "../assets/images/decor_1_startup.webp";
import leftBgColor from "../assets/images/bg_gr_3_startup.png";
import rightBgColor from "../assets/images/bg-gr-4-startup.png";

export default function HomePage() {
  return (
    <>
      <div
        className="bg-no-repeat hide-bg-sm"
        style={{
          backgroundImage: `
      url(${decor_1_startup}),
      url(${decor2Startup}),
      url(${colorBg}),
      url(${leftBgColor}),
      url(${rightBgColor})
    `,
          backgroundPosition: `
      left -250px top 600px,   /*✅ decor_1_startup */
      right -400px top 1300px, /*✅ decor2Startup */
      right top -200px,        /* ✅ colorBg */
      left top -400px,         /* ✅ leftBgColor */
      right top 800px  /* ✅ rightBgColor, behind decor2Startup */
    `,
          backgroundRepeat:
            "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
          backgroundSize: "auto, auto, auto, auto, auto",
        }}
      >
        <Hero />
        <Work />
        <Benefits />
        <WhoWeAre />
        <Expertise />
      </div>

      <Testimonials />
      <div className="bg-transparent relative">
        <div
          className="hide-bg-sm"
          style={{
            backgroundImage: `
            url(${decor2Startup}),
            url(${colorBg})
          `,
            backgroundPosition: `
            right -450px top 1000px,
            right center
          `,
            backgroundSize: "auto, auto",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <AboutUs />
          <Blogs />
          <div className="mt-[-400px] -z-10">
            <img
              src={footerbgstartup}
              alt="footerbgstartup"
              className="w-full mt-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
