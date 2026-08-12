"use client";

import { useRef, useState } from "react";
import type { TeamMember } from "@/lib/data/team";
import styles from "./TeamGrid.module.css";

const INITIAL_COUNT = 3;

export default function TeamGrid({
  members,
  imageBaseUrl,
}: {
  members: TeamMember[];
  imageBaseUrl: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = expanded ? members : members.slice(0, INITIAL_COUNT);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setExpanded(true);
    }
  };

  return (
    <div ref={sectionRef}>
      <div className={styles.boardGrid}>
        {visible.map((member, index) => (
          <div key={member.name} className={styles.boardCard}>
            <img
              src={`${imageBaseUrl}${index + 1}.png`}
              alt={member.name}
              loading="lazy"
            />
            <div className={styles.cardInfo}>
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <p>{member.intro}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.toggleContainer}>
        <button className={styles.boardBtn} onClick={handleToggle}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
