"use client";

import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

export default function CTASection1({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Banner Container */}
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl overflow-hidden border border-gray-800">
                    {/* Dot Pattern Background */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                            backgroundSize: '30px 30px'
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center py-16 md:py-20 px-6 md:px-12">
                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            {data.title || "Ready to Transform Your Vision?"}
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                            {data.description || "Let's build something extraordinary together. Get in touch and let's discuss how we can bring your ideas to life."}
                        </p>

                        {/* CTA Button */}
                        <Link href={data.buttonLink || "/contact"}>
                            <button className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
                                {data.buttonText || "Start Your Project"}
                                <GoArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </Link>

                        {/* Subtext */}
                        <p className="text-sm text-gray-500 mt-6">
                            No credit card required • Free consultation • Quick response
                        </p>
                    </div>

                    {/* Subtle Glow Effects */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
}
