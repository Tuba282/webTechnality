"use client";

import { motion } from "framer-motion";

export default function DiagonalScroller() {
  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 18,
          ease: "linear",
        },
      },
    },
  };

  const marqueeReverse = {
    animate: {
      x: ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 18,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="relative w-full bg-[#FFE98A] py-24 overflow-hidden">

      {/* Main Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-16">
        1B+ requests tracked for users like…
      </h2>

      {/* ---- TOP STRIP ---- */}
      <div className="rotate-[-8deg] w-[160%] origin-left">
        <motion.div
          className="flex whitespace-nowrap bg-white border-y-4 border-black py-4"
          variants={marqueeVariants}
          animate="animate"
        >
          {["ABSTRACT", "ADOBE", "BMW", "BURTON", "COUCHBASE"].map((text, i) => (
            <p key={i} className="text-3xl sm:text-4xl font-bold mx-8">{text}</p>
          ))}
          {/* Duplicate for seamless infinite loop */}
          {["ABSTRACT", "ADOBE", "BMW", "BURTON", "COUCHBASE"].map((text, i) => (
            <p key={i + 10} className="text-3xl sm:text-4xl font-bold mx-8">{text}</p>
          ))}
        </motion.div>
      </div>

      {/* ---- BOTTOM STRIP ---- */}
      <div className="rotate-[8deg] w-[160%] mt-16 origin-left">
        <motion.div
          className="flex whitespace-nowrap bg-white border-y-4 border-black py-4"
          variants={marqueeReverse}
          animate="animate"
        >
          {["HEROKU", "BMW", "BOX", "BYTEDANCE", "BUILDkite"].map((text, i) => (
            <p key={i} className="text-3xl sm:text-4xl font-bold mx-8">{text}</p>
          ))}
          {/* Duplicate loop */}
          {["HEROKU", "BMW", "BOX", "BYTEDANCE", "BUILDkite"].map((text, i) => (
            <p key={i + 10} className="text-3xl sm:text-4xl font-bold mx-8">{text}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
