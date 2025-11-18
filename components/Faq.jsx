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
            className="w-full mx-auto bg-[#D3D3D3]"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[90%] mx-auto sm:max-w-[70%] text-center py-10 lg:py-20"
            >
                <div className="flex items-center justify-center gap-5 my-6">
                    <div className="h-px w-12 sm:w-16 bg-[#898989] opacity-40"></div>
                    <span className="text-gray-500 text-xl sm:text-2xl font-[Charm-Regular] italic tracking-wide">
                        FAQs
                    </span>
                    <div className="h-px w-12 sm:w-16 bg-[#898989] opacity-40"></div>
                </div>

                 <h4 className="font-light lg:text-6xl  text-4xl sm:text-3xl text-center ">
                   Your Questions, Answered
                </h4>
            </motion.div>

            {/* Content */}
            <div className="max-w-6xl mx-auto flex flex-col lg:px-10 md:px-10 sm:px-10 px-2 justify-around lg:flex-row lg:p-2 md:p-2 sm:p-2 p-0 lg:gap-25 gap-10">
                <div className="max-w-2xl mx-auto  lg:p-2 md:p-2 sm:p-2 p-0">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#ececec59] rounded-3xl shadow-xl p-2 mx-auto w-full sm:w-[80%] lg:w-[350px] lg:rotate-[-4deg]"
                    >
                        <div className="bg-[#eaeaeaa2] rounded-3xl shadow-xl p-6 flex flex-col gap-8">
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#eaeaea] flex items-center justify-center">
                                    <img
                                        src="https://framerusercontent.com/images/tdMAAOQgGX3QdjxUBBKpxISknGU.png"
                                        alt="Logo"
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
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
                                <button className="w-full flex items-center justify-center gap-3 bg-black text-white px-4 py-3 rounded-full shadow-lg active:scale-95 transition">
                                    <img
                                        src="/favicon.png"
                                        alt="Logo"
                                        className="w-8 h-8 sm:w-10 sm:h-10 p-1"
                                    />
                                    Book a Meeting
                                    <GoArrowRight size={22} />
                                </button>
                            </motion.div>

                            {/* Email */}
                            <p className="text-center text-sm sm:text-base italic tracking-wide text-[#8e8e8e]">
                                Or, email me at{" "}
                                <a href="mailto:hello@denqid.com" className="text-black hover:underline">
                                    hello@WebTechnality.com
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="lg:w-full md:w-[600px] sm:w-[400px] sx:w-[300px]   mx-auto  lg:p-2 md:p-2 sm:p-2 p-0">
                    {/* Right: FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full  border-t border-b border-[#ababab] flex flex-col   gap-4"
                    >
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="border-t border-[#ababab] py-4 "
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between"
                                    >
                                        <span className="text-gray-800 font-medium text-base sm:text-lg">
                                            {item.question}
                                        </span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-[#878787]"
                                        >
                                            <FiPlus size={20} />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-2 text-gray-600 text-sm sm:text-base"
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

        </motion.div >

    );
};