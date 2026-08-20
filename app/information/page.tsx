import Link from "next/link";
import styles from "./Information.module.css";

const TOPICS = [
  {
    id: "uca-weekly",
    title: "UCA Weekly",
    description: "A regular roundup of UCA community news and updates.",
  },
  {
    id: "uca-news",
    title: "UCA News",
    description: "Announcements and coverage of UCA activities nationwide.",
    href: "/convention/news",
  },
  {
    id: "press-release",
    title: "Press Release",
    description: "Official statements and press releases from UCA.",
  },
  {
    id: "find-help-resources",
    title: "Find Help & Resources",
    description: "Resources for the Chinese American community.",
  },
  {
    id: "asian-american-advocacy",
    title: "Asian American Advocacy",
    description: "UCA's advocacy work on behalf of Asian Americans.",
  },
  {
    id: "op-eds",
    title: "Op-Eds by UCA Members",
    description: "Opinion pieces written by members of the UCA community.",
  },
  {
    id: "contact-congress",
    title: "Contact Your Congress Member",
    description: "Tools and guidance for reaching your elected representatives.",
  },
];

export default function InformationPage() {
  return (
    <>
      <section className={styles.infoHero}>
        <div className={styles.heroContent}>
          <h1>Information</h1>
          <p>News, resources, and advocacy tools for the Chinese American community.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          {TOPICS.map((topic) =>
            topic.href ? (
              <Link
                key={topic.id}
                id={topic.id}
                href={topic.href}
                className={`${styles.card} ${styles.cardLink}`}
              >
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </Link>
            ) : (
              <div key={topic.id} id={topic.id} className={styles.card}>
                <span className={styles.badge}>Coming Soon</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            )
          )}
        </div>
      </section>

      <div className={styles.contactCta}>
        <p>
          Have something to share in the meantime? <Link href="/contact">Contact us</Link>.
        </p>
      </div>
    </>
  );
}
