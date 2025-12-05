"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import Diagonal2D from "./Diagnol2D";
import BlurText from "./ui/BlurText";

export default function PricingCardDark() {
    const [selectedPlan, setSelectedPlan] = useState("Design");

    const plans = {
        Design: "40€",
        Branding: "",
    };

    const designFeatures = [
        "Online communication",
        "Unlimited design",
        "Fast turnaround",
        "Fixed hour rate",
        "Flexible scope",
        "Stop anytime",
    ];

    const brandingFeatures = [
        "High-impact execution",
        "Tailored scope & deliverables",
        "Full documentation & assets",
        "One-off fee or milestone billing",
        "End-to-end collaboration",
        "Workshops & reviews",
    ];

    function shuffleOddFeatures(features) {
        const oddItems = features.filter((_, i) => i % 2 !== 0);
        const shuffled = [...oddItems].sort(() => Math.random() - 0.5);
        return features.map((item, i) => (i % 2 !== 0 ? shuffled.shift() : item));
    }

    const [shuffledFeatures, setShuffledFeatures] = useState(designFeatures);

    useEffect(() => {
        const featuresToUse = selectedPlan === "Design" ? designFeatures : brandingFeatures;
        const finalList = selectedPlan === "Branding" ? shuffleOddFeatures(featuresToUse) : featuresToUse;
        setShuffledFeatures(finalList);
    }, [selectedPlan]);

    return (
        <div className="relative md:p-10 px-2 py-5">
            <Diagonal2D className={`z-0`} />
            <div>
                {/* Hero Text */}
                <div className="max-w-[90%] mx-auto sm:max-w-[70%] text-center">
                    <div className="flex items-center justify-center gap-5 my-6">
                        <div className="h-px w-16 bg-gray-600 opacity-40"></div>
                        <span className="text-gray-400 text-2xl font-[Charm-Regular] italic tracking-wide" style={{ wordSpacing: "3px" }}>
                            Pricing
                        </span>
                        <div className="h-px w-16 bg-gray-600 opacity-40"></div>
                    </div>
                </div>
                <h4 className="font-light lg:text-6xl text-4xl sm:text-3xl text-center">
                    <span className="text-gray-500 text-shadow-xs text-shadow-black">Fixed</span> <span className="text-white">Price,</span> <span className="text-gray-500 text-shadow-xs text-shadow-black">Zero</span> <span className="text-white">Limits</span>
                </h4>
            </div>

            <div className="max-w-6xl mt-16 mx-auto z-20 relative bg-gradient-to-br from-[#6A7282] to-[#232323] rounded-3xl shadow-2xl shadow-black/50 p-2">
                <div className="max-w-6xl pt-15 mx-auto bg-gradient-to-br from-[#6A7282]/80 via-[#232323]/80 to-[#232323]/80 backdrop-blur-xl rounded-3xl shadow-xl p-2 lg:p-10 flex flex-col lg:flex-row gap-10 relative z-30 border border-gray-400/50">
                    {/* Left Side */}
                    <div className="flex-1 flex flex-col justify-between">
                        {/* Toggle */}
                        <div className="flex flex-col lg:items-start items-center gap-4 mb-6">
                            <div className="flex items-center gap-5">
                                <span
                                    className={`cursor-pointer font-medium transition-colors duration-300 ${selectedPlan === "Design" ? "text-white" : "text-gray-500 text-shadow-xs text-shadow-black"
                                        }`}
                                    onClick={() => setSelectedPlan("Design")}
                                >
                                    Design
                                </span>

                                <motion.div
                                    className="relative inline-flex items-center cursor-pointer"
                                    initial={false}
                                    animate={{
                                        backgroundColor: selectedPlan === "Branding" ? "#4B5563" : "#6B7280"
                                    }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setSelectedPlan(selectedPlan === "Design" ? "Branding" : "Design")}
                                    style={{ width: "48px", height: "24px", borderRadius: "9999px", padding: "2px" }}
                                >
                                    <motion.div
                                        className="bg-white w-5 h-5 rounded-full shadow-lg"
                                        layout
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        style={{ x: selectedPlan === "Branding" ? 24 : 0 }}
                                    />
                                </motion.div>

                                <span
                                    className={`cursor-pointer font-medium transition-colors duration-300 ${selectedPlan === "Branding" ? "text-white" : "text-gray-500 text-shadow-xs text-shadow-black"
                                        }`}
                                    onClick={() => setSelectedPlan("Branding")}
                                >
                                    Branding
                                </span>
                            </div>

                            {/* Price */}
                            <motion.div
                                key={selectedPlan}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-5xl sm:text-6xl mb-6 text-white font-semibold"
                            >
                                {plans[selectedPlan]}
                                {selectedPlan === "Design" ? (
                                    <span className="text-gray-400 font-light lg:text-6xl text-4xl sm:text-3xl"> per Hour</span>
                                ) : (
                                    <div className="flex gap-2 pt-4 justify-start align-middle">
                                        <p className="text-gray-400 font-light lg:text-6xl text-4xl sm:text-3xl">from</p>
                                        <span className="text-white">6.500€</span>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Button */}
                        <div className="mt-10">
                            <div className="mt-2 text-sm text-green-400 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Available to work
                            </div>
                            <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="cursor-target flex items-center gap-4 mt-2 bg-white text-black px-2 py-2 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:shadow-white/20 active:scale-95 transition-all duration-300"
                            >
                                <img src="/favicon.png" alt="Logo" className="w-8 h-8 sm:w-10 drop-shadow-xs sm:h-10 drop-shadow-md p-1" />
                                Book a Meeting
                                <GoArrowRight size={22} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 0 }}
                        whileInView={{ rotate: 0 }}
                        className="flex-1 lg:w-5xl py-16 lg:ps-16 w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 shadow-2xl shadow-black/50 flex flex-col gap-6 lg:rotate-[1.5deg] border border-gray-800/50"
                    >
                        {/* Heading */}
                        <h3 className="text-lg font-semibold mb-4 text-white">What's included</h3>

                        {/* Feature List */}
                        <AnimatePresence mode="wait">
                            <motion.ul
                                key={selectedPlan}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-2"
                            >
                                {shuffledFeatures.map((feature, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                                        className="flex items-center gap-2 text-gray-300"
                                    >
                                        <span className="cursor-target border border-gray-600 flex justify-center align-middle pb-1 px-1 rounded-full text-gray-400 hover:border-gray-400 hover:text-white transition-colors duration-300">
                                            &nbsp;+&nbsp;
                                        </span>
                                        <span className="font-medium text-[14px] text-gray-400">{feature}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </AnimatePresence>

                        {/* Testimonial */}
                        <div className="mt-4 pt-10">
                            <AnimatePresence mode="wait">
                                <BlurText
                                    text="WebTechnality created a website for us that exceeded all expectations. Professional, creative, and reliable. No one could have done it better. He is simply the best designer in the World."
                                    delay={100}
                                    animateBy="words"
                                    direction="bottom"
                                    className="text-gray-400 mb-5 font-medium lg:w-[280px] lg:text-[14px] w-full"
                                />
                            </AnimatePresence>

                            {/* Author */}
                            <div className="flex items-center gap-3 p-1 mt-10">
                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-gray-700 text-white flex items-center justify-center text-sm font-bold">
                                    <img src="/favicon.png" alt="Logo" className="w-8 h-8 sm:w-10 drop-shadow-xs drop-shadow-white sm:h-10 drop-shadow-md p-1" />
                                </div>
                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold text-white">David Krzemien</span>
                                    <span className="text-gray-500 text-shadow-xs text-shadow-black">FeuersteinCars</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
