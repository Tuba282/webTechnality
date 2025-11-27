"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "Puls",
        category: "Wellness & Fitness",
        image: "https://framerusercontent.com/images/hSwT5bZsymf6RUhRvIEtNbSbEo.png?width=3000&height=1962",
        size: "large", // For staggered layout control
    },
    {
        title: "EyeCatcher",
        category: "Beauty & Style",
        image: "https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962",
        size: "small",
    },
    {
        title: "F&l Tax",
        category: "Financial Agency",
        image: "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        size: "small",
    },
    {
        title: "Pfeiffer",
        category: "Real Estate",
        image: "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
        size: "large",
    },
    {
        title: "Lumina",
        category: "SaaS Platform",
        image: "https://framerusercontent.com/images/hSwT5bZsymf6RUhRvIEtNbSbEo.png?width=3000&height=1962",
        size: "large",
    },
    {
        title: "Elevate",
        category: "Growth Marketing",
        image: "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        size: "small",
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function PortfolioGrid() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="w-full py-24 bg-white relative">

            {/* Heading - PRESERVED AS REQUESTED */}
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: true }}
                className="max-w-[90%] mx-auto sm:max-w-[70%] text-center mb-20"
            >
                <div className="flex items-center justify-center gap-5 my-6">
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                    <span
                        className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide"
                        style={{ wordSpacing: "3px" }}
                    >
                        Our Recent Work
                    </span>
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                </div>

                <h2 className="font-light lg:text-6xl text-4xl sm:text-3xl">
                    Selected Case <span className="text-gray-400">Studies</span>
                </h2>
            </motion.div>

            {/* Staggered Grid */}
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`group relative cursor-pointer ${
                                // Stagger effect: Push every second item down on desktop
                                index % 2 === 1 ? "md:mt-24" : ""
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Floating Action Button */}
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col items-start relative">
                                <div className="overflow-hidden">
                                    <h3 className="text-3xl font-light text-gray-900 mb-2 relative inline-block">
                                        {project.title}
                                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </h3>
                                </div>
                                <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
                                    {project.category}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
