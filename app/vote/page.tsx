import styles from "./Vote.module.css";

const JOIN_URL = "https://shorturl.at/ikzjX";
const TRAINING_ZOOM_URL =
  "https://us02web.zoom.us/meeting/register/tbtf7I9STlqe2o1U8959ww";

const REQUIREMENTS = [
  "Independently organize at least two voter registration events this fall.",
  "Engage at least 10 volunteers in total.",
  <>
    Participate in one online voter registration training session (September
    9 at 8:00 p.m. ET) and the post-election experience-sharing and debrief
    session (November 5 at 8:30 p.m. ET):{" "}
    <a href={TRAINING_ZOOM_URL} target="_blank" rel="noopener noreferrer">
      Register here
    </a>
  </>,
  "Use your organization's member communication channels at least twice to remind community members about early voting and encourage them to vote on November 3.",
];

const RESOURCE_LINKS = [
  { href: "https://apiavote.org/", label: "https://apiavote.org/" },
  {
    href: "https://apiavote.org/how-to-vote/in-your-state/",
    label: "https://apiavote.org/how-to-vote/in-your-state/",
  },
  {
    href: "https://fairelectionscenter.org/voter-registration-drive-guides/",
    label: "https://fairelectionscenter.org/voter-registration-drive-guides/",
  },
  { href: "http://www.vote411.org/", label: "http://www.vote411.org/" },
];

const BENEFITS = [
  "Your organization's name and logo will be featured in all relevant UCA promotional materials and permanently displayed on the UCA website.",
  'Your organization will receive the UCA-certified designation and logo of "Civic Leadership Organization," helping strengthen its visibility, credibility, and civic leadership within the local community.',
  "Your participation may strengthen your organization's qualifications and opportunities for favorable consideration and recommendations when applying in the future for funding from the UCA Community Foundation (UCACF.org), other U.S. charitable foundations, and government grant programs.",
];

export default function VotePage() {
  return (
    <>
      <section className={styles.voteHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>VOTE</h1>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.introText}>
            <p className={styles.eyebrow}>
              Your Vote Truly Matters
            </p>
            <h2>2026 National Chinese American Voter Mobilization</h2>
            <p className={styles.tagline}>
              Register to Run | Vote Actively | Make Your Voice Heard
            </p>
            <p>To Chinese American organizations and friends across the country:</p>
            <p>
              As summer draws to a close and the midterm elections approach,
              United Chinese Americans (UCA) is launching the nonpartisan
              &ldquo;2026 National Chinese American Voter Mobilization.&rdquo;
              We sincerely call on Chinese American organizations in every
              state to join UCA in this nationwide effort to strongly promote
              voter registration and voter turnout among Chinese Americans,
              and to help change the persistent lack of engagement among some
              members of our community in political participation and civic
              responsibility.
            </p>
            <p>
              You and your organization may participate as an individual, a
              participating organization, or a Partner Organization. We
              especially encourage your organization to register as soon as
              possible as a Partner Organization of the &ldquo;2026 National
              Chinese American Voter Mobilization.&rdquo;
            </p>
            <a
              href={JOIN_URL}
              className={styles.joinBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Initiative
            </a>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          <h2>Four Requirements to Qualify as a Partner Organization</h2>
          <div className={styles.cardGrid}>
            {REQUIREMENTS.map((text, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.cardNumber}>{i + 1}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.gridSection} ${styles.gridSectionAlt}`}>
        <div className={styles.gridContainer}>
          <h2>Benefits of Becoming a Partner Organization</h2>
          <div className={styles.cardGrid}>
            {BENEFITS.map((text, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.cardNumber}>{i + 1}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.matters}>
        <div className={styles.mattersContainer}>
          <h2>Defend Chinese American Rights Through Democracy</h2>
          <blockquote>&ldquo;Elections are where our voices count!&rdquo;</blockquote>
          <p>
            From the shadow cast by the China Initiative, to legislation
            introduced or enacted in more than 30 states restricting land
            purchases by certain Chinese nationals, and the growing number of
            discriminatory laws and policies, the experiences of the Chinese
            American community over the past several years have repeatedly
            demonstrated one simple truth:
          </p>
          <blockquote>
            &ldquo;If you don&rsquo;t care about politics, politics will
            eventually come to &lsquo;care&rsquo; about you.&rdquo;
          </blockquote>
          <p>
            The most powerful tools we have to defend our rights and
            interests are America&rsquo;s longstanding tradition of the rule
            of law and democratic institutions. And at the foundation of
            those institutions are the registration and vote of every
            Chinese American citizen.
          </p>
          <p>
            Our goal is clear: beginning this year, UCA will work with
            Chinese American communities across the country to make strong,
            nonpartisan voter mobilization a sustained and ongoing
            effort&mdash;until Chinese Americans finally shed the label of
            being the ethnic group with the lowest voter turnout in the
            United States.
          </p>
          <p>
            Changing the future of Chinese Americans and defending the
            Chinese American Dream begins with your vote&mdash;and ours.
          </p>
        </div>
      </section>

      <section className={styles.closingCta}>
        <h2>We look forward to having you join us!</h2>
        <a
          href={JOIN_URL}
          className={styles.joinBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the 2026 National Chinese American Voter Mobilization
        </a>
      </section>

      <section className={styles.resourcesSection}>
        <div className={styles.gridContainer}>
          <h2>Additional Information</h2>
          <p>
            For more information on voter registration and helpful
            resources, you can visit the following websites:
          </p>
          <ul className={styles.resourcesList}>
            {RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
