import FeedbackForm from "./FeedbackForm";
import SocialLinks from "@/components/SocialLinks";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <>
      <section className={styles.contactHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className={styles.feedbackSection}>
        <div className={styles.feedbackContainer}>
          <h2>Feedback</h2>
          <FeedbackForm />
        </div>
      </section>

      <section className={styles.mapContactSection}>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://maps.google.com/maps?q=1050%20Connecticut%20Ave.%20NW,%20Suite%20500,%20Washington,%20DC%2020036&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
            title="UCA office location"
          />
        </div>
        <div className={styles.contactInfo}>
          <h3>United Chinese Americans</h3>
          <p>1025 Connecticut Ave NW, Suite 600</p>
          <p>Washington, DC 20036</p>
          <br />
          <p>
            For any inquiries, please contact{" "}
            <a href="mailto:info@ucausa.org">info@ucausa.org</a>.
          </p>
          <br />
          <p>UCA</p>
          <div className={styles.socialRow}>
            <h4>Follow Us</h4>
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}
