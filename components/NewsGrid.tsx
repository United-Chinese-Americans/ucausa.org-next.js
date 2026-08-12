import type { NewsItem } from "@/lib/data/conventionNews";
import styles from "./NewsGrid.module.css";

const CAT_CLASS: Record<NewsItem["catClass"], string> = {
  "cat-maroon": styles.catMaroon,
  "cat-navy": styles.catNavy,
  "cat-gold": styles.catGold,
};

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  return (
    <div className={styles.newsGrid}>
      {items.map((news) => (
        <div key={news.id} className={styles.newsCard}>
          <div className={styles.cardVisual}>
            <img
              src={`/convention-news/convention_news${news.id}.png`}
              alt={news.title}
              loading="lazy"
            />
            <span className={`${styles.categoryBadge} ${CAT_CLASS[news.catClass]}`}>
              {news.category}
            </span>
          </div>
          <div className={styles.cardBody}>
            <span className={styles.timestamp}>{news.date}</span>
            <h3 className={styles.cardTitle}>{news.title}</h3>
            <p className={styles.cardSnippet}>{news.snippet}</p>
            <a
              href={news.link}
              className={styles.readMore}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More{" "}
              <span className={`material-symbols-outlined ${styles.materialSymbolsOutlined}`}>
                chevron_right
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
