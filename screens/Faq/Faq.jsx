"use client";
import React from "react";
import { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import ContactInfo from "@/components/ContactInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import BlurText from "@/components/ui/BlurText";

const Faqs = () => {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We provide end-to-end branding, design, and web development solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Most projects are completed within a clearly defined timeline based on scope and requirements.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer ongoing support and maintenance to ensure long-term performance.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is customized based on project complexity, deliverables, and required resources.",
    },
    {
      question: "Can you help with rebranding?",
      answer: "Yes, we provide complete rebranding services to refresh and elevate your brand identity.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className=" text-gray-800 px-3 py-12 md:px-16 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[99%] mx-auto sm:max-w-[70%] text-center py-10 lg:py-20" >
          <div className="flex items-center justify-center gap-5 my-6">
            <div className="h-px w-12 sm:w-16 bg-[#898989] opacity-40"></div>
            <span className="text-gray-500 text-xl sm:text-2xl font-[Charm-Regular] italic tracking-wide">
              FAQs
            </span>
            <div className="h-px w-12 sm:w-16 bg-[#898989] opacity-40"></div>
          </div>
          <h4 className=" lg:text-6xl  text-4xl sm:text-3xl text-center ">
            Your Questions, <span className="text-gray-400">Answered</span>
          </h4>
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* left Side: Form */}
          <form className="md:w-1/2  lg:p-15 p-10 rounded-3xl space-y-6" data-aos="fade-up-left" data-aos-duration="2000">
            <div>
              <p className="font-[Charm-Regular] italic tracking-wide"> Get in Touch</p>
              <h2 className="lg:text-6xl text-2xl py-5 " data-aos="fade-right">Let’s <span className="text-gray-400">Start</span> a <br /> <span className="text-gray-400">Conversation</span></h2>
              <span className="text-gray-600 text-[17px]">
                <BlurText
                  text="We’re here to help you create something amazing. Fill out the form and we’ll be in touch."
                  delay={50}
                  animateBy="words"
                  direction="bottom"
                  className=" sm:w-[400] text-sm sm:text-base md:text-lg text-gray-600 leading-tight tracking-wide font-light max-w-xl mt-6"
                />
              </span>
            </div>
            {/* Full Name */}
            <div className="py-2">
              <label htmlFor="name" className="block text-sm font-medium">Your Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full px-4 py-2 border-b border-[#ababab] focus:outline-none "
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full px-4 py-2 border-b border-[#ababab] focus:outline-none "
              />
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Tells us about your project*</label>
              <textarea
                id="message"
                name="message"
                rows="2"
                required
                className="mt-1 w-full px-4 py-2 border-b border-[#ababab] focus:outline-none "
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 0.9 }}
              delay={2.2}
              className="cursor-target relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity active:scale-95 bg-[#E7E7E7] shadow-xs shadow-black/30 mt-2 p-2.5 rounded-full"
            >
              <p className="text-sm flex justify-between gap-3 items-center px-3 py-2 md:py-2 md:px-4 rounded-full shadow text-white bg-black">
                <img src="/favicon.ico" alt="logo" className="w-6 h-6 md:w-10 md:h-10 drop-shadow-xs drop-shadow-white p-0.5" />
                Book a Meeting
                <GoArrowRight className="font-light" size={20} />
              </p>
            </motion.div>
          </form>

          {/* right Side: Info */}
          <div className="md:w-1/2 lg:mt-24 border-0 border-gray-400 lg:border-s-2 lg:ps-5 space-y-4" data-aos="fade-up-right" data-aos-duration="2000">
            <div>
              <h3 className="lg:text-6xl text-2xl py-5 lg:ps-5 " data-aos="fade-left">Common <span className="text-gray-400">
                Questions</span></h3>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full mx-auto">
              {/* Content */}
              <div className="max-w-6xl mx-auto flex flex-col lg:px-10 md:px-10 sm:px-10 px-2 justify-around lg:flex-row lg:p-2 md:p-2 sm:p-2 p-0 lg:gap-25 gap-10">

                <div className="lg:w-full md:w-[600px] sm:w-[400px] sx:w-[300px] mx-auto lg:p-2 md:p-2 sm:p-2 p-0">

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full  border-t border-b border-[#ababab] flex flex-col gap-4"
                  >
                    {faqData.map((item, index) => {
                      const isOpen = openIndex === index;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="border-t border-[#ababab] py-4 "
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between"
                          >
                            <span className="text-gray-800 font-medium text-base sm:text-lg">
                              {item.question}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 45 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-[#878787]"
                            >
                              <FiPlus size={20} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 text-gray-600 text-sm sm:text-base"
                              >
                                {item.answer}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div >
          </div>
        </div>

        <div>
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faqs;