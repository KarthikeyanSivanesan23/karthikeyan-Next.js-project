import React from "react";
import { motion } from "framer-motion";

// Animation variants
const stairAnimation = {
  initial: (index) => ({
    top: `${index * 20}px`, // Initial vertical offset
    left: `${index * 20}px`, // Initial horizontal offset
    opacity: 0,
  }),
  animate: {
    top: "0px",
    left: "0px",
    opacity: 1,
  },
  exit: (index) => ({
    top: `${index * 20}px`,
    left: `${index * 20}px`,
    opacity: 0,
  }),
};

const Stairs = () => {
  return (
    <div className="relative h-full w-full">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          custom={index} // Pass the index to the variants
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.2, // Delay each step to create the staircase effect
          }}
          className="absolute"
          style={{
            top: `${index * 20}px`, // Staggered starting position
            left: `${index * 20}px`,
            width: "40px", // Width of the stair
            height: "40px", // Height of the stair
            backgroundColor: "#00FF99", // Updated color
          }}
        />
      ))}
    </div>
  );
};

export default Stairs;
