"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Nature = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side rendering)
    setIsClient(true);

    const leaf = document.getElementById("leaf");
    const hill1 = document.getElementById("hill1");
    const hill4 = document.getElementById("hill4");
    const hill5 = document.getElementById("hill5");

    const handleScroll = () => {
      let value = window.scrollY;

      // Apply the parallax effect to different elements
      leaf.style.transform = `translate(${value * 1.5}px, ${value * -1.5}px)`; // Leaf moves
      hill5.style.transform = `translateX(${value * 1.5}px)`; // Hill5 moves
      hill4.style.transform = `translateX(${value * -1.5}px)`; // Hill4 moves
      hill1.style.transform = `translateY(${value * 1}px)`; // Hill1 moves
    };

    if (isClient) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener on unmount
    return () => {
      if (isClient) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isClient]);

  return (
    <>
      <div
        style={{
          background: "#f9f9f9",
          minHeight: "100vh",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <section className="parallax">
          {/* Parallax background images */}
          <div className="image-wrapper">
            {isClient && (
              <>
                <Image
                  src="/images/hill1.png"
                  alt="Hill 1"
                  id="hill1"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Image
                  src="/images/hill2.png"
                  alt="Hill 2"
                  id="hill2"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Image
                  src="/images/hill3.png"
                  alt="Hill 3"
                  id="hill3"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Image
                  src="/images/hill4.png"
                  alt="Hill 4"
                  id="hill4"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Image
                  src="/images/hill5.png"
                  alt="Hill 5"
                  id="hill5"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Image
                  src="/images/tree.png"
                  alt="Tree"
                  id="tree"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Image
                  src="/images/leaf.png"
                  alt="Leaf"
                  id="leaf"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <Image
                  src="/images/plant.png"
                  alt="Plant"
                  id="plant"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </>
            )}
          </div>
        </section>

        <section className="sec">
          <h2>Nature Parallax Scrolling Effects</h2>
          <p>
            Frontend design plays a crucial role in crafting an engaging and
            user-friendly website. It encompasses the visual aspects of a
            website, such as layout, color schemes, typography, and the
            interactive elements that users experience. The impact of frontend
            design extends beyond aesthetics; it directly influences the
            usability, accessibility, and overall performance of a website.{" "}
            <br />
            <br />
            Frontend frameworks like React, Angular, and Vue.js have
            revolutionized how we design and develop websites, enabling faster,
            more efficient rendering and the creation of complex, dynamic
            applications. CSS3 animations, transitions, and transformations
            provide an additional layer of interactivity that brings designs to
            life, while modern web technologies like Flexbox and CSS Grid allow
            for responsive layouts that adapt seamlessly across devices and
            screen sizes. <br />
            <br />
          </p>
        </section>
      </div>

      <style jsx>{`
        .parallax {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
        }

        .image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .parallax img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transition: transform 0.3s ease-out; /* Smooth transition for movement */
        }

        .sec {
          position: relative;
          background: #003329;
          padding: 100px;
        }

        .sec h2 {
          font-size: 3em;
          color: #fff;
          margin-bottom: 10px;
        }

        .sec p {
          font-size: 1em;
          color: #fff;
          font-weight: 300;
        }

        /* Mobile Optimization */
        @media (max-width: 768px) {
          .sec {
            padding: 50px; /* Reduce padding for smaller screens */
          }

          .sec h2 {
            font-size: 2em; /* Reduce heading size */
          }

          .sec p {
            font-size: 0.9em; /* Adjust paragraph size */
          }
        }

        @media (max-width: 480px) {
          .sec {
            padding: 30px; /* Further reduce padding for very small screens */
          }
        }
      `}</style>
    </>
  );
};

export default Nature;
