"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { galleryImageSrc } from "./galleryPaths";
import { FilterPills, Pagination } from "./GalleryControls";
import styles from "./GalleryAlbum.module.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "photo", label: "Photos" },
  { key: "video", label: "Videos" },
  { key: "press", label: "In the News" },
];

const PER_PAGE = 10;

const formatDuration = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

const fileName = src => src.split("/").pop();

const clamp01 = n => Math.min(1, Math.max(0, n));

// object-position that centres a square crop on the item's focus point (found by scripts/focus.swift)
const squarePosition = ({ width, height, focus = [0.5, 0.5] }) => {
  const [fx, fy] = focus;
  if (width > height) {
    const visible = height / width;
    return `${clamp01((fx - visible / 2) / (1 - visible)) * 100}% 50%`;
  }
  if (height > width) {
    const visible = width / height;
    return `50% ${clamp01((fy - visible / 2) / (1 - visible)) * 100}%`;
  }
  return "50% 50%";
};

// items arrive already in date order (see scripts/build-gallery-album.py)
const GalleryAlbum = ({ items, spaced = true }) => {
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);
  const topRef = useRef(null);

  const counts = useMemo(
    () => items.reduce((acc, item) => ({ ...acc, [item.type]: (acc[item.type] || 0) + 1 }), { all: items.length }),
    [items]
  );

  const visible = useMemo(() => (filter === "all" ? items : items.filter(item => item.type === filter)), [items, filter]);

  const totalPages = Math.ceil(visible.length / PER_PAGE);
  const offset = (page - 1) * PER_PAGE;
  const pageItems = visible.slice(offset, offset + PER_PAGE);

  const changeFilter = key => {
    setFilter(key);
    setPage(1);
  };

  const changePage = next => {
    setPage(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // the viewer walks the whole filtered list; closing it lands on the page of the last item seen
  const closeViewer = () => {
    setPage(Math.floor(openIndex / PER_PAGE) + 1);
    setOpenIndex(null);
  };

  return (
    <div className={`${styles.album} ${spaced ? styles.spaced : ""}`}>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-8 col-xl-7'>
          <div className='section__header text-center'>
            <span className={`sub-title ${styles.subTitle}`}>
              <i className='icon-donation' />
              Where there's less, we give our best!
            </span>
            <h2>
              Photo &amp; Video <span>Album</span>
            </h2>
          </div>
        </div>
      </div>

      <div ref={topRef} className={styles.anchor}>
        <FilterPills
          options={FILTERS.filter(f => counts[f.key])}
          value={filter}
          onChange={changeFilter}
        />
      </div>

      <div className={styles.grid}>
        {pageItems.map((item, i) => {
          const index = offset + i;
          return (
            <button
              key={item.src}
              type='button'
              className={styles.tile}
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${item.type === "video" ? "video" : "photo"} ${index + 1} of ${visible.length}`}
            >
              <img
                src={galleryImageSrc(item.thumb)}
                alt=''
                loading='lazy'
                decoding='async'
                style={{ objectPosition: squarePosition(item) }}
              />
              {item.type === "video" && (
                <>
                  <span className={styles.play}>
                    <i className='fa-solid fa-play' />
                  </span>
                  {item.duration && <span className={styles.badge}>{formatDuration(item.duration)}</span>}
                </>
              )}
              {item.type === "press" && (
                <span className={styles.badge}>
                  <i className='fa-solid fa-newspaper' /> News
                </span>
              )}
            </button>
          );
        })}
      </div>

      <Pagination page={page} totalPages={totalPages} onChange={changePage} />

      {openIndex !== null && <Lightbox items={visible} index={openIndex} onChange={setOpenIndex} onClose={closeViewer} />}
    </div>
  );
};

const Lightbox = ({ items, index, onChange, onClose }) => {
  const item = items[index];
  const touchStart = useRef(null);
  const closeRef = useRef(null);

  const go = useCallback(step => onChange((index + step + items.length) % items.length), [index, items.length, onChange]);

  useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // warm the cache for the neighbouring photos so arrowing through feels instant
  useEffect(() => {
    [items[(index + 1) % items.length], items[(index - 1 + items.length) % items.length]].forEach(next => {
      if (next && next.type !== "video") new Image().src = galleryImageSrc(next.src);
    });
  }, [index, items]);

  const onTouchStart = e => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = e => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
    touchStart.current = null;
  };

  const stop = e => e.stopPropagation();

  return (
    <div className={styles.lightbox} role='dialog' aria-modal='true' aria-label='Album viewer' onClick={onClose}>
      <div className={styles.lbTop} onClick={stop}>
        <span className={styles.lbCounter}>
          {index + 1} <span>/ {items.length}</span>
        </span>
        <div className={styles.lbActions}>
          <a href={galleryImageSrc(item.src)} download={fileName(item.src)} className={styles.lbButton} aria-label='Download'>
            <i className='fa-solid fa-download' />
          </a>
          <button ref={closeRef} type='button' className={styles.lbButton} onClick={onClose} aria-label='Close'>
            <i className='fa-solid fa-xmark' />
          </button>
        </div>
      </div>

      <div className={styles.lbStage} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {item.type === "video" ? (
          <video
            key={item.src}
            className={styles.lbMedia}
            src={galleryImageSrc(item.src)}
            poster={galleryImageSrc(item.thumb)}
            controls
            autoPlay
            playsInline
            onClick={stop}
          />
        ) : (
          <img key={item.src} className={styles.lbMedia} src={galleryImageSrc(item.src)} alt={`Photo ${index + 1}`} onClick={stop} />
        )}
      </div>

      {items.length > 1 && (
        <>
          <button
            type='button'
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={e => {
              stop(e);
              go(-1);
            }}
            aria-label='Previous'
          >
            <i className='fa-solid fa-chevron-left' />
          </button>
          <button
            type='button'
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={e => {
              stop(e);
              go(1);
            }}
            aria-label='Next'
          >
            <i className='fa-solid fa-chevron-right' />
          </button>
        </>
      )}
    </div>
  );
};

export default GalleryAlbum;
