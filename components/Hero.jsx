"use client";
import { motion } from "framer-motion";
import React from "react";
import { AnimatedLetters } from "./SplitTextGSAP";
import HeroSwiper from "./HeroSwiper";
import { FaCircle } from "react-icons/fa";
import Button from "./Button";
import DiagonalText from "./DiagonalScroller";

const Hero = () => {

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 text-center">
      {/* ---- Floating Boxes ---- */}

    <DiagonalText className=""/>
      <motion.p
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-between gap-2 items-center py-2.5 px-3 bg-white rounded-3xl ">

        <FaCircle className="text-[#0CAD00]" size={8} />
        Avaible to work
      </motion.p>


      {/* ---- Main Text ---- */}
      <div className="md:w-[750px] sm:w-100  z-10 flex flex-wrap justify-between gap-2 items-center my-4">
        <AnimatedLetters
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          delay={1.2}
          text="Brands"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-sans  font-semibold text-black "
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



      <motion.p
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ duration: 0.9 }}
        delay={2.2}
        className="sm:w-[400] text-sm sm:text-base md:text-lg text-gray-600 leading-tight tracking-wide font-light max-w-xl mt-6"
      >
        We dont just make brands pretty — we craft smart design that fuels real business growth.
      </motion.p>
      <Button />

    </section>
  );
};

export default Hero;
