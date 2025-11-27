"use client"
import React from 'react'
import { motion } from 'framer-motion'
import DiagonalText from "@/components/DiagonalScroller";
import Diagonal2D from '@/components/Diagnol2D';
import CircularText from '@/components/ui/CircularText';

const cards = [
    {
        img: "/spare-1.jpeg",
        circleImg: "/CURVE.png",
        widImg: "/trans-(1).png",
        title: <>What is <span className="text-gray-600">Web Technality</span></>,
        desc: "Web Technality is a thorough digital solutions company that deals with the vertical of website designing, development, and marketing while having a focus on the amalgamation of technological proficiency and creativity. Our multicultural team has a focus on full-stack development, frontend optimizations and UI UX, backend work, and cloud solutions. Thus, we use the best practices in technology and framework to provide reliable and sustainable solutions in the current digital era.",
        reverse: false,
    },
    {
        img: "/spare-2.jpeg",
        circleImg: "/CURVE.png",
        widImg: "/trans-(2).png",
        title: <>Your Digital<span className="text-gray-600"> Success</span></>,
        desc: "Technology has continued to advance in the digital age, creating challenges that need to be addressed with help from professionals and creativity. At Web Technality, we enable users to build advanced frameworks, cloud architectures, and modern software development frameworks to revolutionize their online presence. It also means that we do not only provide the best solution for your current problem but also for the problems you will face in the future. Our work adheres to the principles of responsive design, PWA, and microservices to build effective, manageable, and focused digital solutions that bring tangible values to businesses.",
        reverse: true,
    },
];

export default function AboutAbout() {
    const floatVariants = (custom) => ({
        initial: { y: 0, opacity: 0, scale: 0.8 },
        animate: {
            y: [-10, 10, -10],
            opacity: 1,
            scale: 1,
            transition: {
                y: {
                    duration: 3 + custom * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                },
                opacity: { duration: 0.6, ease: "easeOut" },
                scale: { duration: 0.6, ease: "easeOut" }
            }
        }
    });
    const fadeUp = {
        hidden: { opacity: 0, y: 25 },
        show: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut", delay },
        }),
    };
    return (
        <section className="w-full px-6 py-10 lg:py-16">

            <DiagonalText />
            {/* <Diagonal2D/> */}
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: true }}
                className="max-w-[90%] mx-auto my-6 md:my-10 sm:max-w-[70%] text-center"
            >
                <div className="flex items-center justify-center gap-5 my-6">
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                    <span
                        className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide"
                        style={{ wordSpacing: "3px" }}
                    >
                        Who we are
                    </span>
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                </div>

                <h2 className="font-light lg:text-6xl text-4xl sm:text-3xl">
                    <span className="text-black">Where Digital Vision Meets </span>
                    <span className="text-gray-500"> Smart Innovation </span>
                </h2>
            </motion.div>
            <div className="max-w-7xl mx-auto lg:mt-10 flex flex-col gap-16">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col lg:flex-row ${card.reverse ? "lg:flex-row-reverse" : ""
                            } items-center gap-8 lg:gap-16`}
                    >
                        {/* Image Section */}
                        <div className="relative w-full lg:w-1/2">
                            <img
                                src={card.img}
                                alt="main"
                                className="rounded-lg w-full! h-[400px]! lg:h-[650px]! object-cover shadow"
                            />
                            {/* Rotating Circle */}
                            <CircularText
                                text="Web --- Technality  ---- "
                                onHover="speedUp"
                                spinDuration={20}
                                className=""
                            />
                        </div>
                        <div className="relative w-full lg:w-1/2 flex flex-col items-start">
                            <h2 className="text-3xl lg:text-5xl font-normal  mb-3">
                                {card.title}
                            </h2>
                            {
                                idx === 1 && (
                                    <motion.img
                                        src={card.widImg}
                                        className="absolute -bottom-60 left-0 hidden xl:block"
                                        alt="webTech"
                                        width={173}
                                        variants={floatVariants(idx)}
                                        initial="initial"
                                        animate="animate"
                                    />
                                )
                            }
                            <p className=" text-sm sm:text-base md:text-lg text-gray-600 tracking-wide  font-light mt-6">{card.desc}</p>


                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}