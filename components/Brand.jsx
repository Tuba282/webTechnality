"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { MdWindow } from "react-icons/md";
import { BiWindows } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAnimation } from "react-icons/md";
import { TbBrandArc } from "react-icons/tb";
import { TbBrandCtemplar } from "react-icons/tb";
import BlurText from "@/components/ui/BlurText";

const Brand = () => {
    const badgeVariantLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
        })
    }

    const badgeVariantRight = {
        hidden: { opacity: 0, x: 100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
        })
    }
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">

            {/* Background light streaks */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(115deg,#ffffff_0%,#e8e8e8_40%,#f3f3f3_100%)] opacity-70"></div> */}

            {/* LEFT BADGES */}
            <div className="absolute left-10 lg:left-20 xl:left-30 xxl:left-40 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 items-end">

                <motion.div
                    custom={0}
                    variants={badgeVariantLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="px-2 py-2 rounded-full rotate-6 backdrop-blur-xs bg-black/10 border border-white/10 "
                >
                    <div className="ps-1 pe-3 py-1 flex items-center gap-2 bg-white shadow-md  rounded-full">
                        <span className=" bg-orange-500 p-1 rounded-full"> <MdWindow className='text-white text-md' /></span>
                        <p className="font-medium">Design systems</p>
                    </div>
                </motion.div>
                <motion.div
                    custom={1}
                    variants={badgeVariantLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="px-2 py-2 w-[150px] -rotate-3 rounded-full backdrop-blur-xs bg-black/10 border border-white/10 "
                >
                    <div className="ps-1 pe-3 py-1 flex items-center gap-2 bg-white shadow-md  rounded-full">
                        <span className=" bg-[#464646] p-1 rounded-full"> <BiWindows className='text-white text-md' /></span>
                        <p className="font-medium">UX Design</p>
                    </div>
                </motion.div>
                <motion.div
                    custom={2}
                    variants={badgeVariantLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="px-2 py-2 w-[130px] -rotate-6 rounded-full backdrop-blur-xs bg-black/10 border border-white/10 "
                >
                    <div className="ps-1 pe-3 py-1 flex items-center gap-2 bg-white shadow-md  rounded-full">
                        <span className=" bg-[#05A9FF] p-1 rounded-full"> <IoSearch className='text-white text-md' /></span>
                        <p className="font-medium">Research</p>
                    </div>
                </motion.div>


            </div>

            {/* MAIN CENTER TEXT */}
            <div className="text-center px-10 relative z-10">
                <div className="text-gray-500 text-2xl font-[Charm-Regular] italic mb-4 tracking-wide flex justify-center items-center gap-4">
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                    Hello!
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                </div>

                <div className="w-full lg:w-[600px] xl:w-[760px] mx-auto">
                    <BlurText
                        text="We help brands grow with standout design, clear branding, and content that drives results."
                        delay={100}
                        animateBy="words"
                        direction="bottom"
                        className="font-light sm:text-5xl text-4xl text-center! inline-block!"
                    />
                </div>
            </div>

            {/* RIGHT BADGES */}
            <div className="absolute right-10 lg:right-20 xl:right-30 xxl:right-40 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6">

                <motion.div
                    custom={0}
                    variants={badgeVariantRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="px-2 py-2 rounded-full -rotate-6 backdrop-blur-xs bg-black/10 border border-white/10 "
                >
                    <div className="ps-1 pe-3 py-1 flex items-center gap-2 bg-white shadow-md  rounded-full">
                        <span className=" bg-orange-500 p-1 rounded-full"> <MdOutlineAnimation className='text-white text-md' /></span>
                        <p className="font-medium">Animation </p>
                    </div>
                </motion.div>
                <motion.div
                    custom={1}
                    variants={badgeVariantRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="px-2 py-2 w-[150px] rotate-3 rounded-full backdrop-blur-xs bg-black/10 border border-white/10 "
                >
                    <div className="ps-1 pe-3 py-1 flex items-center gap-2 bg-white shadow-md  rounded-full">
                        <span className=" bg-[#464646] p-1 rounded-full"> <TbBrandArc className='text-white text-md' /></span>
                        <p className="font-medium">Branding</p>
                    </div>
                </motion.div>
                <motion.div
                    custom={2}
                    variants={badgeVariantRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="px-2 py-2 w-[130px] rotate-6 rounded-full backdrop-blur-xs bg-black/10 border border-white/10 "
                >
                    <div className="ps-1 pe-3 py-1 flex items-center gap-2 bg-white shadow-md  rounded-full">
                        <span className=" bg-[#05A9FF] p-1 rounded-full"> <TbBrandCtemplar className='text-white text-md' /></span>
                        <p className="font-medium">Stratergy</p>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}

export default Brand