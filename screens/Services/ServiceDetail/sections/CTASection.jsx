"use client";

import { motion } from "framer-motion";

export default function CTASection({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-20 md:py-28 bg-black overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-10 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl"
            />
            <motion.figure
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full flex items-center justify-center relative"
            >
                <motion.img
                    src={'/steel.png'}
                    alt="3D rendered design showcasing modern web technology"
                    className="lg:block hidden absolute top-0 right-0 w-80 h-80 object-contain drop-shadow-2xl  animate-spin pointer-events-none select-none"
                    whileHover={{ scale: 1.02 }}
                    style={{ animationDuration: "8s" }}
                    transition={{ type: "spring", stiffness: 300 }}
                />

                {/* Decorative elements */}
                <div className="absolute top-1/4 -left-8 w-16 h-16 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.figure>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
                >
                    {data.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
                >
                    {data.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.a
                        href={data.buttonLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full shadow-2xl hover:shadow-white/30 transition-all duration-300"
                    >
                        <span>{data.buttonText}</span>
                        <motion.svg
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                    </motion.a>
                </motion.div>

                {/* Additional Info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 text-white/70 text-sm"
                >
                    No credit card required • Free consultation • Quick response
                </motion.p>
            </div>
        </section>
    );
}
