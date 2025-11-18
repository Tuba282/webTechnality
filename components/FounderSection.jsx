"use client";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import BlurText from "./ui/BlurText";

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", delay },
    }),
};

export default function FounderSection() {
    return (
        <section className="py-24 mb-15">
            <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: true }}
                className="max-w-[90%] mx-auto sm:max-w-[70%] text-center"
            >
                <div className="flex items-center justify-center gap-5 my-6">
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                    <span
                        className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide"
                        style={{ wordSpacing: "3px" }}
                    >
                        The founder
                    </span>
                    <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                </div>

                <h2 className="font-light lg:text-6xl text-4xl sm:text-3xl">
                    <span className="text-black">Pushing Brands </span>
                    <span className="text-gray-500"> since 2023</span>
                </h2>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 mt-15 grid lg:grid-cols-2 gap-20">

                {/* ------------------------- */}
                {/*   LEFT SIDE — IMAGE      */}
                {/* ------------------------- */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* DOUBLE BORDER WRAPPER */}
                    <motion.div
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: -2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <div className="bg-gray-200 p-2 rounded2xl shadow-xl">
                            <img
                                src="/founder2.jpg" // replace with your image
                                alt="Founder Portrait"
                                className="w-full h-[580px] bg-[#D3D3D3] pt-5 rounded-2xl object-cover"
                            />
                        </div>
                    </motion.div>

                    <div className="flex flex-row justify-between">
                        {/* SOCIAL ICONS */}
                        <motion.div
                            custom={0.4}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex gap-4 mt-6"
                        >
                            <a href="#" className="text-gray-700 hover:text-black transition">
                                <Instagram size={22} />
                            </a>
                            <a href="#" className="text-gray-700 hover:text-black transition">
                                <Linkedin size={22} />
                            </a>
                        </motion.div>

                        {/* NAME */}
                        <motion.div
                            custom={0.5}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mt-6"
                        >
                            <p className="font-semibold text-lg">WebTechnality Ulmer</p>
                            <p className="text-gray-500 text-sm">Abrar Malik, Founder</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ------------------------- */}
                {/*   RIGHT SIDE — TEXT      */}
                {/* ------------------------- */}
                <div className="flex flex-col justify-between">

                    {/* DESCRIPTION */}
                    <BlurText
                        className="text-gray-600 mt-6 leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0"
                        text="WebTechnality is a UI /UX designer from Germany — Stuttgart who blends
                    function with emotion. As a Framer, Contra, and Shopify Partner, he
                    helps startups and companies create clear interfaces, strong brands,
                    and inspiring digital experiences."
                        delay={100}
                        animateBy="words"
                        direction="bottom"
                    />
                    {/* ------------------------- */}
                    {/* EXPERIENCE TABLE (Framer stagger) */}
                    {/* ------------------------- */}
                    <motion.div
                        custom={0.5}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="mt-12 lg:border-s lg:ps-5 ps-3 border-gray-500 pt-8"
                    >
                        <div className="grid grid-cols-3 gap-4 text-gray-700 text-sm py-4 border-b border-gray-200">
                            <span className="opacity-70">Founder</span>
                            <span>Abrar Malik</span>
                            <span className="text-right">2024 → Now</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-gray-700 text-sm py-4 border-b border-gray-200">
                            <span className="opacity-70">Framer Partner</span>
                            <span>Framer</span>
                            <span className="text-right">2024 → Now</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-gray-700 text-sm py-4 border-b border-gray-200">
                            <span className="opacity-70">Contra Partner</span>
                            <span>Contra</span>
                            <span className="text-right">2024 → Now</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-gray-700 text-sm py-4">
                            <span className="opacity-70">Google Partner</span>
                            <span>Google</span>
                            <span className="text-right">2023 → Now</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
