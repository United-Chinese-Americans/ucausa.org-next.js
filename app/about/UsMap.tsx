"use client";

import { useState } from "react";
import { chapters, statePaths } from "@/lib/data/chapters";
import styles from "./UsMap.module.css";

export default function UsMap() {
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);

  return (
    <div className={styles.mapContainer}>
      <svg viewBox="0 0 1000 600" className={styles.map}>
        {Object.entries(statePaths).map(([stateCode, pathData]) => {
          const chapter = chapters[stateCode];
          return (
            <path
              key={stateCode}
              d={pathData}
              id={stateCode}
              className={`${styles.state} ${chapter ? styles.hasChapter : ""}`}
              onMouseEnter={() => {
                if (chapter) setTooltip({ name: chapter.name, x: 0, y: 0 });
              }}
              onMouseMove={(e) => {
                if (chapter) setTooltip({ name: chapter.name, x: e.clientX + 15, y: e.clientY + 15 });
              }}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => {
                if (chapter?.url) window.open(chapter.url, "_blank");
              }}
            />
          );
        })}
      </svg>
      <div
        className={`${styles.tooltip} ${tooltip ? styles.tooltipVisible : ""}`}
        style={tooltip ? { left: tooltip.x, top: tooltip.y } : undefined}
      >
        {tooltip?.name}
      </div>
    </div>
  );
}
