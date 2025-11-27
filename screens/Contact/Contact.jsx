"use client";
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { motion } from "framer-motion";
import RotatingLogo from '@/components/RotatingLogo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className=" text-gray-800 px-3 py-12 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">

          {/* Left Side: Info */}
          <div className="md:w-1/2 space-y-4">
            {/* Image rotated 180deg */}
            <RotatingLogo />
            <h2 className="lg:text-8xl md:text-3xl mb-5 text-[30px] font-medium">
              Have A New Or Existing Idea You <span className='text-gray-500'>Need Help</span> With?
            </h2>
            <p className="text-base text-[19px]">
              Message us using the contact form or email at &nbsp; <br />
              <a href="mailto:info@WebTechnality.com" className="text-gray-600 underline">
                info@WebTechnality.com
              </a>
            </p>
          </div>

          {/* Right Side: Form */}
          <form className="md:w-1/2 bg-white shadow-2xl lg:p-15 p-10 rounded-3xl space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full px-4 py-2 border-b border-gray-300 focus:outline-none "
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
                className="mt-1 w-full px-4 py-2 border-b border-gray-300 focus:outline-none "
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">Phone No*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 w-full px-4 py-2 border-b border-gray-300 focus:outline-none "
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Write About Your Project"
                className="mt-1 w-full px-4 py-2 border-b border-gray-300 focus:outline-none "
              ></textarea>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 text-sm">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 accent-gray-500"
                />
                <span>I agree to the Privacy Policy and Terms & Conditions.</span>
              </label>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 accent-gray-500"
                />
                <span>
                  I agree to receive communications by text message from WebTechnality about my inquiry.
                  You may opt-out by replying STOP or ask for more information by replying HELP.
                  Message frequency varies. Message and data rates may apply.
                </span>
              </label>
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

            {/* Disclaimer */}
            <p className="text-xs mt-10 text-gray-500">
              By providing a telephone number and submitting this form you are consenting
              to be contacted by SMS text message. Message & data rates may apply.
              Message frequency may vary. Reply HELP for more information.
              You can reply STOP to opt-out of further messaging.
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;