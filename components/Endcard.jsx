"use client";

import { motion } from "framer-motion";

const Endcard = () => {
  return (
    <div><motion.div className="w-full relative">
    <motion.svg
      className="w-full h-2"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 2" // Adjust the viewBox to match the line width and height
    >
      <motion.line
        x1="0"
        y1="1"
        x2="500"
        y2="1"
        stroke="#00ff99"
        strokeWidth="2"
        initial={{ strokeDasharray: "0 500", strokeDashoffset: 500 }}
        animate={{
          strokeDasharray: "500 0",
          strokeDashoffset: 0,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>
  </motion.div>
  </div>
  )
}

export default Endcard