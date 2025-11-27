"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useInView } from "framer-motion";
import BlurText from "@/components/ui/BlurText";

export default function AboutStats() {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "10+", label: "Years Of Experience" },
    { value: "450+", label: "Satisfied Clients" },
    { value: "200+", label: "Team Members" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  // Counter animation
  useEffect(() => {
    if (!hasStarted) return;

    const intervals = stats.map((stat, idx) => {
      const target = parseInt(stat.value);
      let current = 0;
      const increment = target / 40;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[idx]);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = Math.floor(current);
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

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

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    }),
  };

  const data = [
    { label: "Projects Completed", value: 150, suffix: "+" },
    { label: "Happy Clients", value: 80, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative  overflow-hidden py-20 px-5 sm:px-10 lg:px-20"
      initial="hidden"
      whileInView="show"
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-20 justify-center items-center">
        {/* Header */}
        <motion.div
          className="text-center lg:text-left mb-16 relative "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="relative max-w-[90%] mx-auto my-6 md:my-10 sm:max-w-[70%] text-center"
          >
            <div className="flex items-center justify-center gap-5 my-6">
              <div className="h-px w-16 bg-[#898989] opacity-40"></div>
              <span
                className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide"
                style={{ wordSpacing: "3px" }}
              >
                A Track Record You Can Count On
              </span>
              <div className="h-px w-16 bg-[#898989] opacity-40"></div>
            </div>

            <h2 className="font-light lg:text-6xl text-4xl sm:text-3xl">
              <span className="text-black">Our Success Blueprint </span> <br />
              <span className="text-gray-500"> By The Numbers</span>
            </h2>
            <img
              src="/trans-(3).png"
              className="absolute -top-10 -left-50 hidden xl:block animate-spin pointer-events-none select-none"
              alt="WebTechnality"
              width={173}
              style={{ animationDuration: "6s" }}

            />
          </motion.div>




          <BlurText
            text="Every successful digital transformation is built on dedication, innovation,
            and consistent results. From enterprise applications to digital identities
            for startups, our work reflects deep expertise and a commitment to quality."
            delay={50}
            animateBy="words"
            direction="bottom"
            className=" text-sm text-center! sm:text-base md:text-lg text-gray-700 leading-tight tracking-wide w-full max-w-4xl font-light  mt-6"
          />
        </motion.div>

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
    </motion.section>
  );
}
