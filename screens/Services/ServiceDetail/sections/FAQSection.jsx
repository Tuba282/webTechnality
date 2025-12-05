"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQSection({ data }) {
    if (!data) return null;

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
                        {data.title}
                    </h2>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {data.questions.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            className="group"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg hover:shadow-gray-900/10 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                                        {faq.q}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        {openIndex === index ? (
                                            <FiMinus className="w-6 h-6 text-gray-900" />
                                        ) : (
                                            <FiPlus className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                                        )}
                                    </motion.div>
                                </div>

                                {/* Answer */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? "auto" : 0,
                                        opacity: openIndex === index ? 1 : 0
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                    className="overflow-hidden"
                                >
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-20 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20" />
            </div>
        </section>
    );
}
