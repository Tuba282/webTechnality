"use client";
import { motion } from "framer-motion";
import React from "react";
import { AnimatedLetters } from "./SplitTextGSAP";
import HeroSwiper from "./HeroSwiper";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200 px-4 text-center">
      {/* ---- Floating Boxes ---- */}




      {/* ---- Main Text ---- */}
      <div className="md:w-[750px] sm:w-100  z-10 flex flex-wrap justify-between gap-2 items-center my-4">
        <AnimatedLetters
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          delay={1.2}
          text="Brands"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[Mulish] font-semibold text-black mb:10 sm:mb-10"
        />

        <motion.div
          initial={{ scale: 0, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="-rotate-6 border-3 border-black bg-white/90 w-24 h-16 sm:w-32 sm:h-24 rounded-3xl md:rounded-4xl shadow-black shadow-md flex items-center justify-center mb:10 sm:mb-10"
        >
          <HeroSwiper />
        </motion.div>

        <AnimatedLetters initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          delay={1.5}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-sans font-light text-[#737373] mb:10 sm:mb-10"
          text="Grow"
        />
        <AnimatedLetters
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          delay={1.9}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-sans font-light text-[#737373]"
          text="Fast"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="rotate-6 border-3 border-black bg-[#262626] overflow-hidden w-24 h-16 sm:w-32 sm:h-24 rounded-3xl md:rounded-4xl shadow-black shadow-md flex items-center justify-center"
        >
          {/* <HeroMarquee/> */}
          <marquee className="" behavior="smooth" direction="left">
            <div className="flex! items-center gap-x-20">
              
              <span className="flex! items-center text-[#848484] text-xl sm:text-4xl font-light"><img src="./framer.png" alt="" className="w-8 h-8 object-cover!" /> Framer Motion</span>
              <span className="flex! items-center text-[#848484] text-xl sm:text-4xl font-light"><img src="./webflow-icon.png" alt="" className="w-8 h-8 object-cover!" />Webflow</span>
              <span className="flex! items-center text-[#848484] text-xl sm:text-4xl font-light"><img src="./contra.png" alt="" className="w-8 h-8 object-cover!" />Contra</span>
              <span className="flex! items-center text-[#848484] text-xl sm:text-4xl font-light">Jitter</span>
            </div>
            </marquee>
        </motion.div>
        <AnimatedLetters
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, }}
          delay={2.2}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-sans  font-semibold text-black "
          text="With us"
        />

      </div>



    </section>
  );
};

export default Hero;


/*

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.6 }}
        className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
      >
        We don’t just make brands pretty — we craft smart design that fuels real
        business growth.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="mt-8 px-6 sm:px-8 py-3 bg-black text-white text-sm sm:text-base rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-800 transition-all"
      >
        <span>Book a Meeting</span>
        <span className="text-lg sm:text-xl">→</span>
      </motion.button>
*/ 