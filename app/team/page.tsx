import TeamGrid from "./TeamGrid";
import { boardMembers, executiveMembers } from "@/lib/data/team";
import styles from "./Team.module.css";

export default function TeamPage() {
  return (
    <>
      <section className={styles.teamHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>OUR TEAM</h1>
        </div>
      </section>

      <section className={styles.boardSection}>
        <div className={styles.boardContainer}>
          <h2>Board of Directors</h2>
          <TeamGrid
            members={boardMembers}
            imageBaseUrl="https://storage.googleapis.com/objects.ucausa.org/team/team"
          />
        </div>
      </section>

      <section className={styles.executiveSection}>
        <div className={styles.boardContainer}>
          <h2>Executive Team</h2>
          <TeamGrid
            members={executiveMembers}
            imageBaseUrl="https://storage.googleapis.com/objects.ucausa.org/excutive/excutive"
          />
        </div>
      </section>
    </>
  );
}
