"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import styles from "./UpdatesFeed.module.css";

const categories = [
  { id: "all", label: "All Updates", icon: "fa-solid fa-border-all" },
  { id: "announcements", label: "Announcements", icon: "fa-solid fa-bullhorn" },
  { id: "events", label: "Events", icon: "fa-solid fa-calendar-star" },
  { id: "seva", label: "Seva & Outreach", icon: "fa-solid fa-hands-holding-heart" },
  { id: "spiritual", label: "Spiritual", icon: "fa-solid fa-om" },
  { id: "media", label: "Media & Press", icon: "fa-solid fa-newspaper" },
];

const updates = [
  {
    id: 1,
    category: "events",
    tag: "Events",
    date: "18 Oct 2026",
    title: "Diwali Mahotsav 2026 at Shankar Maharaj Math",
    excerpt:
      "This Diwali, the Math comes alive with special evening aarti, prasad distribution, and an all-night devotional program for the community.",
    image: "blog/one.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "seva",
    tag: "Seva & Outreach",
    date: "15 Oct 2026",
    title: "Thursday Annadan Seva Milestone: 10,000 Meals Served",
    excerpt:
      "We are grateful to announce that our weekly Annadan Seva has now served over ten thousand meals to devotees and visitors since its inception.",
    image: "blog/two.jpg",
    featured: false,
  },
  {
    id: 3,
    category: "spiritual",
    tag: "Spiritual",
    date: "10 Oct 2026",
    title: "New Nirupan Series: Eight Volumes Released",
    excerpt:
      "Sri Vishweshwar Swami Maharaj's latest teachings are now available in our blog. The eight-volume Nirupan series covers karma, the age of Kali, and the path of liberation.",
    image: "blog/three.jpg",
    featured: false,
  },
  {
    id: 4,
    category: "announcements",
    tag: "Announcements",
    date: "05 Oct 2026",
    title: "MBSM Trust Website Relaunched with New Features",
    excerpt:
      "We are pleased to announce the relaunch of the official MBSM Trust website with improved navigation, new blog content, and a fresh spiritual design.",
    image: "blog/four.jpg",
    featured: false,
  },
  {
    id: 5,
    category: "events",
    tag: "Events",
    date: "28 Sep 2026",
    title: "Navratri Celebrations & Gaadi Seva at the Math",
    excerpt:
      "Nine days of devotion, service, and community at the Shankar Maharaj Math in Ahilyanagar. Open to all devotees from across Maharashtra.",
    image: "blog/five.jpg",
    featured: false,
  },
  {
    id: 6,
    category: "media",
    tag: "Media & Press",
    date: "20 Sep 2026",
    title: "MBSM Trust Featured in Lokmat Spiritual Column",
    excerpt:
      "The Trust's Thursday seva initiatives and spiritual outreach programs were highlighted in a recent feature by Lokmat, Maharashtra's leading daily.",
    image: "blog/six.jpg",
    featured: false,
  },
];

const UpdatesFeed = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return updates;
    return updates.filter((u) => u.category === activeCategory);
  }, [activeCategory]);

  const featured = filtered.find((u) => u.featured) || filtered[0];
  const rest = filtered.filter((u) => u !== featured);

  return (
    <section className={styles.feed}>
      <div className="container">

        {/* section header */}
        <div className={`row justify-content-between align-items-end ${styles.sectionHeader}`}>
          <div className="col-12 col-lg-6" data-aos="fade-up" data-aos-duration={1000}>
            <span className={styles.subTitle}>
              <i className="icon-donation" />
              What&apos;s Happening
            </span>
            <h2 className={styles.heading}>
              Recent <span>Updates</span>
            </h2>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-lg-end mt-3 mt-lg-0" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={200}>
            <p className={styles.subCopy}>
              Stay informed about our events, seva programs, spiritual teachings, and community milestones.
            </p>
          </div>
        </div>

        {/* category filters */}
        <div
          className={styles.filterRow}
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={100}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              <i className={cat.icon} />
              {cat.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty} data-aos="fade-up" data-aos-duration={800}>
            <i className="fa-solid fa-inbox" />
            <h4>No Updates Yet</h4>
            <p>Updates in this category will appear here soon. Check back shortly.</p>
          </div>
        ) : (
          <>
            {/* featured card */}
            {featured && (
              <div className={styles.featuredWrap} data-aos="fade-up" data-aos-duration={1000}>
                <div className={styles.featuredCard}>
                  <div className={styles.featuredThumb}>
                    <img
                      src={`/assets/images/${featured.image}`}
                      alt={featured.title}
                    />
                    <span className={styles.featuredBadge}>Featured</span>
                  </div>
                  <div className={styles.featuredBody}>
                    <span className={styles.tag}>{featured.tag}</span>
                    <h3 className={styles.featuredTitle}>{featured.title}</h3>
                    <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                    <div className={styles.featuredMeta}>
                      <span>
                        <i className="fa-solid fa-calendar-days" />
                        {featured.date}
                      </span>
                      <span>
                        <i className="fa-solid fa-user" />
                        MBSM Trust
                      </span>
                    </div>
                    <Link href="/our-blogs" className={styles.readMore}>
                      Read Full Update <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* rest grid */}
            {rest.length > 0 && (
              <div className={`row gutter-30 ${styles.cardsGrid}`}>
                {rest.map((item, i) => (
                  <div
                    key={item.id}
                    className="col-12 col-md-6 col-xl-4"
                  >
                    <div
                      className={styles.card}
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={i * 100}
                    >
                      <div className={styles.thumb}>
                        <img
                          src={`/assets/images/${item.image}`}
                          alt={item.title}
                        />
                        <span className={styles.cardTag}>{item.tag}</span>
                      </div>
                      <div className={styles.cardBody}>
                        <div className={styles.cardMeta}>
                          <span>
                            <i className="fa-solid fa-calendar-days" />
                            {item.date}
                          </span>
                        </div>
                        <h5 className={styles.cardTitle}>{item.title}</h5>
                        <p className={styles.cardExcerpt}>{item.excerpt}</p>
                        <Link href="/our-blogs" className={styles.cardCta}>
                          Read More <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* decorative bg */}
      <div className={styles.bgShape} aria-hidden="true">
        <img src="/assets/images/blog/blog-bg.png" alt="" />
      </div>
    </section>
  );
};

export default UpdatesFeed;
