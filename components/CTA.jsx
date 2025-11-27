"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA({
    title = "Ready to start your project?",
    subtitle = "Let's create something amazing together.",
    buttonText = "Get in Touch",
    link = "/contact",
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const [hovered, setHovered] = useState(false);

    return (
        <section ref={ref} className="w-full py-32 relative overflow-hidden bg-white">
            {/* Subtle Background Elements */}
            <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gray-100 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-[80px]" />
            </motion.div>

            <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[1px] w-8 bg-gray-300"></div>
                        <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">Next Steps</span>
                        <div className="h-[1px] w-8 bg-gray-300"></div>
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 tracking-tighter mb-6">
                        Let's build the <br />
                        <span className="font-[Italic-Mulish] text-gray-400">Future</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Magnetic Button Wrapper */}
                <motion.div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="relative group"
                >
                    <motion.a
                        href={link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-20 inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full text-xl font-medium overflow-hidden"
                    >
                        <span className="relative z-10">{buttonText}</span>
                        <motion.div
                            animate={{ x: hovered ? 5 : 0 }}
                            className="relative z-10"
                        >
                            <ArrowRight size={24} />
                        </motion.div>

                        {/* Fill Effect */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: hovered ? 1.5 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 bg-gray-800 rounded-full origin-center -z-0"
                        />
                    </motion.a>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-black/10 blur-xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
            </div>
        </section>
    );
}
