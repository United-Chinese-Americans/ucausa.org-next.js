import styles from "./Donate.module.css";

const SPONSORSHIP_KIT_PDF =
  "https://storage.googleapis.com/objects.ucausa.org/convention/2026%20UCA_ConventiSponsorship_Kit_Template%202.pdf";

export default function DonatePage() {
  return (
    <>
      <section className={styles.donateHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>UCA 2026-2027 Fundraising</h1>
          <p>For PayPal, Credit or Debit Card Payment ONLY</p>
          <a
            href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-8081"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroBtn}
          >
            Donate Here
          </a>
          <a
            href={SPONSORSHIP_KIT_PDF}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={styles.heroBtn}
          >
            Sponsorship Kit
          </a>
        </div>
      </section>

      <section className={styles.supportSection}>
        <h2>Support UCA and be Part of the Civic Movement</h2>
        <div className={styles.supportContainer}>
          <div className={styles.supportImage}>
            <img
              src="https://storage.googleapis.com/objects.ucausa.org/donate/donate2.jpg"
              alt="Support UCA"
            />
          </div>
          <div className={styles.supportText}>
            <p>
              Dear UCA Family and Friends,
              <br />
              <br />
              Thank you! Your generosity ensures UCA continues to lead, serve,
              and inspire our community. Because of you, we can defend our
              civil rights, empower our communities, and nurture the unique
              Chinese American way of life.
              <br />
              <br />
              Whether we are in the halls of Congress, in the courtroom, or at
              the local community center, UCA is fighting for our democracy
              and our children’s future. We are building from the ground
              up—and we want you with us.
              <br />
              <br />
              Join the UCA family and be the change you want to see in the
              world.
              <br />
              <br />
              The UCA Team
              <br />
              <br />
              <span className={styles.paymentNote}>
                (We Take Credit Card OR PayPal. You Do Not Need to Set up a
                PayPal Account to Proceed with the Donation)
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.otherWaysSection}>
        <h2>Other ways to donate to UCA</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>1</div>
            <div className={styles.timelineContent}>
              <h3>Bank direct transfer</h3>
              <p>
                <strong>Zelle (to UCA):</strong> treasurer@ucausa.org
              </p>
              <p>
                Please provide your email and phone number when making a
                donation via Zelle, as this will help us identify and
                acknowledge your generosity.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>2</div>
            <div className={styles.timelineContent}>
              <h3>Check donation</h3>
              <p>
                Make check payable to United Chinese Americans (UCA) and mail
                the check to:
              </p>
              <p className={styles.address}>
                United Chinese Americans
                <br />
                1050 Connecticut Ave NW #65303
                <br />
                Washington DC 20035
              </p>
              <p>Please write your email on the memo line of your check.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>3</div>
            <div className={styles.timelineContent}>
              <h3>Donation through company match program</h3>
              <p>
                <a
                  href="https://causes.benevity.org/causesapp/dashboard/840-821111498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://causes.benevity.org/causesapp/dashboard/840-821111498
                </a>
              </p>
              <p className={styles.note}>
                *Please MAKE SURE to provide your name and email address so
                that we can email your donation receipt to you.
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>4</div>
            <div className={styles.timelineContent}>
              <h3>We accept Credit Cards, Debit Cards, and Apple Pay.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.donationInfo}>
        <p>
          Any questions? Contact Yinong Shen, Treasurer UCA,{" "}
          <a href="mailto:treasurer@ucausa.org">treasurer@ucausa.org</a>
        </p>
        <p>
          UCA, a 501c3 nonprofit, UCA’s Federal TAX ID is 82-1111498. Your
          donation is tax deductible.
        </p>
      </section>
    </>
  );
}
