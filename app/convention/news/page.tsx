import NewsGrid from "@/components/NewsGrid";
import { conventionNews } from "@/lib/data/conventionNews";
import styles from "./ConventionNews.module.css";

export default function ConventionNewsPage() {
  return (
    <>
      <section className={styles.newsHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Chinese Americans Convention News</h1>
        </div>
      </section>

      <section className={styles.newsSection}>
        <div className={styles.newsContainer}>
          <div className={styles.newsHeader}>
            <div>
              <span className={styles.eyebrow}>LATEST NEWS • 最新动态</span>
              <h2>All Chinese Americans Convention News</h2>
            </div>
          </div>
          <NewsGrid items={conventionNews} />
        </div>
      </section>
    </>
  );
}
