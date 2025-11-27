"use client"
import BlurText from '@/components/ui/BlurText'
import React from 'react'
import { motion } from 'framer-motion'

const AboutHero = () => {
    // Floating animation variants
    const floatVariants = (custom) => ({
        initial: { y: 0, opacity: 0, scale: 0.8 },
        animate: { 
            y: [-10, 10, -10],
            opacity: 1, 
            scale: 1,
            transition: { 
                y: {
                    duration: 3 + custom * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                },
                opacity: { duration: 0.6, ease: "easeOut" },
                scale: { duration: 0.6, ease: "easeOut" }
            }
        }
    });

    return (
        <div className="min-h-screen w-full relative overflow-hidden">
            {/* Green Center Glow */}
            
            <div className="min-h-screen relative overflow-hidden lg:p-50 sm:px-30 pt-20 px-5">

                <div className="relative flex flex-col justify-center items-center h-full text-center ">
                    <h3 className="leading-tight mb-4 w-full max-w-5xl font-semibold lg:text-6xl text-white text-4xl sm:text-3xl text-center text-shadow-black text-shadow-xs">Catalyzing Digital Evolution <br /> Transforming <span className="text-gray-800">Visions</span> into <span className="text-gray-800">Reality</span></h3>
                    
                    <BlurText
                        text="WebTechnality is strategically positioned to leverage the latest technological advancements and drive innovation in today's digitally transforming landscape. Through our services, we apply modern technologies and proven methodologies to deliver efficient and robust digital solutions for our clients. Our comprehensive offerings include responsive web applications, scalable cloud architectures, and a wide range of advanced digital services."
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                        className=" text-sm sm:text-base md:text-lg text-gray-700 leading-tight tracking-wide w-full max-w-4xl font-light  mt-6"
                    />
                    <motion.img 
                        src="/trans-(2).png" 
                        className="absolute bottom-20 -left-20 hidden xl:block" 
                        alt="Wow" 
                        width={150}
                        variants={floatVariants(0)}
                        initial="initial"
                        animate="animate"
                    />
                    <motion.img 
                        src="/trans-(3).png" 
                        className="absolute -bottom-40 left-70 hidden xl:block" 
                        alt="canva" 
                        width={150}
                        variants={floatVariants(1)}
                        initial="initial"
                        animate="animate"
                    />
                    <motion.img 
                        src="/trans-(1).png" 
                        className="absolute -top-40 right-30 hidden xl:block" 
                        alt="Monkey" 
                        width={173}
                        variants={floatVariants(2)}
                        initial="initial"
                        animate="animate"
                    />

                </div>

            </div >
        </div>
    )
}

export default AboutHero