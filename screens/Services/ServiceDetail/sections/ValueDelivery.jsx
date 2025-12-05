"use client";

import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// Icon mapper
const getIcon = (iconName) => {
    const Icon = FaIcons[iconName] || SiIcons[iconName];
    return Icon || FaIcons.FaCode;
};

export default function ValueDelivery({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-20 md:py-28 bg-[#1D1D1D]">
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
                        <p className="text-lg text-gray-400">
                            {data.subtitle}
                        </p>
                    )}
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.benefits.map((benefit, index) => {
                        const IconComponent = getIcon(benefit.icon);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                            >
                                {/* Glassmorphism Card */}
                                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-gray-500/0 group-hover:from-white/10 group-hover:to-gray-500/10 transition-all duration-300" />

                                    {/* Animated Border Glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-6xl mb-6 text-white"
                                        >
                                            <IconComponent className="w-14 h-14" />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                                            {benefit.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background Animated Orbs */}
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
                    className="absolute top-1/4 left-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl"
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
                    className="absolute bottom-1/4 right-10 w-96 h-96 bg-gray-600 rounded-full blur-3xl"
                />
            </div>
        </section>
    );
}
