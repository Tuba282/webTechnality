"use client";
import React from "react";
import { motion } from "framer-motion";
import BlurText from "./ui/BlurText";

// --------------------
// Animation Variants
// --------------------
const oddCard = {
    hidden: { opacity: 0, x: -80, rotate: -3, scale: 0.9 },
    show: {
        opacity: 1,
        x: 0,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const evenCard = {
    hidden: { opacity: 0, x: 80, rotate: 3, scale: 0.9 },
    show: {
        opacity: 1,
        x: 0,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// --------------------
// Process Steps Data
// --------------------
const steps = [
    {
        number: "1",
        title: "Discover",
        desc: "We uncover what drives your brand through purpose clarity, audience insight, and business focus.",
    },
    {
        number: "2",
        title: "Request",
        desc: "We analyze your market, understand your competitors, and identify your strongest opportunities.",
    },
    {
        number: "3",
        title: "Create",
        desc: "We design a distinctive identity using voice, visuals, and storytelling to build customer connection.",
    },
    {
        number: "4",
        title: "Activate",
        desc: "We launch your brand across channels to ensure long-term consistency, clarity, and growth.",
    },
];

export default function OurProcess() {
    return (
        <div className=" w-full">

            {/* ----------------------------- */}
            {/* TOP SECTION — PROCESS STEPS  */}
            {/* ----------------------------- */}

            <section className="py-20">
                {/* Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    className="max-w-[90%] mx-auto sm:max-w-[70%] text-center"
                >
                    <div className="flex items-center justify-center gap-5 my-6">
                        <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                        <span
                            className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide"
                            style={{ wordSpacing: "3px" }}
                        >
                            Our Process, Explained
                        </span>
                        <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                    </div>

                    <h2 className="font-light lg:text-6xl text-4xl sm:text-3xl">
                        Here’s how it works
                    </h2>
                </motion.div>

                {/* Steps Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 mt-14 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            variants={i % 2 === 0 ? oddCard : evenCard}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className={`
                mt-10
                ${i % 2 === 1 ? "sm:mt-24" : "sm:mt-10"}
                ${i % 4 === 1 || i % 4 === 3 ? "lg:mt-24" : "lg:mt-10"}
              `}
                        >
                            {/* Outer Border */}
                            <div className="bg-gray-100 rounded-2xl shadow-xl p-2">
                                {/* Inner Card */}
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 h-[330px] flex flex-col justify-between">
                                    <p className="text-5xl font-medium">{step.number}</p>

                                    <div className="mt-auto">
                                        <h3 className="font-semibold text-lg">{step.title}</h3>
                                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ----------------------------- */}
            {/* BOTTOM SECTION — TESTIMONIALS */}
            {/* ----------------------------- */}

            <section className="py-28">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 relative">

                    {/* LEFT TESTIMONIAL */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="border-0 lg:border-e-2 border-gray-400 flex flex-col gap-10"
                    >
                        <div className="flex flex-row lg:w-[80%] w-[85%]  gap-6">
                            
                           <BlurText
                                text=" Working with Denqid was unbelivable. He instantly understood our vision and translated it into a sleek, intuitive Website. The process felt effortless, and the results exceeded our expectations."
                                delay={100}
                                animateBy="words"
                                direction="bottom"
                                className="font-medium leading-relaxed text-gray-800"
                            />

                               
                            <p className=" text-gray-400 text-4xl">❞</p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                                <img
                                    src="https://framerusercontent.com/images/X6BbZTbMzON4di73zb6boGXZqY4.webp?width=1402&height=1698"
                                    alt="testimonial"
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="font-semibold text-gray-900">David Krzemien</span>
                                <span className="text-[#898989]">FeuersteinCars</span>
                            </div>
                        </div>

                        <div className="h-[130px] hidden lg:block "></div>
                    </motion.div>

                    {/* RIGHT TESTIMONIAL */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col gap-10"
                    >
                        <div className="h-[130px] hidden lg:block "></div>

                        <div className="flex flex-row lg:w-[80%] w-[85%]  gap-6">
                           <BlurText
                                text=" WebTechnality brings clarity to chaos. His design work is not only beautiful but deeply strategic. He helped us rebrand from the ground up, and our audience response has been perfect."
                                delay={100}
                                animateBy="words"
                                direction="bottom"
                                className="font-medium leading-relaxed text-gray-800"
                            />
                           
                            <p className=" text-gray-400 text-4xl">❞</p>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                                <img
                                    src="https://framerusercontent.com/images/NGUnzdCZPVCva9uLIesIEup6J4.jpg?width=526&height=634"
                                    alt="testimonial"
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="font-semibold text-gray-900">David Krzemien</span>
                                <span className="text-[#898989]">FeuersteinCars</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
