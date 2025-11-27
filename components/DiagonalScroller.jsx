"use client";

import { motion } from "framer-motion";

export default function DiagonalText(className) {
  const row1 = ["DESIGN", "BRANDING", "STRATEGY", "CONTENT", "IDENTITY"];
  const row2 = ["UX", "UI", "DIGITAL", "PRODUCT", "CREATIVE"];

  const settings = {
    duration: 25,
    ease: "linear",
    repeat: Infinity,
  };

  return (
    <div   className=" absolute inset-0 overflow-hidden pointer-events-none select-none">
      
      {/* Top Diagonal Line */}
      {/* <div   className=" absolute -top-10 left-0 w-[200%] rotate-[-12deg] opacity-[0.07]">
        <motion.div
            className=" flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={settings}
        >
          {[...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,
            ...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,
          ...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2].map((item, i) => (
            <p
              key={i}
                className=" text-[70px] drop-shadow-xs drop-shadow-black sm:text-[80px] md:text-[110px] font-extrabold mx-10"
            >
              {item}
            </p>
          ))}
        </motion.div>
      </div> */}

      {/* Bottom Diagonal Line */}
      <div className={`absolute -bottom-9 ${className} left-0 w-[200%] rotate-5 opacity-[0.04]`}>
        <motion.div
            className=" flex whitespace-nowrap"
          animate={{ x: ["-100%", "0%"] }}
          transition={settings}
        >
          {[...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,
            ...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,
          ...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2,...row1, ...row2].map((item, i) => (
            <p
              key={i}
                className=" text-[70px] drop-shadow-xs drop-shadow-black sm:text-[80px] md:text-[140px] font-extrabold mx-10"
            >
              {item}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
