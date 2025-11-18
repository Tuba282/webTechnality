"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        title: "Puls",
        image: "https://framerusercontent.com/images/hSwT5bZsymf6RUhRvIEtNbSbEo.png?width=3000&height=1962",
        tags: ["Wellness", "Fitness"],
    },
    {
        title: "EyeCatcher",
        image: "https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962",
        tags: ["Beauty", "Hairs"],
    },
    {
        title: "F&l Tax",
        image: "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
        tags: ["Tax", "Agency"],
    },
    {
        title: "Pfeiffer",
        image: "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
        tags: ["RealEstate", "Properties"],
    }
];

export default function ProjectsSection() {
    const [cursor, setCursor] = useState(false);

    return (
        <section className="w-full py-20 relative overflow-hidden">
            {/* Custom Cursor */}
            {cursor && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="fixed z-[100] pointer-events-none w-24 h-24 rounded-full bg-black/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white text-xs"
                    style={{ left: cursor.x - 50, top: cursor.y - 50 }}
                >
                    <ArrowRight  className="text-md text-white/60"/>
                </motion.div>
            )}

            {/* Heading */}
            <div className="text-center mb-16">
                <div className="  text-gray-500 text-2xl font-[Charm-Regular] italic mb-4 tracking-wide flex justify-center items-center gap-4">
                    <div className=" h-px w-16 bg-[#898989] opacity-40"></div>
                    Our Projects
                    <div className=" h-px w-16 bg-[#898989] opacity-40"></div>
                </div>
                <h4 className=" font-light lg:text-6xl  text-4xl sm:text-3xl text-center mb-6">Recent Case <span className="text-gray-400">Studies</span></h4>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10 px-2 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="group relative p-4"
                    >
                        {/* IMAGE WRAPPER */}
                        <motion.div
                            className="rounded-xl overflow-hidden cursor-none"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 150, damping: 18 }}
                            onMouseMove={(e) =>
                                setCursor({ x: e.clientX, y: e.clientY })
                            }
                            onMouseEnter={() => setCursor(true)}
                            onMouseLeave={() => setCursor(false)}
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover"
                                whileHover={{ scale: 1.12 }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>

                        {/* TEXT */}
                        <div className="flex justify-between items-center mt-4">
                            <h4 className="text-lg font-[Mulish]">{project.title}</h4>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
