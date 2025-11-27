"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useInView } from "framer-motion";

const Counter = ({ value, suffix }) => {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 40, stiffness: 60 });
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref} className="inline-block">
            {displayValue}
            {suffix}
        </span>
    );
};

export default function Stats({ data }) {
    return (
        <section className="w-full py-32 bg-white border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-20">

                {/* Heading - CONSISTENT STYLE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-[90%] mx-auto sm:max-w-[70%] text-center"
                >
                    <div className="flex items-center justify-center gap-5 my-6">
                        <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                        <span
                            className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide"
                            style={{ wordSpacing: "3px" }}
                        >
                            Impact
                        </span>
                        <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                    </div>

                    <h2 className="font-light lg:text-6xl text-4xl sm:text-3xl">
                        Numbers that <span className="text-gray-400">Define Us</span>
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 w-full max-w-5xl">
                    {data.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center text-center relative group"
                        >
                            {/* Vertical Divider (Hidden on mobile, visible on desktop between items) */}
                            <div className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-gray-100 ${index === 0 ? 'hidden' : ''}`} />

                            <div className="w-full">
                                <div className="text-7xl md:text-8xl font-light text-gray-900 tracking-tighter mb-4">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-sm font-medium uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors duration-300">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
