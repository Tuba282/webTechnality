"use client";

import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

export default function CTASection2({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
                >
                    {/* Content Container */}
                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
                        {/* Left Side - 3D Geometric Shape */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex items-center justify-center order-2 lg:order-1"
                        >
                            {/* Animated 3D Polyhedron */}
                            <motion.div
                                animate={{
                                    rotateY: [0, 360],
                                    rotateX: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="relative w-64 h-64 md:w-80 md:h-80"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/40 to-gray-500/40 rounded-full blur-3xl" />

                                {/* 3D Geometric SVG */}
                                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                                    <defs>
                                        <linearGradient id="polyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#e5e7eb" />
                                            <stop offset="50%" stopColor="#9ca3af" />
                                            <stop offset="100%" stopColor="#4b5563" />
                                        </linearGradient>
                                        <filter id="metallic">
                                            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                                            <feOffset dx="2" dy="2" result="offsetblur" />
                                            <feComponentTransfer>
                                                <feFuncA type="linear" slope="0.5" />
                                            </feComponentTransfer>
                                            <feMerge>
                                                <feMergeNode />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Icosahedron-like shape */}
                                    <g filter="url(#metallic)">
                                        {/* Front faces */}
                                        <polygon points="100,30 140,70 100,90" fill="url(#polyGradient)" opacity="0.9" stroke="#374151" strokeWidth="1" />
                                        <polygon points="100,30 60,70 100,90" fill="url(#polyGradient)" opacity="0.8" stroke="#374151" strokeWidth="1" />
                                        <polygon points="60,70 100,90 80,130" fill="url(#polyGradient)" opacity="0.7" stroke="#374151" strokeWidth="1" />
                                        <polygon points="140,70 100,90 120,130" fill="url(#polyGradient)" opacity="0.75" stroke="#374151" strokeWidth="1" />
                                        <polygon points="80,130 100,170 120,130" fill="url(#polyGradient)" opacity="0.85" stroke="#374151" strokeWidth="1" />

                                        {/* Side faces */}
                                        <polygon points="60,70 40,110 80,130" fill="url(#polyGradient)" opacity="0.6" stroke="#374151" strokeWidth="1" />
                                        <polygon points="140,70 160,110 120,130" fill="url(#polyGradient)" opacity="0.65" stroke="#374151" strokeWidth="1" />

                                        {/* Inner structure */}
                                        <line x1="100" y1="30" x2="100" y2="90" stroke="#1f2937" strokeWidth="2" opacity="0.4" />
                                        <line x1="60" y1="70" x2="140" y2="70" stroke="#1f2937" strokeWidth="2" opacity="0.4" />
                                        <line x1="80" y1="130" x2="120" y2="130" stroke="#1f2937" strokeWidth="2" opacity="0.4" />
                                    </g>
                                </svg>
                            </motion.div>

                            {/* Orbiting Elements */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 15 + i * 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute inset-0"
                                    style={{
                                        transformOrigin: "center",
                                    }}
                                >
                                    <div
                                        className="absolute w-3 h-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full shadow-lg"
                                        style={{
                                            left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                                            top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Right Side - Text Content */}
                        <div className="space-y-6 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
                                    Ready to Start?
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                            >
                                {data.title || "Transform Your Ideas Into Reality"}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg text-gray-600 leading-relaxed"
                            >
                                {data.description || "Let's collaborate to bring your vision to life. Our expert team is ready to deliver exceptional results tailored to your needs."}
                            </motion.p>

                            {/* Features List */}
                            <motion.ul
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="space-y-3"
                            >
                                {["Fast turnaround time", "Dedicated support team", "Scalable solutions"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </motion.ul>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="pt-4"
                            >
                                <Link href={data.buttonLink || "/contact"}>
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-black transition-all duration-300"
                                    >
                                        {data.buttonText || "Get Started Now"}
                                        <GoArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
