import HeroSlider from "./HeroSlider";
import styles from "./Convention.module.css";

const HIGHLIGHTS = [
  "UCA National Youth Conference",
  "National Chinese American Mental Health Conference",
  "Chinese American Elected Officials Summit",
  "First Chinese American National Pickleball Tournament",
  "National Association of Chinese American College Students (NACACS)",
  "First North American Chinese Book Fair",
  "Chinese American Community Showcase/Exhibition",
  "Youth Organizations Showcase/Exhibition",
  "UCA Award Ceremony and Gala",
  "Post Convention UCA Family Vacation Package",
];

const SPONSORSHIP_KIT_PDF =
  "https://storage.googleapis.com/objects.ucausa.org/convention/2026%20UCA_ConventiSponsorship_Kit_Template%202.pdf";

export default function ConventionPage() {
  return (
    <>
      <section className={styles.conventionHero}>
        <HeroSlider />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>CHINESE AMERICAN CONVENTION</h1>
        </div>
      </section>

      <section className={styles.convention2026}>
        <h2 className={styles.sectionTitle}>2026 CHINESE AMERICAN CONVENTION</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.textColumn}>
            <h2>2026 Chinese American Convention</h2>
            <p>Dear Sir or Madam,</p>
            <p>
              On behalf of United Chinese Americans (UCA), the leading
              national coalition dedicated to advancing and protecting the
              wellbeing and equal rights of Chinese Americans, we are honored
              to invite you and your organization to join us as a sponsor of
              the 2026 Chinese American Convention and the Chinese American
              Youth Convention, to be held June 28 – July 1, 2026, at the
              iconic Caesars Palace in Las Vegas, Nevada.
            </p>
            <p>
              Since its founding in 2016, the Chinese American Convention has
              become the premier gathering for Chinese American civic and
              community leaders, elected officials, youth representatives,
              business executives, and academics. Every two years,
              participants come together to exchange ideas, address common
              concerns, build partnerships, and strengthen friendships in the
              spirit of service to both our community and America as a
              whole.
            </p>
            <p>
              The 2026 Convention will be a milestone event, drawing an
              estimated 1,000–1,500 participants from across the United
              States and beyond. It will mark UCA’s 10th anniversary while
              also celebrating America’s 250th birthday. True to tradition,
              we will host the largest Chinese American celebration
              ever—in none other than America’s greatest party city, Las
              Vegas! We would be deeply honored to have your generous
              support as a donor or sponsor. This rare opportunity will allow
              your organization to gain visibility, showcase leadership, and
              demonstrate commitment to community building on a national
              stage. Your partnership at this pivotal moment will be both
              appreciated and remembered.
            </p>
            <p>
              Please do not hesitate to contact us with any questions. We
              look forward to welcoming you as part of this historic
              celebration.
            </p>
            <p>Sincerely yours,</p>
            <p>
              Haipei Shue 薛海培
              <br />
              President, United Chinese Americans
            </p>
            <p>
              Hardy Li, PE 黎观城
              <br />
              Chair, Fundraising Committee of UCA
            </p>
          </div>
          <div className={styles.imageColumn}>
            <img
              src="https://storage.googleapis.com/objects.ucausa.org/convention/2026-Convention-Flyer1.png"
              alt="2026 Convention Flyer"
            />
            <a
              href="https://www.zeffy.com/en-US/ticketing/2026-chinese-american-convention-2"
              className={styles.registerBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          </div>
        </div>
      </section>

      <section className={styles.conventionDetails}>
        <div className={styles.contentWrapper}>
          <div className={`${styles.imageColumn} ${styles.imageColumn2}`}>
            <img
              src="https://storage.googleapis.com/objects.ucausa.org/convention/2026-Convention-Flyer2.png"
              alt="2026 Convention Flyer 2"
            />
          </div>
          <div className={styles.textColumn}>
            <h2>2026 Convention Highlights</h2>
            <p>
              {HIGHLIGHTS.map((item) => (
                <span key={item}>
                  • {item}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sponsorshipKit}>
        <h2 className={styles.sectionTitle}>2026 UCA Convention Sponsorship Kit</h2>
        <div className={styles.pdfViewerContainer}>
          <iframe src={SPONSORSHIP_KIT_PDF} title="2026 UCA Convention Sponsorship Kit" />
        </div>
        <div className={styles.downloadContainer}>
          <a
            href={SPONSORSHIP_KIT_PDF}
            className={styles.registerBtn}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download 2026 UCA Convention Sponsorship Kit
          </a>
        </div>
      </section>
    </>
  );
}
