"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiCode, FiUsers, FiCpu, FiSmartphone, FiLayers, FiTrendingUp } from "react-icons/fi";

const cards = [
    {
        Icon: FiGlobe,
        title: "Web Design",
        desc: "Create stunning, responsive and attractive user interfaces that captivate your audience and drive engagement."
    },
    {
        Icon: FiCode,
        title: "Development",
        desc: "Build robust frontend and backend solutions with cutting-edge technologies for seamless performance."
    },
    {
        Icon: FiUsers,
        title: "UX Strategy",
        desc: "User-centered research and testing to ensure your product delivers exceptional experiences."
    },
    {
        Icon: FiCpu,
        title: "Cloud & DevOps",
        desc: "Scalable cloud architectures and DevOps practices to optimize your infrastructure and deployment."
    },
    {
        Icon: FiSmartphone,
        title: "Mobile Apps",
        desc: "Native and hybrid mobile solutions that work flawlessly across iOS and Android platforms."
    },
    {
        Icon: FiLayers,
        title: "API Integration",
        desc: "Seamless integration of third-party APIs and services to extend your application capabilities."
    },
    {
        Icon: FiTrendingUp,
        title: "Digital Marketing",
        desc: "Data-driven marketing strategies to boost your online presence and maximize ROI."
    },
];

export default function ServiceCards() {
    return (
        <section aria-label="Our Services" className="relative py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Solutions crafted to grow your business — clean, fast, secure, and designed with excellence in mind.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        },
                    }}
                >
                    {cards.map((card, index) => (
                        <motion.article
                            key={index}
                            tabIndex={0}
                            className="group relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl cursor-pointer transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 overflow-hidden"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            whileFocus={{ y: -8, transition: { duration: 0.3 } }}
                            role="button"
                            aria-label={`Learn more about ${card.title}`}
                        >
                            {/* Background overlay that slides in on hover */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 ease-out rounded-2xl"
                                aria-hidden="true"
                            />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <motion.div
                                    className="mb-5 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gray-100 group-hover:bg-white group-focus:bg-white transition-all duration-500"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <card.Icon className="w-7 h-7 md:w-8 md:h-8 text-gray-700 group-hover:text-gray-900 group-focus:text-gray-900 transition-colors duration-500" />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white group-focus:text-white transition-colors duration-500 mb-3">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-200 group-focus:text-gray-200 transition-colors duration-500 leading-relaxed flex-grow">
                                    {card.desc}
                                </p>

                                {/* Decorative corner element */}
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-200 group-hover:border-white group-focus:border-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-500 rounded-tr-xl" aria-hidden="true" />
                            </div>

                            {/* Hover glow effect */}
                            <div
                                className="absolute -inset-1 bg-gradient-to-r from-gray-600 via-gray-800 to-black rounded-2xl opacity-0 group-hover:opacity-20 group-focus:opacity-20 blur-xl transition-opacity duration-500"
                                aria-hidden="true"
                            />
                        </motion.article>
                    ))}
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-300 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
        </section>
    );
}
