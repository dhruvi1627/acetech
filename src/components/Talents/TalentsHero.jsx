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
            className="mt-4 hidden md:block"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <p className="bg-[#9752e5] rounded-lg p-3 text-center font-bebas inline-block">
              Discover Our Talent Hub Now!
            </p>
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
