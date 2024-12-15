"use client";
import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Background = () => {
  const { scrollY } = useScroll(); // Get scroll position
  const [scrollValue, setScrollValue] = useState(0);

  // Map scrollY to a transformation range
  const bgY = useTransform(scrollY, [0, 1000], [0, 500]); // Adjust range to fit the scrollable area
  const moonX = useTransform(scrollY, [0, 1000], [0, -500]);
  const mountainY = useTransform(scrollY, [0, 1000], [0, -150]);
  const roadY = useTransform(scrollY, [0, 1000], [0, 150]);
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="position-relative vh-100 overflow-hidden d-flex justify-content-center align-items-center">
      <motion.img
        src="/images/bg.jpg"
        id="bg"
        className="position-absolute w-100 h-100"
        alt="background"
        style={{ objectFit: "cover" }}
        initial={{ top: 0 }}
        animate={{ top: bgY }}
      />
      <motion.img
        src="/images/moon.png"
        id="moon"
        className="position-absolute w-100 h-100"
        alt="moon"
        style={{ objectFit: "cover" }}
        initial={{ left: 0 }}
        animate={{ left: moonX }}
      />
      <motion.img
        src="/images/mountain.png"
        id="mountain"
        className="position-absolute w-100 h-100"
        alt="mountain"
        style={{ objectFit: "cover" }}
        initial={{ top: 0 }}
        animate={{ top: mountainY }}
      />
      <motion.img
        src="/images/road.png"
        id="road"
        className="position-absolute w-100 h-100"
        alt="road"
        style={{ objectFit: "cover", zIndex: 2 }}
        initial={{ top: 0 }}
        animate={{ top: roadY }}
      />
      <motion.h2
        id="text"
        className="position-relative text-white display-1"
        style={{ zIndex: 3 }}
        initial={{ top: 0 }}
        animate={{ top: textY }}
      >
        Moon Light
      </motion.h2>
    </section>
  );
};

export default Background;
