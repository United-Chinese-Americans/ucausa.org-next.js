import { chapters, stateNames } from "@/lib/data/chapters";
import styles from "./ChaptersList.module.css";

export default function ChaptersList() {
  const entries = Object.entries(chapters).sort(([a], [b]) =>
    (stateNames[a] ?? a).localeCompare(stateNames[b] ?? b)
  );

  return (
    <ul className={styles.chaptersList}>
      {entries.map(([stateCode, chapter]) => (
        <li key={stateCode} className={styles.chapterCard}>
          <span className={styles.stateCode}>{stateCode}</span>
          <div className={styles.chapterInfo}>
            <p className={styles.stateName}>{stateNames[stateCode] ?? stateCode}</p>
            {chapter.url ? (
              <a href={chapter.url} target="_blank" rel="noopener noreferrer">
                {chapter.name}
              </a>
            ) : (
              <p className={styles.chapterName}>{chapter.name}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
