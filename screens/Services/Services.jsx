"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";

export default function ServicesSection() {
  const [active, setActive] = useState("design");

  const serviceData = {
    design: ["UI UX Design", "Web Design", "Brand Design"],
    development: ["Frontend Development", "Backend Development", "FullStack Development"],
    mobile: ["IOS App Development", "Android App Development", "Hybrid App"],
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-10"
      >
        Our <span className="text-pink-500">Services.</span>
      </motion.h2>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {/* Design */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("design")}
          className={`px-6 py-3 rounded-full border flex items-center gap-2 font-medium
          transition-all duration-300
          ${active === "design" ? "bg-pink-500 text-white shadow-md" : "bg-white text-gray-700"}`}
        >
          <FaPaintBrush className="text-pink-500" />
          Design
        </motion.button>

        {/* Development */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("development")}
          className={`px-6 py-3 rounded-full border flex items-center gap-2 font-medium
          transition-all duration-300
          ${active === "development" ? "bg-pink-500 text-white shadow-md" : "bg-white text-gray-700"}`}
        >
          <FaCode className="text-pink-500" />
          Development
        </motion.button>

        {/* Mobile App */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive("mobile")}
          className={`px-6 py-3 rounded-full border flex items-center gap-2 font-medium
          transition-all duration-300
          ${active === "mobile" ? "bg-pink-500 text-white shadow-md" : "bg-white text-gray-700"}`}
        >
          <FaMobileAlt className="text-pink-500" />
          Mobile App
        </motion.button>
      </div>

      {/* Animated List */}
      <motion.div
        key={active}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {serviceData[active].map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border-b pb-4"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {item}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
