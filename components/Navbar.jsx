"use client"
import React, { useState, useEffect } from 'react'
import { LuAlignCenter } from "react-icons/lu";
import gsap from "gsap"
import { motion } from "motion/react"
import { IoClose } from "react-icons/io5";
 
export const Navbar = () => {
  const [bar, setBar] = useState(false)
  const timeline = gsap.timeline();
  const handleBar = () => {
    setBar(!bar)
  }


  useEffect(() => {

    timeline.to("#full", {
      duration: 0.5,
      top: 0,
    });
    timeline.from(".navBar li", {
      x: -100,
      duration: 0.5,
      stagger: 0.2,
      opacity: 0,
    });
  }, [timeline])
  return (
    <div className='relative'>
      <div className='w-full flex justify-center items-start lg:justify-between py-4 px-2 z-5'>
        <div className="logo w-[60%] flex justify-center lg:justify-between items-center">
          
          <img src="./wordLogo-white.jpeg" width="106" height="83" /> 
        </div>
        <div className="w-[50%] flex justify-between items-center py-2">
          <ul type="none" className="flex justify-between items-center gap-15">
            <li className='uppercase mx-2 tracking-tight text-sm font-[Helvetica] hidden xl:block'>Shop</li>
            <li className='uppercase mx-2 tracking-tight text-sm font-[Helvetica] hidden xl:block'>WHOLESALE</li>
            <li className='uppercase mx-2 tracking-tight text-sm font-[Helvetica] hidden xl:block'>Catering</li>
            <li className='uppercase mx-2 tracking-tight text-sm font-[Helvetica] hidden xl:block'>Donate</li>
            <LuAlignCenter onClick={handleBar} />
          </ul>
        </div>
      </div>
      {
        bar && (
          <div id="full" className={`absolute -top-[530%] left-0 w-[100%] min-h-[96vh] z-9 rounded-b-3xl bg-black text-white p-4`}>
            <div className='flex justify-between items-start py-4 px-4 '>
              <div className="logo w-[60%] ">
                <img src="./wordLogo-black.png" width="106" height="83" />
              </div>
              <div className="w-[50%] flex justify-between items-center py-2">
                <ul type="none" className="flex justify-between items-center gap-15">
                  <li className='uppercase mx-2 tracking-tight text-sm font-[Helvetica] hidden xl:block'>Shop</li>
                  <li className='uppercase mx-2 tracking-tight text-sm font-[Helvetica] hidden xl:block'>WHOLESALE</li>
                  <li className='uppercase mx-2 tracking-tight text-sm font-[Helvetica] hidden xl:block'>Catering</li>
                  <li className='uppercase mx-2 tracking-tight text-sm font-[Helvetica] hidden xl:block'>Donate</li>
                  <IoClose className='text-xl' id='close' onClick={() => { timeline.reverse() }} />
                  
                </ul>
              </div>
            </div>
            <div className='w-full min-h-[20vh]  flex justify-between items-end'>
              <div className='w-[60%] justify-between hidden xl:flex lg:flex '>
                <motion.ul className='hidden xl:block'
                  initial={{ x: 500 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut"
                  }}>
                  <h3 className='my-3 text-xl uppercase'>Conatct with us</h3>
                  <li className='text-sm hover:text-slate-400 transition-all '>Facebook</li>
                  <li className='text-sm hover:text-slate-400 transition-all text-purple-300 underline'>Instagram</li>
                  <li className='text-sm hover:text-slate-400 transition-all '>Twitter</li>
                  <li className='text-sm hover:text-slate-400 transition-all '>Linkedin</li>
                  <li className='text-sm hover:text-slate-400 transition-all '>YouTube</li>
                </motion.ul>
                <motion.ul className='hidden xl:block'
                  initial={{ x: 500 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut"
                  }}>
                  <h3 className='my-4 text-xl uppercase'>nitty gritties</h3>
                  <li className='text-sm hover:text-slate-400 transition-all '>Good Things FAQs</li>
                  <li className='text-sm hover:text-slate-400 transition-all '>Good Food FAQs</li>
                  <li className='text-sm hover:text-slate-400 transition-all '>Good Places</li>
                </motion.ul>
                <motion.ul className='hidden xl:block'
                  initial={{ x: 500 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 2,
                    ease: "easeOut"
                  }}>
                  <h3 className='my-4 text-xl uppercase'>Get started</h3>
                  <li className='text-sm hover:text-slate-400 transition-all '>Pathways</li>
                  <li className='text-sm hover:text-slate-400 transition-all '>Careers</li>
                </motion.ul>
              </div>
              <div className='w-[100%] md:w-[40%] text-right '>
                <ul className='navBar overflow-hidden'>
                  <li className='uppercase cursor-pointer hover:text-slate-400 text-3xl xl:text-6xl my-1 font-extrabold font-[Helvetica] tracking-tighter'>shop</li>
                  <li className='uppercase cursor-pointer hover:text-slate-400 text-3xl xl:text-6xl my-1 font-extrabold font-[Helvetica] tracking-tighter'>WHOLESALE</li>
                  <li className='uppercase cursor-pointer hover:text-slate-400 text-3xl xl:text-6xl my-1 font-extrabold font-[Helvetica] tracking-tighter'>Catering</li>
                  <li className='uppercase cursor-pointer hover:text-slate-400 text-3xl xl:text-6xl my-1 font-extrabold font-[Helvetica] tracking-tighter'>Impact</li>
                  <li className='uppercase cursor-pointer hover:text-slate-400 text-3xl xl:text-6xl my-1 font-extrabold font-[Helvetica] tracking-tighter'>Stories</li>
                  <li className='uppercase cursor-pointer hover:text-slate-400 text-3xl xl:text-6xl my-1 font-extrabold font-[Helvetica] tracking-tighter'>About</li>
                  <li className='uppercase cursor-pointer hover:text-slate-400 text-3xl xl:text-6xl my-1 font-extrabold font-[Helvetica] tracking-tighter'>Contact</li>
                  <li className='uppercase cursor-pointer hover:text-slate-400 text-3xl xl:text-6xl my-1 font-extrabold font-[Helvetica] tracking-tighter'>Donate</li>
                </ul>
              </div>

            </div>
          </div>
        )
      }
    </div>
  )
}
 