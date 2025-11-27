"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AOS from "aos";
import { FiMail, FiInstagram, FiLinkedin, FiUser } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

export default function Footer({ is_margin = true }) {
    const sectionRef = useRef(null);

    // AOS animations (initial load)
    useEffect(() => {
        if (typeof window !== "undefined") {
            AOS.init({ duration: 1200, once: true });
        }
    }, []);

    // Track scroll for smooth parallax effect
    const { scrollYProgress } = useScroll({ target: sectionRef });
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -150]); // scroll movement
    const smoothY = useSpring(yTransform, { stiffness: 90, damping: 28 });

    return (
        <section
            ref={sectionRef}
            className={`${is_margin ? "mt-16" : ""} relative w-full min-h-screen  footershade bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center px-5 sm:px-8`}>

            {/* Scroll + initial animation wrapper */}
            <motion.div
                style={{ y: smoothY }}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className=" flex flex-col items-center w-full"
            >
                {/* Hero Text */}
                <div className=" max-w-[90%] sm:max-w-[70%] text-center pt-42">
                    <div className=" flex items-center justify-center gap-5 my-6">
                        <div className=" h-px w-16 bg-[#898989] opacity-40"></div>
                        <span className=" text-white text-2xl font-[Charm-Regular] italic tracking-wide" style={{ wordSpacing: "3px" }}>
                            Available to work
                        </span>
                        <div className=" h-px w-16 bg-[#898989] opacity-40"></div>
                    </div>

                    <h1 className=" text-5xl sm:text-6xl lg:text-8xl leading-tight">
                        <span className=" text-white">Let’s </span>
                        <span className=" text-[#898989]">Connect</span>
                    </h1>

                    <p className=" text-white mt-4 text-base sm:text-lg">
                        Feel free to contact me if having any questions.
                    </p>
                    <p className=" text-white text-base sm:text-lg">
                        I’m available for new projects or just for chatting
                    </p>
                </div>

                {/* Call-to-Action Button */}
                <div className=" mt-10">
                    <motion.button
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="cursor-target flex items-center gap-4 bg-black text-white px-5 py-3 rounded-full shadow-lg hover:opacity-100 active:scale-95 transition-opacity duration-300"
                    >
                        <img src="/favicon.png" alt="Logo" className=" drop-shadow-sm drop-shadow-white w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md p-1" />
                        Book a Meeting
                        <GoArrowRight size={22} />
                    </motion.button>
                </div>
            </motion.div>

            {/* Footer */}
            <footer className=" w-full mt-24 mb-8 flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-8 px-4 sm:px-6 text-[#898989]">
                <div className=" flex flex-col md:flex-row gap-4 items-center text-sm">
                    <span className=" py-2 px-1 border-t border-b border-white text-white">© WebTechnality, 2025</span>
                    <span className=" hover:text-white py-2 cursor-pointer">Legal Notice</span>
                    <span className=" hover:text-white py-2 cursor-pointer">Privacy Policy</span>
                </div>

                <div className=" flex gap-3 sm:gap-4">
                    {[FiMail, FiUser, FiLinkedin, FiInstagram].map((IconComp, idx) => (
                        <div
                            key={idx}
                            className="cursor-target w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-all duration-300 cursor-pointer text-[#e4e1e19a]"
                        >
                            <IconComp size={18} />
                        </div>
                    ))}
                </div>
            </footer>
        </section>
    );
}
