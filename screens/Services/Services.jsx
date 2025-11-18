"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { RiPenNibFill } from "react-icons/ri";
import { RiCodeAiLine } from "react-icons/ri";

// ------------------- DATA -------------------
const serviceData = {
  design: [
    {
      title: "UI/UX Design",
      img: "https://www.webinventix.com/assets/ui-ux-DSSk79Mk.png",
    },
    {
      title: "Web Design",
      img: "https://www.webinventix.com/assets/web-d-L298IkdK.png",
    },
    {
      title: "Brand Design",
      img: "https://www.webinventix.com/assets/g-d-MPKilZI5.png",
    },
  ],
  development: [
    {
      title: "Frontend Development",
      img: "https://www.webinventix.com/assets/front-BxA9KzXq.png",
    },
    {
      title: "Backend Development",
      img: "https://www.webinventix.com/assets/back-CI9NY-18.png",
    },
    {
      title: "FullStack Development",
      img: "https://www.webinventix.com/assets/full-d6zy7CFq.png",
    },
  ],
  mobile: [
    {
      title: "IOS App Development",
      img: "https://www.webinventix.com/assets/01-C8GMlcxz.webp",
    },
    {
      title: "Android App Development",
      img: "https://www.webinventix.com/assets/03-CYaywmNA.webp",
    },
    {
      title: "Hybrid App",
      img: "https://www.webinventix.com/assets/01-BIiQ7qE-.webp",
    },
  ],
};

// -------------------------------------------------------

export default function Services() {
  const [active, setActive] = useState("design");

  return (
    <section className="lg:px-30 px-5 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div className="flex flex-col">
        <div className="max-w-[90%] mx-auto sm:max-w-[70%] text-center ">
          <div className="flex items-center justify-center gap-5 my-6">
            <div className="h-px w-16 bg-[#898989] opacity-40"></div>
            <span className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide" style={{ wordSpacing: "3px" }}>
              Digit Experince
            </span>
            <div className="h-px w-16 bg-[#898989] opacity-40"></div>
          </div>
          <h2 className="font-light lg:text-6xl  text-4xl sm:text-3xl text-center mb-6">
            Our <span className="text-gray-500">Services.</span>
          </h2>
          <p className="text-center font-[Mulish] font-light">As a top web development company, our services cover everything from unique web design to e-commerce development, mobile application development, or custom digital marketing strategies that would help bring your online business to a new level.</p>
        </div>
        <div className="">
          {/* Heading */}

          <img
            src="/wheel.png"
            className="lg:w-[300px] lg:h-[300px] w-full h-auto mx-auto"
            alt="Service Illustration"
          />
        </div>

      </div>
      


      {/* RIGHT SIDE CONTENT */}
      <div>


        {/* Buttons */}
        <div className="flex gap-3 mb-10 flex-wrap justify-center lg:justify-start">
          <Button
            active={active === "design"}
            onClick={() => setActive("design")}
            icon={<RiPenNibFill className="font-light"/>}
            label="Design"
          />

          <Button
            active={active === "development"}
            onClick={() => setActive("development")}
            icon={<RiCodeAiLine className="font-light"/>}
            label="Development"
          />

          <Button
            active={active === "mobile"}
            onClick={() => setActive("mobile")}
            icon={<FaMobileAlt className="font-light"/>}
            label="Mobile App"
          />
        </div>

        {/* LIST WITH IMAGE HOVER EFFECT */}
        <div className="border-t">
          {serviceData[active].map((item, i) => (
            <HoverRow key={i} heading={item.title} imgSrc={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------
// Button Component
// -------------------------------------------------------

const Button = ({ active, onClick, icon, label }) => (
  <motion.button
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.93 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-full flex items-center gap-2 text-xs md:text-sm
    transition backdrop-blur-md border 
    ${active
        ? "bg-white border-gray-300 text-[#ABAEB4] shadow-lg shadow-white/10"
        : "bg-[#252525] border-gray-300 text-[#ABAEB4] hover:bg-white"} 
  `}
  >
    <span className={`text-lg ${active ? "text-[#ABAEB4]" : "text-gray-200"}`}>
      {icon}
    </span>
    {label}
  </motion.button>

);

// -------------------------------------------------------
// Hover-Row Component (Merged from your HoverImageLinks)
// -------------------------------------------------------

const HoverRow = ({ heading, imgSrc }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between 
      border-b py-6 cursor-pointer"
    >
      {/* HEADING */}
      <motion.h3
        className="font-light text-xl sm:text-2xl  lg:text-3xl group-hover:text-gray-500 transition"
        variants={{
          initial: { x: 0 },
          whileHover: { x: -16 },
        }}
        transition={{ type: "spring" }}
      >
        {heading}
      </motion.h3>

      {/* FLOATING IMAGE */}
      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12deg" },
          whileHover: { scale: 1, rotate: "12deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 md:h-48 md:w-64 rounded-xl object-cover pointer-events-none"
      />

      {/* ARROW */}
      <motion.div
        variants={{
          initial: { opacity: 0, x: 20 },
          whileHover: { opacity: 1, x: 0 },
        }}
        transition={{ type: "spring" }}
      >
        <FiArrowRight className="text-3xl text-gray-700 group-hover:text-gray-500" />
      </motion.div>
    </motion.div>
  );
};
