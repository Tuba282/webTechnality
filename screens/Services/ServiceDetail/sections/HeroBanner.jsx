"use client";

import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import SplitText from "@/components/ui/SplitText";

export default function HeroBanner({ data }) {
    if (!data) return null;

    return (
        <section className="relative min-h-[70vh] py-5 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-400 via-black to-gray-500">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-20 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-20 right-20 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 text-center">
                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                >
                    <span className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full text-gray-200 text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                        <SplitText
                            text={data.subtitle}
                            className=""
                            delay={10}
                            tag="span"
                        />
                    </span>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <BlurText
                        text={data.title}
                        className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight justify-center"
                        delay={10}
                        animateBy="words"
                    />
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-10"
                >
                    <SplitText
                        text={data.description}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        delay={10}
                        tag="p"
                    />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <motion.a
                        href={data.cta.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-all duration-300"
                    >
                        <span>{data.cta.text}</span>
                        <motion.svg
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
