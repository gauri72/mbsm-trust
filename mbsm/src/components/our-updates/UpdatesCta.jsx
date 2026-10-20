"use client";
import Link from "next/link";
import styles from "./UpdatesCta.module.css";

const UpdatesCta = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7">
            <div
              className={styles.content}
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <span className={styles.subTitle}>
                <i className="icon-donation" />
                Be Part of the Mission
              </span>
              <h2 className={styles.heading}>
                Join Our Spiritual Community & Make a Lasting Impact
              </h2>
              <p className={styles.body}>
                Whether you wish to volunteer, donate, or simply stay connected,
                every form of participation strengthens our collective mission
                of seva and devotion.
              </p>
              <div className={styles.actions}>
                <Link href="/donate-us" className="btn--primary">
                  Donate Now <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/contact-us" className="btn--secondary">
                  Contact Us <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* background layers */}
      <div className={styles.bgImage} aria-hidden="true">
        <img
          src="/assets/images/cta/cta-bg.png"
          alt=""
          className="parallax-image"
        />
      </div>
      <div
        className={styles.shapeLeft}
        data-aos="fade-right"
        data-aos-duration={1000}
        data-aos-delay={300}
        aria-hidden="true"
      >
        <img src="/assets/images/cta/shape-left.png" alt="" />
      </div>
      <div className={styles.shapeTwo} aria-hidden="true">
        <img src="/assets/images/shape-two.png" alt="" />
      </div>
    </section>
  );
};

export default UpdatesCta;
