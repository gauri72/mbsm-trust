"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./RecentActivities.module.css";

const cards = [
  {
    id: 1,
    date: "१९ ऑक्टोबर २०२६",
    category: "सोहळा",
    location: "अहिल्यानगर",
    title: "दिव्यांग गरजू व्यक्तीस तीन चाकी सायकल वाटप",
    media: "/assets/images/updates/banner-1.png",
    isVideo: false,
  },
  {
    id: 2,
    date: "१९ ऑक्टोबर २०२६",
    category: "सोहळा",
    location: "अहिल्यानगर",
    title: "श्री विश्वेश्वर स्वामी महाराजांच्या हस्ते मठात पालखी मिरवणूक",
    media: "/assets/images/updates/photos-1.png",
    isVideo: false,
  },
  {
    id: 3,
    date: "१९ ऑक्टोबर २०२६",
    category: "सोहळा",
    location: "अहिल्यानगर",
    title: "शंखनाद व ध्वजपताका सहित पालखी सोहळा",
    media: "/assets/images/updates/photos-2.png",
    isVideo: false,
  },
  {
    id: 4,
    date: "१९ ऑक्टोबर २०२६",
    category: "सोहळा",
    location: "अहिल्यानगर",
    title: "पालखीचे भव्य आगमन",
    media: "/assets/images/updates/photos-3.png",
    isVideo: false,
  },
  {
    id: 5,
    date: "१९ ऑक्टोबर २०२६",
    category: "सेवा",
    location: "अहिल्यानगर",
    title: "श्री विश्वेश्वर स्वामी महाराजांच्या हस्ते तीन चाकी सायकलची पूजा",
    media: "/assets/images/updates/photos-4.png",
    isVideo: false,
  },
  {
    id: 6,
    date: "१९ ऑक्टोबर २०२६",
    category: "सेवा",
    location: "अहिल्यानगर",
    title: "गुरुवर्यांच्या हस्ते दिव्यांग सेवार्थींसाठी सायकल सुपूर्द",
    media: "/assets/images/updates/photos-5.png",
    isVideo: false,
  },
  {
    id: 7,
    date: "१९ ऑक्टोबर २०२६",
    category: "सेवा",
    location: "अहिल्यानगर",
    title: "कु. मोहिनी साळवे — तीन चाकी सायकल मिळाल्याचा आनंद",
    media: "/assets/images/updates/photos-6.png",
    isVideo: false,
  },
  {
    id: 8,
    date: "१९ ऑक्टोबर २०२६",
    category: "व्हिडिओ",
    location: "अहिल्यानगर",
    title: "श्री विश्वेश्वर स्वामी महाराजांच्या हस्ते पूजन सोहळा",
    media: "/assets/images/updates/videos-1.mp4",
    isVideo: true,
  },
  {
    id: 9,
    date: "१९ ऑक्टोबर २०२६",
    category: "व्हिडिओ",
    location: "अहिल्यानगर",
    title: "दिव्यांग सेवा सोहळा — हृदयस्पर्शी क्षण",
    media: "/assets/images/updates/videos-2.mp4",
    isVideo: true,
  },
];

/* ── Lightbox ── */
const LightboxModal = ({ item, onClose }) => {
  const isVid = item.endsWith(".mp4");
  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">
        <i className="fa-solid fa-xmark" />
      </button>
      <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
        {isVid ? (
          <video src={item} controls autoPlay loop className={styles.lightboxMedia} />
        ) : (
          <img src={item} alt="" className={styles.lightboxMedia} />
        )}
      </div>
    </div>
  );
};

/* ── Card ── */
const ActivityCard = ({ card, onOpen }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
  <div className={styles.card}>
    {/* Image — 9:16 ratio */}
    <div className={styles.cardImage} onClick={onOpen}>
      {card.isVideo ? (
        <video ref={videoRef} src={card.media} muted playsInline loop className={styles.cardImg} />
      ) : (
        <img src={card.media} alt={card.subtitle} className={styles.cardImg} />
      )}
      <div className={styles.imgOverlay} />
    </div>

    {/* Text below image */}
    <div className={styles.cardBody}>
      <p className={styles.cardMeta}>{card.date}&nbsp;·&nbsp;{card.category}</p>
      <h5 className={styles.cardTitle}>{card.title}</h5>
      <button className={styles.cardCta} onClick={onOpen}>Watch Highlights</button>
    </div>
  </div>
  );
};

/* ── Section ── */
const RecentActivities = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const timerRef = useRef(null);

  const getCardStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 260;
    const card = track.querySelector(`.${styles.card}`);
    if (!card) return 260;
    return card.offsetWidth + 24;
  }, []);

  const scrollToIndex = useCallback((idx) => {
    const track = trackRef.current;
    if (!track) return;
    // 16px is the track padding-left
    track.scrollTo({ left: idx * getCardStep(), behavior: "smooth" });
  }, [getCardStep]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % cards.length;
        scrollToIndex(next);
        return next;
      });
    }, 5000);
  }, [scrollToIndex]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const step = getCardStep();
      if (!step) return;
      setActiveIndex(Math.round(track.scrollLeft / step));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [getCardStep]);

  const handleArrow = (dir) => {
    const next = (activeIndex + dir + cards.length) % cards.length;
    setActiveIndex(next);
    scrollToIndex(next);
    startTimer();
  };

  return (
    <section className={styles.section}>
      {/* Header — centered */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 text-center">
            <span className={`sub-title ${styles.subTitleRed}`}>
              <i className="icon-donation" />
              Where there's less, We give our best!
            </span>
            <h2 className={styles.sectionHeading}>
              Recent <span>Activities</span>
            </h2>
            <p>Every seva, every celebration — captured live from the Math.</p>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="container">
        <div className={styles.sliderOuter}>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => handleArrow(-1)} aria-label="Previous">
            <i className="fa-solid fa-arrow-left" />
          </button>

          <div className={styles.track} ref={trackRef}>
            {cards.map((c) => (
              <ActivityCard key={c.id} card={c} onOpen={() => setLightbox(c.media)} />
            ))}
          </div>

          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => handleArrow(1)} aria-label="Next">
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {cards.map((_, i) => (
          <span
            key={i}
            className={`${styles.dotItem} ${i === activeIndex ? styles.dotActive : ""}`}
            onClick={() => { setActiveIndex(i); scrollToIndex(i); startTimer(); }}
          />
        ))}
      </div>

      {lightbox && (
        <LightboxModal item={lightbox} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
};

export default RecentActivities;
