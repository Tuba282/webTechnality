"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function FeaturedProject() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <section ref={ref} className="w-full py-24 bg-white overflow-hidden">

            {/* Heading - CONSISTENT STYLE */}
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: true }}
                className="max-w-[90%] mx-auto sm:max-w-[70%] text-center mb-20"
            >
                <div className="flex items-center justify-center gap-5 my-6">
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                    <span
                        className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide"
                        style={{ wordSpacing: "3px" }}
                    >
                        Project Spotlight
                    </span>
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                </div>

                <h2 className="font-light lg:text-6xl text-4xl sm:text-3xl">
                    Eye<span className="text-gray-400">Catcher</span>
                </h2>
            </motion.div>

            {/* Immersive Project Display */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative w-full h-[70vh] md:h-[85vh] rounded-[2rem] overflow-hidden group shadow-2xl">
                    {/* Parallax Image */}
                    <motion.div style={{ scale }} className="w-full h-full relative">
                        <motion.img
                            style={{ y }}
                            src="https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962"
                            alt="Featured Project"
                            className="w-full h-[130%] object-cover absolute top-[-15%]"
                        />
                        {/* Stronger Gradient Overlay for Text Visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-700" />
                    </motion.div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-8 z-20">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-3 mb-6"
                            >
                                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium shadow-lg">
                                    UI/UX Design
                                </span>
                                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium shadow-lg">
                                    Mobile App
                                </span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-white text-lg md:text-2xl font-light leading-relaxed drop-shadow-md"
                            >
                                Redefining the salon experience with a seamless booking platform.
                                Where beauty meets technology in a stunning interface.
                            </motion.p>
                        </div>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-black shadow-xl group-hover:scale-110 transition-transform duration-300"
                        >
                            <ArrowUpRight size={32} strokeWidth={1.5} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
