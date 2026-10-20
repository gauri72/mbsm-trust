"use client";
import styles from "./UpdatesHighlights.module.css";

const highlights = [
  {
    id: 1,
    icon: "fa-solid fa-hands-praying",
    count: "500+",
    label: "Spiritual Events",
    description: "Pravachans, kathas, and satsangs conducted across Maharashtra.",
  },
  {
    id: 2,
    icon: "fa-solid fa-bowl-rice",
    count: "10,000+",
    label: "Meals Served",
    description: "Through our Thursday Annadan Seva at Shankar Maharaj Math.",
  },
  {
    id: 3,
    icon: "fa-solid fa-users",
    count: "25,000+",
    label: "Lives Touched",
    description: "Devotees and community members reached through our outreach.",
  },
  {
    id: 4,
    icon: "fa-solid fa-star-and-crescent",
    count: "68+",
    label: "Blogs Published",
    description: "Spiritual insights, teachings, and mission updates shared.",
  },
];

const UpdatesHighlights = () => {
  return (
    <section className={styles.highlights}>
      <div className="container">
        <div
          className={styles.gridHeader}
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <span className={styles.label}>AT A GLANCE</span>
        </div>

        <div className="row gutter-30">
          {highlights.map((item, i) => (
            <div key={item.id} className="col-12 col-sm-6 col-xl-3">
              <div
                className={styles.card}
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={i * 150}
              >
                <div className={styles.iconWrap}>
                  <i className={item.icon} />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.count}>{item.count}</h3>
                  <h6 className={styles.cardLabel}>{item.label}</h6>
                  <p className={styles.desc}>{item.description}</p>
                </div>
                <div className={styles.accentLine} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpdatesHighlights;
