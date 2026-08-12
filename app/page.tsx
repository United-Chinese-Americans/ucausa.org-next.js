import Link from "next/link";
import NewsGrid from "@/components/NewsGrid";
import { conventionNews } from "@/lib/data/conventionNews";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroCenterTitle}>
          <h1>United Chinese Americans</h1>
        </div>
        <div className={styles.heroBottomContent}>
          <p>UCA is a 501 C3 nonprofit organization. EIN 82-1111498</p>
          <div className={styles.heroBtnGroup}>
            <Link href="/about" className={styles.heroBtn}>
              Learn more
            </Link>
            <Link href="/join" className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}>
              Join us
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionContainer}>
          <div className={styles.missionLeft}>
            <h2>Our Mission</h2>
          </div>
          <div className={styles.missionRight}>
            <p>
              United Chinese Americans (UCA) is a nationwide nonprofit and
              nonpartisan federation and civic movement, inspired and
              dedicated to enriching and empowering Chinese American
              communities through civic engagement, political participation,
              heritage sharing, youth development and a greater understanding
              between the people of the United States and China for the
              well-being of all Americans and this world.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.newsSection}>
        <div className={styles.newsContainer}>
          <div className={styles.newsHeader}>
            <div>
              <span className={styles.eyebrow}>LATEST NEWS • 最新动态</span>
              <h2>Chinese Americans Convention News</h2>
            </div>
            <div>
              <Link href="/convention/news" className={styles.viewAllLink}>
                View All News{" "}
                <span className={`material-symbols-outlined ${styles.materialSymbolsOutlined}`}>
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <NewsGrid items={conventionNews.slice(0, 3)} />
        </div>
      </section>
    </>
  );
}
