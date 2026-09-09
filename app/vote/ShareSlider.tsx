"use client";

import { useState } from "react";
import styles from "./ShareSlider.module.css";

type Slide = {
  src: string;
  alt: string;
};

export default function ShareSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(slides.length - 1, i + 1));

  return (
    <>
      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.sliderBtn} ${styles.prevBtn}`}
          aria-label="Previous graphic"
          onClick={prev}
          disabled={index === 0}
        >
          &#10094;
        </button>
        <div className={styles.sliderTrackContainer}>
          <ul
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <li key={slide.src} className={styles.slide}>
                <a href={slide.src} target="_blank" rel="noopener noreferrer">
                  <img src={slide.src} alt={slide.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`${styles.sliderBtn} ${styles.nextBtn}`}
          aria-label="Next graphic"
          onClick={next}
          disabled={index === slides.length - 1}
        >
          &#10095;
        </button>
      </div>
      <div className={styles.sliderDots}>
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            aria-label={`Go to graphic ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </>
  );
}
