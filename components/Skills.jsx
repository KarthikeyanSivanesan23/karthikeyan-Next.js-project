"use client";

import React from "react";
import Image from "next/image";

const Skills = () => {
  const images = [
    "/images/Angular.png",
    "/images/vite.png",
    "/images/django.png",
    "/images/boot.png",
    "/images/Html.png",
    "/images/css.png",
    "/images/pythpn.png",
    "/images/node.png",
    "/images/next.png",
    "/images/react.png",
    "/images/script.png",
    "/images/java.png",
  ];

  return (
    <>
      {/* Background Section */}
      <div
        style={{
          backgroundColor: "#D2D2D2",
          backgroundImage: `
            repeating-linear-gradient(
              to right, transparent 0 100px, #25283b22 100px 101px
            ),
            repeating-linear-gradient(
              to bottom, transparent 0 100px, #25283b22 100px 101px
            )`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero Image */}

        {/* Main Content */}
        <div className="banner">
          {/* Spinning Slider */}
          <div className="slider">
            {images.map((src, index) => (
              <div
                key={index}
                className="item"
                style={{
                  transform: `rotateY(calc(${index} * (360 / ${images.length}) * 1deg)) translateZ(550px)`,
                }}
              >
                <Image
                  src={src}
                  alt={`Skill ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ))}
          </div>

          {/* Additional Content */}
          <div className="content">
            <h1 data-content="Skill Set" className="title"></h1>

            <div className="author">
              <h2>Karthik</h2>
              <p>
                <b>Skill Set</b>
              </p>
              <p>I can update myself towards latest Technoloiges</p>
              <p>This Website is customize by Next.js</p>
            </div>

            <div className="model"></div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .banner {
          width: 100%;
          height: 100vh;
          text-align: center;
          position: relative;
        }

        /* Spinning Slider */
        .slider {
          position: absolute;
          width: 200px;
          height: 250px;
          top: 10%;
          left: calc(50% - 100px);
          transform-style: preserve-3d;
          transform: perspective(1000px);
          animation: autoRun 20s linear infinite;
          z-index: 2;
        }

        .item {
          position: absolute;
          inset: 0;
        }

        /* Content Section */
        .content {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(1400px, 100vw);
          height: max-content;
          padding-bottom: 100px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          z-index: 1;
        }

        .title {
          font-family: "ICA Rubrik", sans-serif;
          font-size: 16em;
          line-height: 1em;
          color: #25283b;
          position: relative;
          -webkit-text-stroke: 2px #d2d2d2;
        }

        .author {
          font-family: "Poppins", sans-serif;
          text-align: right;
          max-width: 200px;
        }

        .model {
          background-image: url(/images/hero.png);
          width: 100%;
          height: 75vh;
          position: absolute;
          bottom: 0;
          left: 0;
          background-size: auto 130%;
          background-repeat: no-repeat;
          background-position: top center;
          z-index: 1;
        }

        @keyframes autoRun {
          from {
            transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
          }
        }

        @media screen and (max-width: 1023px) {
          .slider {
            width: 160px;
            height: 200px;
            left: calc(50% - 80px);
          }
          .content h1 {
            font-size: 7em;
          }
        }

        @media screen and (max-width: 767px) {
          .slider {
            width: 80px;
            height: 120px;
            left: calc(50% - 40px);
            transform: perspective(800px); /* Reduced perspective for smaller scale */
            animation: autoRun 20s linear infinite;
          }

          .content h1 {
            font-size: 4em;
          }

          .item img {
            width: 50px;
            height: 50px;
          }

          /* Reducing the spinning distance for mobile */
          .slider {
            transform: perspective(800px) rotateX(-16deg) rotateY(0deg);
          }

          .item {
            transform: rotateY(calc(${(index) => index} * (360 / ${images.length}) * 1deg)) translateZ(350px); /* Smaller translateZ for mobile */
          }
        }
      `}</style>
    </>
  );
};

export default Skills;
