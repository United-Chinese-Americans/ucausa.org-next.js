import Link from "next/link";
import styles from "./Events.module.css";

export default function EventsPage() {
  return (
    <>
      <section className={styles.eventsHero}>
        <div className={styles.heroContent}>
          <h1>Events</h1>
          <p>A calendar of UCA events nationwide is on its way.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.card}>
          <span className={styles.badge}>Coming Soon</span>
          <h2>We&rsquo;re building our events calendar</h2>
          <p>
            In the meantime, check out the{" "}
            <a href="https://convention.ucausa.org" target="_blank" rel="noopener noreferrer">
              Chinese American Convention
            </a>
            .
          </p>
          <p>
            Have an event to share? <Link href="/contact">Contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
