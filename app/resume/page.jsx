"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import Nature from "@/components/Nature";


const Resume = () => {
  return (
    
    <div className="container mx-auto py-12 px-4 sm:px-6 max-w-[1000px]">
     
     
      {/* Header Section */}
      <header className="flex flex-col xl:flex-row items-center gap-6 sm:gap-8 xl:gap-12 border-b pb-6 sm:pb-8 mb-6 sm:mb-8">
        {/* Photo Section */}
        <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[300px] xl:h-[150px] mx-auto xl:mx-0 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/Picsart_24-12-12_22-16-16-356.png"
            alt="Karthikeyan S"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center xl:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#00FF99]">
            Karthikeyan S
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            A sincere and orderly person trained in Full Stack and Data Science,
            seeking to enhance skills and communication through work experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-2 sm:gap-4 mt-6">
            <a
              href="mailto:karthikeyansivanesan23@gmail.com"
              className="text-blue-500 hover:underline text-sm sm:text-lg"
            >
              karthikeyansivanesan23@gmail.com
            </a>
            <a
              href="tel:9600455344"
              className="text-blue-500 hover:underline text-sm sm:text-lg"
            >
              +91 9600455344
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-2 sm:gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/karthikeyan-s-b15786290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm sm:text-lg"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/KarthikeyanSivanesan23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm sm:text-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Work Experience Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#00FF99] border-b pb-2 mb-4 sm:mb-6">
          Work Experience
        </h2>
        <div>
          <h3 className="font-semibold text-base sm:text-lg text-white-800">
            Junior Software Developer
          </h3>
          <p className="text-white-600 text-sm sm:text-base">
            BMindz Private Limited
          </p>
          <p className="text-white-500 text-sm sm:text-base">
            07/2023 - 10/2024
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#00FF99] border-b pb-2 mb-4 sm:mb-6">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-white-800">
              Bachelor of Computer Science
            </h3>
            <p className="text-white-600 text-sm sm:text-base">
              National College Trichy, Tamil Nadu
            </p>
            <p className="text-white-500 text-sm sm:text-base">
              2020 - 2023, CGPA: 7.80
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-white-800">
              Diploma in Robotics
            </h3>
            <p className="text-white-600 text-sm sm:text-base">
              Valivalam Desikar Polytechnic College, Nagapattinam, Tamil Nadu
            </p>
            <p className="text-white-500 text-sm sm:text-base">
              2017 - 2019, CGPA: 7.00
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#00FF99] border-b pb-2 mb-4 sm:mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm sm:text-base">
          <p className="text-white-700">HTML & CSS</p>
          <p className="text-white-700">JavaScript</p>
          <p className="text-white-700">React.js</p>
          <p className="text-white-700">Python</p>
          <p className="text-white-700">Java</p>
          <p className="text-white-700">Angular</p>
          <p className="text-white-700">Machine Learning</p>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-[#00FF99] border-b pb-2 mb-4 sm:mb-6">
          Personal Projects
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-white-700">
          <li>Live News Update - React.js using News API</li>
          <li>Bank Management System for Loans in Java</li>
          <li>Standalone Application - Tally Clone using Python</li>
        </ul>
      </section>

      {/* Languages Section */}
      <section>
  <h2 className="text-xl sm:text-2xl font-bold text-[#00FF99] border-b pb-2 mb-4 sm:mb-6">
    Languages
  </h2>
  <ul className="space-y-2 text-sm sm:text-base text-white-700">
    <li>Tamil - Native or Bilingual Proficiency</li>
    <li>English - Full Professional Proficiency</li>
  </ul>
</section>

<div className="mt-8"> {/* Added margin-top to create space */}
  <section>
    <a
      href="/images/karthikeyan experience.pdf" // Path to your resume file
      download="Karthikeyan_S_Resume.pdf" // Sets the download filename
      
    >
      <button
        className="uppercase flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-400 rounded-md hover:border-[#00FF99] hover:text-[#00FF99] transition-all duration-300"
      >
        <span>Download CV</span>
        <span className="text-xl">↓</span> {/* Replacing FiDownload with plain text/arrow */}
      </button>
    </a>
  </section>
</div>

      
    </div>
    
  );
};

export default Resume;
