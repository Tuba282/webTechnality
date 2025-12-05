"use client";

import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

// Icon mapper to get the actual icon component
const getIcon = (iconName) => {
    const Icon = FaIcons[iconName] || SiIcons[iconName];
    return Icon || FaIcons.FaCode; // Fallback icon
};

export default function DigitalExcellence({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                        {data.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </motion.div>

                {/* Features Grid */}
                {data.features && data.features.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.features.map((feature, index) => {
                            const IconComponent = getIcon(feature.icon);

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1
                                    }}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:border-gray-900 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300"
                                >
                                    {/* Glow Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-5xl mb-4 text-gray-900"
                                        >
                                            <IconComponent className="w-12 h-12" />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-900/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-30" />
            </div>
        </section>
    );
}
