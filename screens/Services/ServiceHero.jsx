"use client";

import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import SplitText from "@/components/ui/SplitText";

export default function ServiceHero({ heroImage = "/steel.png" }) {

  return (
    <section aria-label="Service Hero Section" className="relative text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT: text + small video box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <SplitText
              text="Grow Your Brand With An Attractive Useful Design"
              className="lg:text-6xl text-4xl sm:text-3xl"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />


            <SplitText
              text="WebTechnality can help take your company to the next level with our unique design and development services.
              Our talented team of developers and designers continually delivers engaging user environments to enhance the
              conversion rates."
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              className=" text-sm sm:text-base md:text-lg text-gray-700 tracking-wide w-full max-w-4xl font-light  mt-6"
            />

            {/* Bottom paragraph with decorative grid background */}
            <div className="mt-8 md:mt-12 relative">
              {/* Decorative grid pattern */}
              <div className="absolute -left-4 -top-4 w-32 h-32 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              <SplitText
                text="We integrate innovative solutions with professional standards in order to provide exceptionally sustainable,
                adaptive, and predictable services to assist your venture in holding a strategic edge in the modern digital
                market environment. From graphic designs to functional programming, we ensure your brand is well articulated."
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                className=" text-sm sm:text-base md:text-lg text-gray-700 tracking-wide w-full max-w-4xl font-light  mt-6"
              />
            </div>
          </motion.div>

          {/* RIGHT: hero image */}
          <motion.figure
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full flex items-center justify-center relative"
          >
            <motion.img
              src={heroImage}
              alt="3D rendered design showcasing modern web technology"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl  animate-spin pointer-events-none select-none"
              whileHover={{ scale: 1.02 }}
              style={{ animationDuration: "8s" }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.figure>
        </div>
      </div>

      {/* Background decorative grid */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
    </section>
  );
}
