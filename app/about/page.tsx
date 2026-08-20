import UsMap from "./UsMap";
import ChaptersList from "./ChaptersList";
import PartnersSection from "./PartnersSection";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <>
      <section className={styles.aboutHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>ABOUT US</h1>
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

      <section className={styles.historySection}>
        <div className={styles.historyContainer}>
          <div className={styles.historyLeft}>
            <h2>Our History</h2>
            <p>
              United Chinese Americans (UCA) was formed at the first Chinese
              American Convention in September 2016. UCA was incorporated and
              received IRS 501(c)(3) nonprofit status in 2017. UCA has since
              grown into a national federation of 12 local chapters and over
              30 community partners. UCA has also formed several partnerships
              with regional and national nonprofit organizations.
            </p>
          </div>
          <div className={styles.historyRight}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/5W8RGDTOjv4"
                title="UCA History Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="chapters-section" className={styles.chaptersSection}>
        <div className={styles.chaptersContainer}>
          <h2>Our Chapters</h2>
          <UsMap />
          <ChaptersList />
        </div>
      </section>

      <PartnersSection />
    </>
  );
}
