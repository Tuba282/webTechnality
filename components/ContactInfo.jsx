"use client";
import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactInfo = () => {
    return (
        <section className=" text-gray-800 px-6 py-12 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                {/* Email */}
                <div className="flex flex-row justify-center w-[300px] h-[70px] py-0 items-center rounded-xl gap-4 group  border border-[#00000052] p-2 transition duration-300  hover:bg-[#bfbfbf]">
                    <div className="p-2 rounded-xl bg-gray-200">
                        <FiMail size={25} className="mx-auto  text-gray-400 group-hover:text-[#00000052] transition duration-300" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <h3 className="text-sm font-semibold group-hover:text-white">EMAIL US</h3>
                        <p className="text-sm text-[#454242da] group-hover:text-white">info@webtechnicality.com</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex flex-row justify-center w-[300px] h-[70px] py-0 items-center rounded-xl gap-4 group  border border-[#00000052] p-2 transition duration-300  hover:bg-[#bfbfbf]">
                    <div className="p-2 rounded-xl bg-gray-200">
                        <FiPhone size={25} className="mx-auto  text-gray-400 group-hover:text-[#00000052] transition duration-300" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <h3 className="text-sm font-semibold group-hover:text-white">CALL US</h3>
                        <p className="text-sm text-[#454242da] group-hover:text-white">+1 (555) 123-4567</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex flex-row justify-center w-[300px] h-[70px] py-0 items-center rounded-xl gap-4 group  border border-[#00000052] p-2 transition duration-300  hover:bg-[#bfbfbf]">
                    <div className="p-2 rounded-xl bg-gray-200">
                        <FiMapPin size={25} className="mx-auto  text-gray-400 group-hover:text-[#00000052] transition duration-300" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                        <h3 className="text-sm font-semibold group-hover:text-white">VISIT US</h3>
                        <p className="text-sm text-[#454242da] group-hover:text-white">123 WebTechnality, xyz...</p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ContactInfo;