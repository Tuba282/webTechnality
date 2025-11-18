"use client";
import { motion } from "framer-motion";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{ duration: 0.9 }}
            delay={2.2}

              className="cursor-target relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity active:scale-95 bg-[#E7E7E7] shadow-xs shadow-black/30 mt-6 p-2.5 rounded-full"
        >
            <p   className=" text-sm flex justify-between gap-3 items-center px-3 py-2 md:py-2 md:px-4 rounded-full shadow text-white bg-black">
                <img src="/favicon.ico" alt="logo"   className=" w-6 h-6 md:w-10 md:h-10 drop-shadow-xs drop-shadow-white p-0.5" />
                Book a Meeting
                <GoArrowRight   className=" font-light" size={20} />
            </p>
        </motion.div>
    )
}

export default Button