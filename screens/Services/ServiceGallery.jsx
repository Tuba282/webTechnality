"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const ServiceGallery = () => {
    const scrollRef = useRef(null);

    return (
        <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
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
                        Our Work Gallery
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our portfolio of stunning designs and innovative solutions
                    </p>
                </motion.div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    {/* Gradient Overlays for visual effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {cards.map((card, index) => (
                            <Card card={card} key={card.id} index={index} />
                        ))}
                    </div>
                </div>

                {/* Scroll Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                        Scroll horizontally to explore more
                    </p>
                </motion.div>
            </div>

            {/* Custom scrollbar hide styles */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

const Card = ({ card, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative flex-shrink-0 w-[350px] h-[450px] md:w-[400px] md:h-[500px] overflow-hidden rounded-2xl bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 snap-center"
        >
            {/* Background Image */}
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                        {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {card.description || "Explore this amazing design"}
                    </p>
                </motion.div>

                {/* Decorative Element */}
                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-500 z-30 pointer-events-none" />
        </motion.div>
    );
};

export default ServiceGallery;

const cards = [
    {
        url: "/services-img-(1).jpg",
        title: "Web Design",
        description: "Modern and responsive web interfaces",
        id: 1,
    },
    {
        url: "/services-img-(1).png",
        title: "Branding",
        description: "Unique brand identity solutions",
        id: 2,
    },
    {
        url: "/services-img-(1).webp",
        title: "UI/UX Design",
        description: "User-centered design approach",
        id: 3,
    },
    {
        url: "/services-img-(2).jpeg",
        title: "Development",
        description: "Cutting-edge web development",
        id: 4,
    },
    {
        url: "/services-img-(2).webp",
        title: "Mobile Apps",
        description: "Native and hybrid solutions",
        id: 5,
    },
    {
        url: "/services-img-(3).webp",
        title: "E-Commerce",
        description: "Powerful online stores",
        id: 6,
    },
    {
        url: "/services-img-(4).webp",
        title: "Marketing",
        description: "Digital marketing strategies",
        id: 7,
    },
    {
        url: "/services-img-(5).webp",
        title: "SEO",
        description: "Search engine optimization",
        id: 8,
    },
    {
        url: "/services-img-(6).webp",
        title: "Analytics",
        description: "Data-driven insights",
        id: 9,
    },
    {
        url: "/services-img-(7).webp",
        title: "Consulting",
        description: "Expert tech consulting",
        id: 10,
    },
    {
        url: "/services-img-(8).jpg",
        title: "Support",
        description: "24/7 customer support",
        id: 11,
    },
];