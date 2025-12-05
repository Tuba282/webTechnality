"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
    FaCode,
    FaLaptopCode,
    FaMobileAlt,
    FaBullhorn,
    FaPaintBrush,
    FaRocket
} from "react-icons/fa";

const services = [
    {
        id: 1,
        slug: 'web-development',
        category: "WEB DEVELOPMENT",
        title: "Web Development",
        description: "We build robust, scalable web applications using cutting-edge technologies for optimal performance. We craft digital experiences that are not just functional, but unforgettable.",
        features: ["Frontend Development", "Backend Development", "Full Stack Development", "Web App Development"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        icon: FaLaptopCode,
        gradient: "from-gray-800 to-black"
    },
    {
        id: 2,
        slug: 'digital-marketing',
        category: "DIGITAL MARKETING",
        title: "Digital Marketing",
        description: "We deliver data-driven marketing strategies that boost your online presence and maximize ROI. We craft digital experiences that are not just functional, but unforgettable.",
        features: ["Social Media", "PPC Advertising", "SEO", "App Store Optimization"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        icon: FaBullhorn,
        gradient: "from-gray-700 to-gray-900"
    },
    {
        id: 3,
        slug: 'mobile-app-development',
        category: "MOBILE DEVELOPMENT",
        title: "Mobile App Development",
        description: "Native and hybrid mobile solutions that work flawlessly across iOS and Android platforms. We craft digital experiences that are not just functional, but unforgettable.",
        features: ["iOS Development", "Android Development", "Cross-Platform", "App Maintenance"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        icon: FaMobileAlt,
        gradient: "from-gray-600 to-gray-800"
    },
    {
        id: 4,
        slug: 'ui-ux-design',
        category: "UI/UX DESIGN",
        title: "UI/UX Design",
        description: "Create stunning, responsive and attractive user interfaces that captivate your audience and drive engagement. We craft digital experiences that are not just functional, but unforgettable.",
        features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        icon: FaPaintBrush,
        gradient: "from-gray-900 to-black"
    },
];


export default function ServiceCards() {
    return (
        <section aria-label="Our Services" className="relative py-16 md:py-20 lg:py-28 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Cards */}
                <div className="space-y-16 md:space-y-24 lg:space-y-32">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.id}
                            initial={{ opacity: 0, y: 80, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.46, 0.45, 0.94],
                                delay: index * 0.1
                            }}
                            viewport={{ once: false, margin: "-50px", amount: 0.3 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } gap-8 lg:gap-12 items-center`}
                        >
                            {/* Image Section */}
                            <motion.div
                                className="w-full lg:w-1/2 relative group"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: false }}
                                whileHover={{
                                    scale: 1.03,
                                    rotate: index % 2 === 0 ? 1 : -1,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    {/* Image */}
                                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 rounded-3xl transition-opacity duration-500"
                                        />

                                        {/* Overlay with icons */}
                                        <div className="absolute rounded-3xl inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40 flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                                transition={{
                                                    delay: 0.5,
                                                    duration: 0.8,
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 15
                                                }}
                                                whileHover={{
                                                    scale: 1.15,
                                                    rotate: 360,
                                                    transition: { duration: 0.6 }
                                                }}
                                                viewport={{ once: false }}
                                                className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl cursor-pointer`}
                                            >
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.1, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                >
                                                    <service.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-0 left-0 w-full h-full rounded-3xl">
                                            {/* Technology icons floating around */}
                                            <motion.div
                                                animate={{
                                                    y: [0, -10, 0],
                                                    rotate: [0, 5, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute top-8 left-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
                                            >
                                                <FaCode className="w-6 h-6 text-white" />
                                            </motion.div>

                                            <motion.div
                                                animate={{
                                                    y: [0, 10, 0],
                                                    rotate: [0, -5, 0]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 0.5
                                                }}
                                                className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
                                            >
                                                <FaRocket className="w-6 h-6 text-white" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Gradient border effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                                </div>
                            </motion.div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                {/* Category Label */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    viewport={{ once: false }}
                                    className="flex items-center gap-3"
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 48 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        className={`h-[2px] bg-gradient-to-r ${service.gradient}`}
                                    />
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className={`text-xs md:text-sm font-bold tracking-wider bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                                    >
                                        {service.category}
                                    </motion.span>
                                </motion.div>

                                {/* Title */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.4,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    viewport={{ once: false }}
                                    whileHover={{
                                        x: 10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="text-3xl text-[#4A5565] md:text-4xl font-light lg:text-6xl text-4xl sm:text-3xl leading-tight cursor-pointer"
                                >
                                    {service.title}
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.5,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: false }}
                                    className="text-base md:text-lg text-gray-600 leading-relaxed"
                                >
                                    {service.description}
                                </motion.p>

                                {/* Feature Tags */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.6
                                            }
                                        }
                                    }}
                                    className="flex flex-wrap gap-3"
                                >
                                    {service.features.map((feature, idx) => (
                                        <motion.a href={`/services/${service.slug}`}
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 20, scale: 0.8 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 200,
                                                        damping: 15
                                                    }
                                                }
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                y: -4,
                                                transition: { duration: 0.2, ease: "easeOut" }
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`group relative px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-lg hover:border-transparent transition-all duration-300 cursor-pointer overflow-hidden`}
                                        >
                                            {/* Gradient background on hover */}
                                            <span className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />

                                            {/* Text */}
                                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </motion.a>
                                    ))}
                                </motion.div>

                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-gray-300 rounded-full blur-3xl opacity-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-gray-400 rounded-full blur-3xl opacity-10 pointer-events-none" aria-hidden="true" />
        </section>
    );
}
