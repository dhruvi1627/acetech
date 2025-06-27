import React from "react";
import { motion } from "framer-motion";

export default function TalentHeroSection({
  titleMain,
  titleSub,
  middleText,
  highlightText,
}) {
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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 font-bebas w-full max-w-5xl">
        {/* First row */}
        <motion.div
          className="text-white tracking-wide flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 
                     justify-center sm:justify-start text-center sm:text-left"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <motion.div
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
            variants={fadeInVariant}
            custom={1}
          >
            {titleMain}
          </motion.div>
          <motion.div
            className="hidden sm:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide sm:pt-2 md:pt-4"
            variants={fadeInVariant}
            custom={2}
          >
            {titleSub}
          </motion.div>
        </motion.div>

        {/* Second row */}
        <motion.div
          className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mt-2 sm:mt-0 
                     flex justify-center sm:justify-end text-center sm:text-right"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div>{middleText}</div>
        </motion.div>

        {/* Third row */}
        <motion.div
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wide mb-12 sm:mb-16 md:mb-20 mt-4 sm:mt-0 
                     flex justify-center text-center"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <div className="bg-[#e156e6] bg-clip-text text-transparent">
            {highlightText}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="w-6 h-8 sm:w-8 sm:h-12 border-2 border-white rounded-full flex justify-center items-center"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-bounce"></div>
      </motion.div>
    </div>
  );
}
