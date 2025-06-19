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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Benefits />
      <WhoWeAre />
      <Expertise />
      <Testimonials />
      <AboutUs />
      <div className="bg-transparent relative">
        <div
          className=""
          style={{
            backgroundImage: `
            url(${decor2Startup}),
            url(${colorBg})
          `,
            backgroundPosition: `
            right -400px top 50px,
            right center
          `,
            backgroundSize: "auto, cover",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
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
