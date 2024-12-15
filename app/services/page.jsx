"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxEffect from "@/components/ParallaxEffect";
import Endcard from "@/components/Endcard";
import Nature from "@/components/Nature";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I build dynamic and responsive websites using modern technologies like Django, Angular, React, and HTML/CSS/Bootstrap. Whether it's a scalable web application or a user-friendly interface, I ensure high-quality, secure, and mobile-friendly websites that meet your needs. Let's create a web presence that stands out!",
    href: "",
  },
  {
    num: "02",
    title: "Application",
    description: "I specialize in building desktop applications using Python and Tkinter. From simple utilities to complex software solutions, I create responsive and user-friendly applications tailored to your needs. Whether you're looking to automate tasks or create a standalone desktop app, I ensure smooth functionality and intuitive design.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Apps",
    description:
      "I create high-performance, cross-platform mobile apps using Flutter. With Flutter, I can develop beautiful, fast, and responsive applications for both Android and iOS from a single codebase, ensuring a seamless user experience and consistent performance across devices.",
    href: "",
  },
  {
    num: "04",
    title: "Data Science",
    description:
      "I specialize in data science, applying machine learning and deep learning techniques to extract valuable insights from data. Using AWS for cloud-based computing, I design and deploy models that drive intelligent decision-making. My expertise also includes advanced data analysis and visualization, helping businesses make data-driven choices through clear and actionable insights.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      {/* Parallax Effect Section */}
      
      <ParallaxEffect />
      
      {/* Add spacing here */}
      <div className="my-20"></div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent 
                    group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white 
                      group-hover:bg-accent transition-all duration-500 flex 
                      justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white 
                  group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <Endcard />
    </section>
  );
};

export default Services;
