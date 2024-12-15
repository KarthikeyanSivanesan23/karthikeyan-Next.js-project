'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const Rain = () => {
  useEffect(() => {
    // Rain Effect Logic
    const canvas = document.querySelector('.rain');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    // Rain Drops Constructor
    function randomNum(max, min) {
      return Math.floor(Math.random() * max) + min;
    }

    function RainDrops(x, y, endy, velocity, opacity) {
      this.x = x;
      this.y = y;
      this.endy = endy;
      this.velocity = velocity;
      this.opacity = opacity;

      this.draw = function () {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y - this.endy);
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.stroke();
      };

      this.update = function () {
        let rainEnd = window.innerHeight + 100;
        if (this.y >= rainEnd) {
          this.y = this.endy - 100;
        } else {
          this.y = this.y + this.velocity;
        }
        this.draw();
      };
    }

    let rainArray = [];

    for (let i = 0; i < 140; i++) {
      let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
      let rainYLocation = Math.random() * -500;
      let randomRainHeight = randomNum(10, 2);
      let randomSpeed = randomNum(20, 0.2);
      let randomOpacity = Math.random() * 0.55;
      rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
    }

    function animateRain() {
      requestAnimationFrame(animateRain);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < rainArray.length; i++) {
        rainArray[i].update();
      }
    }

    animateRain();

    // Mousemove event to handle parallax effect
    let moveX = 0, moveY = 0;
    let targetMoveX = 0, targetMoveY = 0;

    const handleMouseMove = (e) => {
      targetMoveX = (e.clientX - window.innerWidth / 2) * -0.005;
      targetMoveY = (e.clientY - window.innerHeight / 2) * 0.01;
    };

    const smoothMouseMove = () => {
      moveX += (targetMoveX - moveX) * 0.1; // Adjust easing factor as needed
      moveY += (targetMoveY - moveY) * 0.1;

      document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
      document.documentElement.style.setProperty('--move-y', `${moveY}deg`);

      requestAnimationFrame(smoothMouseMove);
    };

    document.addEventListener('mousemove', handleMouseMove);
    smoothMouseMove();

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="parallax-container">
        <section className="layers">
          <div className="layers__container">
            {/* Layer 1 */}
            <div className="layers__item layer-1">
              <Image
                src="/images/layer-1.jpg"
                alt="Layer 1"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            {/* Layer 2 */}
            <div className="layers__item layer-2">
              <Image
                src="/images/layer-2.png"
                alt="Layer 2"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            {/* Layer 3: Hero content */}
            <div className="layers__item layer-3">
              <div className="hero-content">
                <h1>
                  Lens 3d Effects<span>By karthikeyan</span>
                </h1>
                <div className="hero-content__p">
                  Creating a beautiful 3D website with a ‘lens effect’
                </div>
                
              </div>
            </div>

            {/* Layer 4: Rain Effect Canvas */}
            <div className="layers__item layer-4">
              <canvas className="rain"></canvas>
            </div>

            {/* Layer 5 */}
            <div className="layers__item layer-5">
              <Image
                src="/images/layer-5.png"
                alt="Layer 5"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            {/* Layer 6 */}
            <div className="layers__item layer-6">
              <Image
                src="/images/layer-6.png"
                alt="Layer 6"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .parallax-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .layers__container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transform: rotateX(var(--move-y)) rotateY(var(--move-x));
          will-change: transform;
          transition: transform 1.5s cubic-bezier(.05, .5, 0, 1);
        }

        .layers__item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .layer-1 {
          transform: translateZ(-55px) scale(1.06);
        }
        .layer-2 {
          transform: translateZ(80px) scale(0.88);
        }
        .layer-3 {
          transform: translateZ(180px) scale(0.8);
        }
        .layer-4 {
          transform: translateZ(190px) scale(0.9);
        }
        .layer-5 {
          transform: translateZ(300px) scale(0.9);
        }
        .layer-6 {
          transform: translateZ(380px);
        }

        .hero-content {
          font-size: calc(2vw + 2vh); /* Increased size */
          text-align: center;
          text-transform: uppercase;
          letter-spacing: calc(1vw * -0.12);
          line-height: 1.4em;
          margin-top: 5vh;
        }

        .hero-content__p {
          text-transform: none;
          font-family: 'Merriweather', serif;
          font-size: calc(1.5vw + 1.5vh); /* Increased size */
        }

        .button-start {
          font-family: Arial;
          font-weight: 600;
          text-transform: uppercase;
          font-size: calc(2.5vw + 1.5vh); /* Increased size */
          padding: calc(1vh * 0.9) calc(1vw * 1.5); /* Adjusted padding */
          background-color: transparent;
          color: #fff;
          border-radius: 10em;
          border: rgba(255, 255, 255, 0.4) 3px solid;
          cursor: pointer;
          margin-top: 2vh;
        }

        .layers__item.layer-4,
        .layers__item.layer-5,
        .layers__item.layer-6 {
          pointer-events: none;
        }

        /* Add custom styles for your layout as needed */
      `}</style>
    </>
  );
};

export default Rain;
