import Link from "next/link";
import styles from "./ComingSoon.module.css";

const ComingSoon = ({ icon = "fa-solid fa-hourglass-half", title, text }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7">
            <div className={styles.content} data-aos="fade-up" data-aos-duration={1000}>
              <span className={styles.icon}>
                <i className={icon} />
              </span>
              <span className={styles.badge}>Coming Soon</span>
              <h2 className={styles.heading}>{title}</h2>
              <p className={styles.body}>{text}</p>
              <div className={styles.actions}>
                <Link href="/" className="btn--primary">
                  Back to Home <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/contact-us" className="btn--secondary">
                  Contact Us <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
