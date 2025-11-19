'use client'
import React, { useState, useEffect } from 'react'
import { LuAlignCenter } from "react-icons/lu";
import gsap from "gsap"
import { FiMail, FiInstagram, FiLinkedin, FiUser } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
// eslint-disable-next-line
import { motion } from "motion/react"
import { IoClose } from "react-icons/io5";
// import { SlBasketLoaded } from "react-icons/sl";

const Navbar = () => {
  const [bar, setBar] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const timelineRef = React.useRef(null);

  const handleBar = () => {
    setBar(!bar)
  }

  const handleClose = () => {
    setIsClosing(true)
    if (timelineRef.current) {
      timelineRef.current.reverse();
    }
    setTimeout(() => {
      setBar(false);
      setIsClosing(false);
    }, 800);
  }

  useEffect(() => {
    if (bar) {
      timelineRef.current = gsap.timeline();
      timelineRef.current.to("#full", {
        duration: 0.5,
        top: 0,
      });
      timelineRef.current.from(".navBar li", {
        x: -100,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0,
      }, 0);
    }
  }, [bar])

  const iconVariants = {
    hidden: { x: 12, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,   // <-- 1 by 1 delay
        delayChildren: 0.2       // slight delay before starting
      }
    }
  };
  return (
    <div className='relative'>
      <div className='w-full mx-auto max-w-7xl flex justify-between gap-4 items-center py-4 px-4 sm:px-6 z-5'>
        {/* Logo */}
        <div className="logo">
          <img src="/logoBlackAsset2.png" alt="Logo" className='w-[200px] lg:w-[300px]' />
        </div>

        {/* Hamburger Bar */}
        <div className="flex items-center">
          <LuAlignCenter
            onClick={handleBar}
            className='text-2xl cursor-pointer hover:opacity-75 transition-opacity'
          />
        </div>
      </div>
      {
        bar && (
          <motion.div
            id="full"
            className={`fixed -top-full left-0 w-full h-screen z-50 rounded-b-3xl bg-black text-white p-6 overflow-y-auto`}
            initial={{ top: "-100%" }}
            animate={isClosing ? { top: "-100%" } : { top: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className='flex justify-between gap-3 items-start py-4 px-2 sm:px-4 mb-8'>
              <div className="logo">
                <img src="/logowhiteAsset1.png" alt="Logo" className='w-[250px] lg:w-[300px]' />
              </div>
              <IoClose
                className='text-3xl cursor-pointer hover:opacity-75 transition-opacity'
                onClick={handleClose}
              />
            </div>

            <div className='w-full min-h-[70vh] flex justify-end items-end'>
              <div className='w-[60%] justify-between hidden xl:flex lg:flex'>
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
                      className="cursor-target w-10 h-10 border hover:border-gray-300 
                     rounded-full flex items-center justify-center 
                     border-white text-white transition-all duration-300 
                     cursor-pointer hover:text-[#e4e1e19a]"
                    >
                      <IconComp size={18} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              <div className='w-full text-right'>
                <ul className='navBar overflow-hidden'>
                  <li className='uppercas cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-light tracking-tighter'>Our Process</li>
                  <li className='uppercas cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-light tracking-tighter'>Case Studies</li>
                  <li className='uppercas cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-light tracking-tighter'>Services</li>
                  <li className='uppercas cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-light tracking-tighter'>Brand</li>
                  <li className='uppercas cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-light tracking-tighter'>Pricing</li>
                  <li className='uppercas cursor-pointer hover:text-[#BDBDBD] text-3xl xl:text-6xl my-1 font-light tracking-tighter'>FAQs</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )
      }
    </div>
  )
}

export default Navbar
