"use client";
import React from "react";
import { motion } from "framer-motion";

const RotatingLogo = () => {
    return (
        <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="w-40 h-40 flex items-center justify-center"
        >
            <img
                src="/favicon.png"
                alt="Logo"
                className="w-30 h-30 drop-shadow-md"
            />
        </motion.div>
    );
};

export default RotatingLogo;