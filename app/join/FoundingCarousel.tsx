"use client";

import { useEffect, useState } from "react";
import styles from "./FoundingCarousel.module.css";

const AUTOPLAY_MS = 4000;
const MOBILE_QUERY = "(max-width: 768px)";

export default function FoundingCarousel({ slides }: { slides: string[] }) {
  const count = slides.length;
  // Three consecutive copies of the deck let the index drift a full loop in
  // either direction (from clicks or autoplay) before it needs correcting,
  // so a jump back to the middle copy is always available and unnoticeable.
  const extended = [...slides, ...slides, ...slides];

  const [itemsPerView, setItemsPerView] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(count);
  const [withTransition, setWithTransition] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setItemsPerView(mq.matches ? 1 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setWithTransition(true);
      setCurrentIndex((i) => i + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // After sliding into the leading/trailing copy, snap back to the middle
  // copy with the transition off so the loop reads as continuous.
  const handleTransitionEnd = () => {
    if (currentIndex >= count * 2) {
      setWithTransition(false);
      setCurrentIndex((i) => i - count);
    } else if (currentIndex < count) {
      setWithTransition(false);
      setCurrentIndex((i) => i + count);
    }
  };

  useEffect(() => {
    if (withTransition) return;
    const id1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => setWithTransition(true));
    });
    return () => cancelAnimationFrame(id1);
  }, [withTransition]);

  const step = (delta: number) => {
    setWithTransition(true);
    setCurrentIndex((i) => i + delta);
  };

  const goTo = (realIndex: number) => {
    setWithTransition(true);
    setCurrentIndex(count + realIndex);
  };

  const activeDot = ((currentIndex % count) + count) % count;

  return (
    <>
      <div className={styles.sliderWrapper}>
        <button
          className={`${styles.sliderBtn} ${styles.prevBtn}`}
          aria-label="Previous slide"
          onClick={() => step(-1)}
        >
          &#10094;
        </button>
        <div className={styles.sliderTrackContainer}>
          <ul
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: withTransition ? undefined : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((src, i) => (
              <li key={`${src}-${i}`} className={styles.slide}>
                <img
                  src={src}
                  alt={`Founding Members List ${(i % count) + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`${styles.sliderBtn} ${styles.nextBtn}`}
          aria-label="Next slide"
          onClick={() => step(1)}
        >
          &#10095;
        </button>
      </div>
      <div className={styles.sliderDots}>
        {slides.map((src, index) => (
          <button
            key={src}
            className={`${styles.dot} ${index === activeDot ? styles.dotActive : ""}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </>
  );
}
