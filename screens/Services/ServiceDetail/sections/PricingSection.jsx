"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function PricingSection({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                        {data.title}
                    </h2>
                    {data.subtitle && (
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            {data.subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className={`relative group ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
                        >
                            {/* Highlighted Badge */}
                            {plan.highlighted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.3 }}
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                                >
                                    <span className="px-4 py-1 bg-white text-black text-sm font-semibold rounded-full shadow-lg">
                                        Recommended
                                    </span>
                                </motion.div>
                            )}

                            {/* Card */}
                            <div className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-300 ${plan.highlighted
                                    ? 'bg-white/10 border-white shadow-2xl shadow-white/30'
                                    : 'bg-white/5 border-white/10 hover:border-white/50 hover:bg-white/10'
                                }`}>
                                {/* Glow on Hover */}
                                <div className={`absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${plan.highlighted ? 'opacity-20' : ''
                                    }`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Plan Name */}
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        {plan.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-6">
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-bold text-white">
                                                {plan.price}
                                            </span>
                                            <span className="text-gray-400">
                                                {plan.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, fIndex) => (
                                            <motion.li
                                                key={fIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: index * 0.15 + fIndex * 0.05
                                                }}
                                                className="flex items-start gap-3"
                                            >
                                                <FiCheck className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-300">
                                                    {feature}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <motion.a
                                        href="/contact"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`block w-full py-4 text-center font-semibold rounded-xl transition-all duration-300 ${plan.highlighted
                                                ? 'bg-white text-black shadow-lg shadow-white/50 hover:shadow-xl hover:shadow-white/60'
                                                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                                            }`}
                                    >
                                        Get Started
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-0 w-96 h-96 bg-gray-700 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-600 rounded-full blur-3xl"
                />
            </div>
        </section>
    );
}
