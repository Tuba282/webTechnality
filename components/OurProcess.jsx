"use client";
import React from 'react'
import { motion } from "framer-motion";

// Process Steps Data
const steps = [
    {
        number: "1",
        title: "Discover",
        desc: "We uncover what drives your brand through purpose clarity audience insight and business focus."
    },
    {
        number: "2",
        title: "Request",
        desc: "We analyze your market understand your competitors and identify where you can stand out."
    },
    {
        number: "3",
        title: "Create",
        desc: "We design a distinct identity using voice visuals and story to build emotional connection."
    },
    {
        number: "4",
        title: "Activate",
        desc: "We launch your brand across all channels creating a consistent experience that grows with you."
    }
];



export default function OurProcess() {
    return (
        <div className="bg-[#d7d7d7] w-full">

            {/* ----------------------------- */}
            {/* TOP SECTION — PROCESS STEPS  */}
            {/* ----------------------------- */}
            <div className="py-20">

                <div>
                    {/* Hero Text */}
                    <div className="max-w-[90%] mx-auto sm:max-w-[70%] text-center ">
                        <div className="flex items-center justify-center gap-5 my-6">
                            <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                            <span className="text-gray-500 text-2xl font-[Charm-Regular] italic tracking-wide" style={{ wordSpacing: "3px" }}>
                                Our Process, Explained
                            </span>
                            <div className="h-px w-16 bg-[#898989] opacity-40"></div>
                        </div>
                    </div>
                    <h4 className="font-light lg:text-6xl  text-4xl sm:text-3xl text-center ">
                        Here’s how it works
                    </h4>
                </div>


                {/* steps grid */}

                <div className="max-w-6xl mx-auto grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {steps.map((step, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className={`    ${i % 4 === 1 || i % 4 === 3 ? "lg:mt-24" : "lg:mt-10"} ${i % 2 === 1 ? "sm:mt-24" : "sm:mt-10"} mt-10`}>

                            {/* OUTER CARD (first border layer) */}
                            <div className="bg-gray-100 rounded-2xl shadow-xl p-2">

                                {/* INNER CARD (second border layer + content) */}
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 h-[330px] flex flex-col justify-between">

                                    <p className="text-5xl font-medium">{step.number}</p>

                                    <div className="mt-auto">
                                        <h3 className="font-semibold text-lg">{step.title}</h3>
                                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </motion.div>

                    ))}

                </div>
            </div>

            {/* ----------------------------- */}
            {/* BOTTOM SECTION — TESTIMONIALS */}
            {/* ----------------------------- */}
            < div className="py-28" >
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 relative">

                    <div className='border-0 lg:border-e-2 border-gray-400 flex flex-col gap-10'>
                        <div className='flex lg:flex-row lg:w-[80%] w-[85%] flex-col gap-6'>
                            <div className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis reprehenderit quae quasi dicta delectus quo. Labore nam non ratione esse quia, in porro magni eveniet, corporis deserunt, neque praesentium.</div>
                            <div>
                                <p className=" text-gray-400 text-4xl">❞</p>
                            </div>
                        </div>
                        {/* Author */}
                        <div className="flex items-center gap-3 ">
                            <div className="w-12 h-12 rounded-full bg-black/10 text-white flex items-center justify-center text-sm font-bold">
                                <img src="https://framerusercontent.com/images/X6BbZTbMzON4di73zb6boGXZqY4.webp?width=1402&height=1698" alt="img" className="w-9 h-9 sm:w-10 rounded-full sm:h-10 " />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="font-semibold text-gray-900">David Krzemien</span>
                                <span className="text-[#898989]">FeuersteinCars</span>
                            </div>
                        </div>
                        <div className='h-[130px] '></div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className='h-[130px] '></div>
                        <div className='flex lg:flex-row lg:w-[80%] w-[85%] flex-col gap-6'>
                            <div className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis reprehenderit quae quasi dicta delectus quo. Labore nam non ratione esse quia, in porro magni eveniet, corporis deserunt, neque praesentium.</div>
                            <div>
                                <p className=" text-gray-400 text-4xl">❞</p>
                            </div>
                        </div>
                        {/* Author */}
                        <div className="flex items-center gap-3 ">

                            <div className="w-12 h-12 rounded-full bg-black/10 text-white flex items-center justify-center text-sm font-bold">
                                <img src="https://framerusercontent.com/images/NGUnzdCZPVCva9uLIesIEup6J4.jpg?width=526&height=634" alt="img" className="w-9 h-9 sm:w-10 rounded-full  sm:h-10 " />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="font-semibold text-gray-900">David Krzemien</span>
                                <span className="text-[#898989]">FeuersteinCars</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
