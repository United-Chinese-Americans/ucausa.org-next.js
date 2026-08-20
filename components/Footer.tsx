import Link from "next/link";
import SocialLinks from "./SocialLinks";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerTop}>
        <div className={styles.footerCta}>
          <div className={styles.footerContentLeft}>
            <h3>DONATE</h3>
            <p>
              Your support empowers our community and helps us build a better
              future together.
            </p>
          </div>
          <div className={styles.footerContentRight}>
            <div className={styles.footerBtnGroup}>
              <Link href="/join" className={styles.footerJoinBtn}>
                JOIN US
              </Link>
              <Link href="/donate" className={styles.footerDonateBtn}>
                DONATE
              </Link>
            </div>
          </div>
        </div>
        <hr className={styles.footerDivider} />
        <div>
          <p className={styles.footerOrgName}>United Chinese Americans</p>
          <p className={styles.footerAddress}>
            1025 Connecticut Ave NW, Suite 600
            <br />
            Washington, DC 20036
          </p>
          <p className={styles.footerEin}>
            UCA is a 501 C3 nonprofit organization. EIN 82-1111498
          </p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} United Chinese Americans. All rights reserved.</p>
        <SocialLinks variant="dark" />
      </div>
    </footer>
  );
}
