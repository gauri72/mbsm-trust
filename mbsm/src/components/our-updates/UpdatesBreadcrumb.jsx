"use client";
import Link from "next/link";
import styles from "./UpdatesBreadcrumb.module.css";

const UpdatesBreadcrumb = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className={`col-12 ${styles.content}`}>
            <span className={styles.subTitle}>
              <i className="icon-donation" />
              Where there&apos;s less, we give our best!
            </span>
            <h2 className={styles.title}>Our Updates</h2>
            <nav className={styles.breadcrumb} aria-label="breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-hidden="true">
                  <i className="fa-solid fa-chevron-right" />
                </li>
                <li aria-current="page">Our Updates</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.bannerBg}>
        <img src="/assets/images/banner/banner-bg.png" alt="" aria-hidden="true" />
      </div>
      <div className={styles.shape}>
        <img src="/assets/images/shape.png" alt="" aria-hidden="true" />
      </div>
      <div className={styles.sprade} data-aos="zoom-in" data-aos-duration={1000}>
        <img
          src="/assets/images/sprade-base.png"
          alt=""
          aria-hidden="true"
          className={styles.baseImg}
        />
      </div>
    </section>
  );
};

export default UpdatesBreadcrumb;
