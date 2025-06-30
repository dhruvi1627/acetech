import React from "react";
import { motion } from "framer-motion";
import heroTalent from "../../assets/images/talents/AI-network-revolution-and-connectivity.png";

export default function TalentsHero() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="py-10 md:py-20">
      <div className="text-white font-roboto flex flex-col items-center tracking-wider px-4 max-w-5xl mx-auto">
        {/* First Row */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-start max-w-5xl">
          <motion.div
            className="relative mt-4 hidden md:block"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="relative inline-block">
              <p className="bg-[#9752e5] rounded-lg p-3 text-center font-roboto">
                Discover Our Talent Hub Now!
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={29}
                height={29}
                viewBox="0 0 29 29"
                className="absolute -top-4 -right-4 z-10"
              >
                <g
                  id="sldr-quote"
                  data-name="Group 45099"
                  transform="translate(-79 -147)"
                >
                  <circle
                    id="Ellipse_467"
                    data-name="Ellipse 467"
                    cx={14.5}
                    cy={14.5}
                    r={14.5}
                    transform="translate(79 147)"
                    fill="#E156E6"
                  />
                  <g
                    id="Group_45108"
                    data-name="Group 45108"
                    transform="translate(-1.585 0.234)"
                  >
                    <path
                      id="Path_6168"
                      data-name="Path 6168"
                      d="M57.648,13.366C56.974,10.954,55.311,9.2,53.694,9.2a2.221,2.221,0,0,0-.386.034.256.256,0,0,0-.2.322l.333,1.19a.26.26,0,0,0,.258.187h.026c.6,0,1.7.9,2.254,2.9.022.079.043.16.063.245a2.919,2.919,0,0,0-2.053-.193,2.878,2.878,0,1,0,1.55,5.543,3.216,3.216,0,0,0,2.134-2.355A6.876,6.876,0,0,0,57.648,13.366Z"
                      transform="translate(43.365 146.564)"
                      fill="#fcfcfc"
                    />
                    <path
                      id="Path_6169"
                      data-name="Path 6169"
                      d="M1.81,9.206a2.22,2.22,0,0,0-.386.033.257.257,0,0,0-.2.322l.333,1.19a.258.258,0,0,0,.258.187h.026c.6,0,1.7.9,2.254,2.9.022.08.043.161.063.245A2.919,2.919,0,0,0,2.1,13.886a2.878,2.878,0,1,0,1.55,5.543,3.217,3.217,0,0,0,2.134-2.355,6.877,6.877,0,0,0-.022-3.706C5.09,10.956,3.427,9.206,1.81,9.206Z"
                      transform="translate(88.584 146.561)"
                      fill="#fcfcfc"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="font-bebas md:ml-auto"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <p className="text-4xl md:text-6xl lg:text-[120px] uppercase leading-none">
              REVOLUTIONIZING
            </p>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center max-w-5xl">
          <motion.div
            className="font-bebas"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <p className="text-4xl md:text-6xl lg:text-[120px] uppercase leading-none">
              SKILL MATCHING
            </p>
          </motion.div>
          <motion.div
            className="md:ml-auto hidden md:block"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <img
              src={heroTalent}
              alt="Ace Tech Logo"
              className="w-32 md:w-60 h-auto"
            />
          </motion.div>
        </div>

        {/* Third Row */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end max-w-5xl">
          <motion.div
            className="order-2 md:order-1 mb-4 hidden md:block"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <p className="text-[#a8a8a9] text-center md:text-left text-lg md:text-xl">
              Connect with Top Talent for Seamless
              <br />
              Project Success, Growth, and Innovation
            </p>
          </motion.div>
          <motion.div
            className="font-bebas order-1 md:order-2 md:ml-auto"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={6}
          >
            <p className="text-4xl md:text-6xl lg:text-[120px] uppercase leading-none">
              AND SOLUTIONS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
