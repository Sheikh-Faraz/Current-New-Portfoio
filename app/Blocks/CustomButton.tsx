"use client";

import { motion } from "framer-motion";

type CustomButtonProps = {
  text: string;
  to: string;
};

export default function CustomButton({ text, to }: CustomButtonProps) {

  return (
    <a href={to}>

    <motion.button
      // onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group relative px-6 py-2 mt-5 rounded-xl font-medium text-white
                 bg-[#FE6E26] overflow-hidden shadow-lg shadow-[#FE6E26]/30"
    >
      {/* Hover bg (bottom → top) */}
      <span className="absolute inset-0 bg-[#ff8a4d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

      {/* Text */}
      <span className="relative z-10 tracking-wide">
        {text}
      </span>
    </motion.button>

    </a>
  );
}