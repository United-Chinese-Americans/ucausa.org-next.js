"use client";

import { useState } from "react";
import styles from "./FoundingCarousel.module.css";

export default function FoundingCarousel({ slides }: { slides: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    setCurrentIndex(((index % slides.length) + slides.length) % slides.length);
  };

  return (
    <>
      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.sliderBtn} ${styles.prevBtn}`}
          aria-label="Previous slide"
          onClick={() => goTo(currentIndex - 1)}
        >
          &#10094;
        </button>
        <div className={styles.sliderTrackContainer}>
          <ul
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((src, index) => (
              <li key={src} className={styles.slide}>
                <img src={src} alt={`Founding Members List ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`${styles.sliderBtn} ${styles.nextBtn}`}
          aria-label="Next slide"
          onClick={() => goTo(currentIndex + 1)}
        >
          &#10095;
        </button>
      </div>
      <div className={styles.sliderDots}>
        {slides.map((src, index) => (
          <button
            key={src}
            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </>
  );
}
