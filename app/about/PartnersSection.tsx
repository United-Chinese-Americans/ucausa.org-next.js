"use client";

import { useRef, useState } from "react";
import { partners } from "@/lib/data/partners";
import aboutStyles from "./About.module.css";
import styles from "./PartnersSection.module.css";

const INITIAL_COUNT = 6;

export default function PartnersSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = expanded ? partners : partners.slice(0, INITIAL_COUNT);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setExpanded(true);
    }
  };

  return (
    <section
      id="partners-section"
      className={aboutStyles.partnersSection}
      ref={sectionRef}
    >
      <div className={aboutStyles.partnersContainer}>
        <h2>Community Partners</h2>
        <div className={styles.partnersGrid}>
          {visible.map((partner) => (
            <div key={partner} className={styles.partnerItem}>
              {partner}
            </div>
          ))}
        </div>
        <div className={styles.toggleContainer}>
          <button className={aboutStyles.partnersBtn} onClick={handleToggle}>
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
