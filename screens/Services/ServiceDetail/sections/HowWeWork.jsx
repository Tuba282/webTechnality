"use client";

import { motion } from "framer-motion";

export default function HowWeWork({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
                        {data.title}
                    </h2>
                    {data.subtitle && (
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {data.subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Steps Timeline */}
                <div className="relative">
                    {/* Connecting Line - Hidden on mobile */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {data.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2
                                }}
                                className="relative"
                            >
                                {/* Step Card */}
                                <motion.div
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-900 hover:shadow-2xl hover:shadow-gray-900/20 transition-all duration-300"
                                >
                                    {/* Number Badge */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.2 + 0.3,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                        className="relative z-10 mb-6"
                                    >
                                        <div className="w-16 h-16 mx-auto bg-[#1D1D1D] rounded-full flex items-center justify-center shadow-lg shadow-gray-900/50 group-hover:shadow-xl group-hover:shadow-gray-900/60 group-hover:scale-110 transition-all duration-300">
                                            <span className="text-2xl font-bold text-white">
                                                {step.number}
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center group-hover:text-black transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Hover Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                </motion.div>

                                {/* Arrow Between Steps - Desktop Only */}
                                {index < data.steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.2 + 0.5
                                        }}
                                        className="hidden lg:block absolute top-20 -right-3 z-20"
                                    >
                                        <motion.svg
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="w-6 h-6 text-gray-900"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </motion.svg>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20" />
            </div>
        </section>
    );
}
