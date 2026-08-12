import FoundingCarousel from "./FoundingCarousel";
import { membershipTiers, foundingListSlides } from "@/lib/data/membership";
import styles from "./Join.module.css";

export default function JoinPage() {
  return (
    <>
      <section className={styles.joinHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Join UCA</h1>
        </div>
      </section>

      <section className={styles.membershipSection}>
        <div className={styles.membershipContainer}>
          <h2>Join the UCA Movement Today!</h2>
          <p className={styles.sectionIntro}>
            Become a part of a national community and movement dedicated to
            civic engagement, heritage, and empowerment. Choose the
            membership level that fits your journey.
          </p>

          <div className={styles.membershipGrid}>
            {membershipTiers.map((tier) => (
              <div key={tier.title} className={styles.membershipCard}>
                <h3>{tier.title}</h3>
                <p className={styles.tagline}>{tier.tagline}</p>
                <p>{tier.body}</p>
                <ul>
                  {tier.perks.map((perk) => (
                    <li key={perk.label}>
                      <strong>{perk.label}</strong> {perk.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.joinCta}>
            <h3>Ready to make an impact?</h3>
            <a
              href="https://www.zeffy.com/en-US/ticketing/uca-memberships"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.joinNowBtn}
            >
              Join Now
            </a>
          </div>
        </div>
      </section>

      <section className={styles.foundingMembersSection}>
        <div className={styles.foundingMembersContainer}>
          <h2>UCA Founding Members</h2>
          <div className={styles.letterBody}>
            <p className={styles.salutation}>Dear UCA Founding Members,</p>
            <p>
              I am thrilled to extend my heartfelt congratulations to each and
              every one of you for being selected as UCA’s esteemed Founding
              Members! It is truly remarkable to reflect on the journey we
              have embarked upon together. What began as a mere idea, an
              experiment, or perhaps even a dream, has now blossomed into the
              remarkable organization that UCA is today. This achievement
              would not have been possible without your unwavering support,
              trust, and dedication over the years. In these uncertain times,
              it is more important than ever for us to come together as a
              community, to support and uplift one another. UCA has a vital
              role to play in fostering this sense of unity and belonging. By
              strengthening UCA, we are simultaneously strengthening the
              Chinese community as a whole. As we prepare for the next phase
              of our growth and mission, I want to express my sincere
              gratitude for your continued care and guidance. UCA is not just
              an organization, but a collective effort that belongs to each
              and every one of you. It is through your vision and nurturing
              that the UCA movement has flourished. Once again, I want to
              express my deepest gratitude and offer my heartfelt
              congratulations to all of you. Together, let us continue to
              build a stronger and more compassionate community through the
              UCA movement that you have so passionately initiated and
              nurtured.
            </p>

            <div className={styles.letterSignature}>
              <p>With profound appreciation,</p>
              <p className={styles.signatureName}>Haipei Shue</p>
              <p className={styles.signatureTitle}>Founding President</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.foundingListSection}>
        <div className={styles.foundingListContainer}>
          <h2>Founding Member List</h2>
          <FoundingCarousel slides={foundingListSlides} />
        </div>
      </section>
    </>
  );
}
