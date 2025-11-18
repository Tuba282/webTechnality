"use client"
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer design, branding, and development services tailored to your business goals.",
    },
    {
        question: "How long does a project take?",
        answer: "Timelines vary, but most projects are completed within 2–6 weeks depending on scope.",
    },
    {
        question: "Do you offer revisions?",
        answer: "Yes, we include structured feedback rounds to ensure everything aligns with your vision.",
    },
    {
        question: "What services do you offer?",
        answer: "We offer design, branding, and development services tailored to your business goals.",
    },

    {
        question: "How long does a project take?",
        answer: "Timelines vary, but most projects are completed within 2–6 weeks depending on scope.",
    },
    {
        question: "Do you offer revisions?",
        answer: "Yes, we include structured feedback rounds to ensure everything aligns with your vision.",
    },
];

export const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto  bg-[#D3D3D3]"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[90%] mx-auto sm:max-w-[70%] text-center lg:py-20 py-10"
            >
                <div className="flex items-center justify-center gap-5 my-6">
                    <div className="h-[1px] w-16 sm:w-28 bg-[#898989] opacity-40"></div>
                    <span className="lg:text-[16px] italic tracking-wider text-[#8e8e8e]" style={{ wordSpacing: "3px" }}>
                        FAQ
                    </span>
                    <div className="h-[1px] w-16 sm:w-28 bg-[#898989] opacity-40"></div>
                </div>
                <h4 className="lg:text-[37px] text-2xl text-center sm:text-6xl leading-tight">
                    Your Questions, Answered
                </h4>
            </motion.div>

            {/* Content */}
            <div className="max-w-6xl pt-15 mx-auto lg:p-10 flex flex-col lg:flex-row gap-16 p-2 relative">

                <div>
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto bg-[#ececec59] rounded-3xl shadow-xl p-2 lg:rotate-[-4deg]"
                    >
                        <div className="mx-auto bg-[#eaeaeaa2] rounded-3xl shadow-xl lg:px-10 py-4 flex flex-col gap-10 relative">
                            {/* Author */}
                            <div className="flex items-center gap-3 p-1">
                                <div className="w-19 h-19 rounded-full bg-[#eaeaeae9] text-white flex items-center justify-center text-sm font-bold">
                                    <img
                                        src="https://framerusercontent.com/images/tdMAAOQgGX3QdjxUBBKpxISknGU.png?scale-down-to=512&width=1024&height=1024"
                                        alt="Logo"
                                        className="lg:w-15 lg:h-15 w-9 h-9 sm:w-10 sm:h-10 rounded-full drop-shadow-md"
                                    />
                                </div>
                                <div className="flex flex-col text-sm">
                                    <span className="font-semibold text-gray-900">Have more questions?</span>
                                    <span className="font-semibold text-gray-900">Book a free discovery call</span>
                                </div>
                            </div>

                            {/* Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="bg-white rounded-full overflow-hidden"
                            >
                                <button className="lg:w-[300px] justify-center w-full flex items-center gap-4 m-1 bg-black text-white px-2 py-2 rounded-full shadow-lg hover:opacity-100 active:scale-95 transition-opacity duration-300">
                                    <img src="/favicon.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md p-1" />
                                    Book a Meeting
                                    <GoArrowRight size={22} />
                                </button>
                            </motion.div>

                            {/* Email */}
                            <p className="mx-auto text-center lg:text-[16px] italic tracking-wider text-[#8e8e8e]">
                                Or, email me at{" "}
                                <a href="mailto:hello@denqid.com" className="text-black hover:underline">
                                    hello@WebTechnality.com
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div>
                    {/* Right Side: FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 flex lg:w-2xl flex-col  border-[#ababab] border-t border-b gap-6 "
                    >
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="border-[#ababab]  border-t py-6"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between text-left"
                                    >
                                        <span className="text-gray-800 font-medium text-base sm:text-lg">{item.question}</span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-[#9f9f9f]"
                                        >
                                            <FiPlus size={20}  />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-4 text-gray-600 text-sm sm:text-base"
                                            >
                                                {item.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};