'use client'; 
import { useEffect } from 'react';  
import Image from 'next/image';
import styles from './ParallaxEffect.module.css';

const ParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;

      // Parallax effect for images
      document.getElementById("bg").style.top = value * 0.5 + 'px';
      document.getElementById("moon").style.left = -value * 0.5 + 'px';
      document.getElementById("mountain").style.top = -value * 0.15 + 'px';
      document.getElementById("road").style.top = value * 0.15 + 'px';

      // Fade effect for "Services" text
      const opacity = Math.max(1 - value / 500, 0);  // Adjust divisor for speed
      document.getElementById("text").style.opacity = opacity;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <Image
          src="/images/bg.jpg"
          alt="Background"
          id="bg"
          className={styles.bg}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.moonWrapper}>
        <Image
          src="/images/moon.png"
          alt="Moon"
          id="moon"
          className={styles.moon}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.mountainWrapper}>
        <Image
          src="/images/mountain.png"
          alt="Mountain"
          id="mountain"
          className={styles.mountain}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.roadWrapper}>
        <Image
          src="/images/road.png"
          alt="Road"
          id="road"
          className={styles.road}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h2 className={styles.text} id="text">Services</h2>
    </section>
  );
};

export default ParallaxEffect;
