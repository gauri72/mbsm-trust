import Link from "next/link";
import { getGalleryItem, galleryImageSrc } from "./galleryData";
import GalleryAlbum from "./GalleryAlbum";
import styles from "./GalleryDetail.module.css";

const BackToGallery = () => (
  <div className={styles.back}>
    <Link href='/our-gallery' className='btn--primary'>
      <i className='fa-solid fa-arrow-left' /> Back to Gallery
    </Link>
  </div>
);

const GalleryDetail = ({ slug }) => {
  const item = getGalleryItem(slug);

  if (!item) {
    return (
      <section className={styles.detail}>
        <div className='container'>
          <div className='section__header text-center'>
            <h2>Album Not Found</h2>
          </div>
          <BackToGallery />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.detail}>
      <div className='container'>
        {/* Intro: poster + story */}
        {!item.hideIntro && (
          <div className={`row align-items-center ${styles.intro}`}>
            <div className='col-12 col-lg-5'>
              <div className={styles.posterWrap}>
                <img src={galleryImageSrc(item.image)} alt={item.title} className={styles.poster} />
              </div>
            </div>
            <div className='col-12 col-lg-7'>
              <div className={`section__header ${styles.introText}`}>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  {item.category}
                </span>
                <h2>{item.title}</h2>
                {item.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {!item.album && (
                <div className={styles.comingSoon}>
                  <span className={styles.comingSoonIcon}>
                    <i className='fa-solid fa-images' />
                  </span>
                  <div>
                    <strong>Photo Album Coming Soon</strong>
                    <span>We are gathering photos from {item.title}. Please check back soon!</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {item.album && <GalleryAlbum items={item.album} spaced={!item.hideIntro} />}

        <BackToGallery />
      </div>
    </section>
  );
};

export default GalleryDetail;
