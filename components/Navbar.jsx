"use client";
import React, { useState, useEffect } from "react";
import { LuAlignCenter } from "react-icons/lu";
import gsap from "gsap";
import { FiMail, FiInstagram, FiLinkedin, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import MegaMenuServices from "./MegaMenuServices"; // <-- import your MegaMenu

const Navbar = () => {
  const [bar, setBar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const timelineRef = React.useRef(null);

  // mega menu state
  const [showMega, setShowMega] = useState(false);
  const showMegaMenu = () => setShowMega(true);
  const hideMegaMenu = () => setShowMega(false);

  const handleBar = () => setBar(!bar);

  const handleClose = () => {
    setIsClosing(true);
    if (timelineRef.current) {
      timelineRef.current.reverse();
    }
    setTimeout(() => {
      setBar(false);
      setIsClosing(false);
    }, 800);
  };

  useEffect(() => {
    if (bar) {
      timelineRef.current = gsap.timeline();
      timelineRef.current.to("#full", { duration: 0.5, top: 0 });
      timelineRef.current.from(".navBar li", { x: -100, duration: 0.5, stagger: 0.2, opacity: 0 }, 0);
    }
  }, [bar]);

  const iconVariants = {
    hidden: { x: 12, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative">
      {/* Top bar */}
      <div className="w-full mx-auto max-w-7xl flex justify-between gap-4 items-center py-4 px-4 sm:px-6 z-5">
        {/* Logo */}
        <div className="logo">
          <img src="/logoBlackAsset2.png" alt="Logo" className="w-[200px] lg:w-[300px]" />
        </div>

        {/* Hamburger Bar */}
        <div className="flex items-center">
          <LuAlignCenter
            onClick={handleBar}
            className="text-2xl cursor-pointer hover:opacity-75 transition-opacity"
          />
        </div>
      </div>

      {/* Fullscreen Menu */}
      {bar && (

        <motion.div
          id="full"
          className="fixed -top-full left-0 w-full h-screen z-50 rounded-b-3xl bg-black text-white p-6 overflow-y-auto"
          initial={{ top: "-100%" }}
          animate={isClosing ? { top: "-100%" } : { top: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >


          <AnimatePresence>
            {showMega && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-20 left-0 bg-gray-100 rounded-4xl p-5  z-[999]"
                onMouseEnter={showMegaMenu}
                onMouseLeave={hideMegaMenu}
              >
                <MegaMenuServices />
              </motion.div>
            )}
          </AnimatePresence>
          
            {/* Header inside menu */}
          <div className="flex justify-between gap-3 items-start py-4 px-2 sm:px-4 mb-8">
            <div className="logo">
              <img src="/logowhiteAsset1.png" alt="Logo" className="w-[250px] lg:w-[300px]" />
            </div>
            <IoClose
              className="text-3xl cursor-pointer hover:opacity-75 transition-opacity"
              onClick={handleClose}
            />
          </div>

          {/* Content */}
          <div className="w-full min-h-[70vh] flex justify-end items-end">
            {/* Social icons */}
            <div className="w-[60%] justify-between hidden xl:flex lg:flex">
              <motion.div
                className="flex gap-3 sm:gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[FiMail, FiUser, FiLinkedin, FiInstagram].map((IconComp, idx) => (
                  <motion.div
                    key={idx}
                    variants={iconVariants}
                    className="w-10 h-10 border rounded-full flex items-center justify-center 
                      border-white text-white transition-all duration-300 cursor-pointer 
                      hover:border-gray-300 hover:text-[#e4e1e19a]"
                  >
                    <IconComp size={18} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Nav links */}
            <div className="w-full text-right">
              <ul className="navBar  overflow-hidden">
                <li className="cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-extrabold tracking-tighter">
                   <Link href="/home" className="transition">
                   Home
                  </Link>
                </li>
                <li className="cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-extrabold tracking-tighter">
                   <Link href="/about" className="transition">
                   About
                  </Link>
                </li>

                {/* SERVICES with hover mega menu */}
                <li
                  className="relative group cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-extrabold tracking-tighter"
                  onMouseEnter={showMegaMenu}
                  onMouseLeave={hideMegaMenu}
                >
                  <Link href="/services" className="transition">
                    Services
                  </Link>
                </li>

                <li className="cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-extrabold tracking-tighter">
                   <Link href="/portfolio" className="transition">
                   Portfolio
                  </Link>
                </li>
                <li className="cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-extrabold tracking-tighter">
                   <Link href="/contact" className="transition">
                   Contact Us
                  </Link>
                </li>
                <li className="cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-extrabold tracking-tighter">
                   <Link href="/faqs" className="transition">
                   FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
