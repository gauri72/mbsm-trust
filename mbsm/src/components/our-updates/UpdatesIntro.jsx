import styles from "./UpdatesIntro.module.css";

const UpdatesIntro = () => {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-12 col-lg-8 col-xl-6 text-center"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <span className="sub-title">
              <i className="icon-donation" />
              Stay Connected With Our Mission
            </span>
            <h2 className="title-animation_inner">
              Latest News &amp; <span>Updates</span>
            </h2>
            <p>
              Every step forward is a story worth sharing. Here you will find our most recent
              announcements, program highlights, spiritual events, and community milestones — all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesIntro;
