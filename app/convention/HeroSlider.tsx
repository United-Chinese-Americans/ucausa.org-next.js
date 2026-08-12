"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSlider.module.css";

const IMAGES = [
  "https://storage.googleapis.com/objects.ucausa.org/convention/convention2016.png",
  "https://storage.googleapis.com/objects.ucausa.org/convention/convention2018.png",
  "https://storage.googleapis.com/objects.ucausa.org/convention/convention2022.png",
  "https://storage.googleapis.com/objects.ucausa.org/convention/convention2024.png",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {IMAGES.map((src, index) => (
        <div
          key={src}
          className={`${styles.slide} ${index === current ? styles.slideActive : ""}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </div>
  );
}
