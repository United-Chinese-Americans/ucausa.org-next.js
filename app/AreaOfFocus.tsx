import styles from "./AreaOfFocus.module.css";

const FOCUS_AREAS = [
  {
    number: "01",
    title: "Civic Engagement and Political Participation",
    passage:
      "UCA has been a national leader in making sure Chinese American community fully participate in American civic and political life, actively engage in public policy making and debate, and unequivocally demand that they be treated as equals.",
    image: "/assets/program-civil-rights-img.jpg",
    alt: "Civic Engagement and Political Participation",
  },
  {
    number: "02",
    title: "Next Generation",
    passage:
      "To help build a pipeline to nurture future Asian American leaders, UCA created a series of programs to foster leadership, including: Summer Civic Leadership Internship, UCA Summer University, and UCA Youth Convention.",
    image: "/assets/program-youth-img.jpg",
    alt: "Next Generation",
  },
  {
    number: "03",
    title: "Chinese American Culture and Identity",
    passage:
      "UCA believes only when Chinese Americans fully explore and appreciate the unique identity and roots of Chinese American way of life could they fully enjoy their confident and spiritually rewarding American life in this multi-ethnic democracy of ours.",
    image: "/assets/program-Chinese-American-Culture-img03.jpg",
    alt: "Chinese American Culture and Identity",
  },
  {
    number: "04",
    title: "Mental Health and Emotional Well-being",
    passage:
      "Due to a unique set of familial, cultural, and societal factors, mental health issues among Asian American youth are on the rise but have received little attention. Working with local community organizations and a team of experts and counselors, UCA WAVES addresses this urgent need by creating culturally-informed programs to raise awareness and provide knowledge of mental health concerns.",
    image: "/assets/program-mental-health-img.jpg",
    alt: "Mental Health and Emotional Well-being",
  },
];

export default function AreaOfFocus() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Area of Focus</h2>
        </div>
        <div className={styles.headingRule} />

        {FOCUS_AREAS.map((area, index) => (
          <div
            key={area.number}
            className={`${styles.row} ${index % 2 === 1 ? styles.rowReverse : ""}`}
          >
            <div className={styles.imageCol}>
              <img src={area.image} alt={area.alt} loading="lazy" />
            </div>
            <div className={styles.textCol}>
              <div className={styles.number}>{area.number}</div>
              <h3>{area.title}</h3>
              <p>{area.passage}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
