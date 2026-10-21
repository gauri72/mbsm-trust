import Link from "next/link";
import { getGalleryItem, galleryImageSrc } from "./galleryData";
import styles from "./GalleryDetail.module.css";

const GalleryDetail = ({ slug }) => {
  const item = getGalleryItem(slug);

  if (!item) {
    return (
      <section className='blog-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='text-center'>
                <h2>Album Not Found</h2>
                <Link href='/our-gallery' className='btn--primary'>
                  Back to Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='blog-main'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8'>
            <article className='blog__single'>
              <div className='blog__single-thumb'>
                <div>
                  <img src={galleryImageSrc(item.image)} alt={item.title} className={styles.poster} />
                </div>
              </div>
              <div className='blog__single-meta'>
                <p>
                  <i className='fa-solid fa-folder-open' /> {item.category}
                </p>
                <p>
                  <i className='fa-solid fa-user' /> MBSM Trust
                </p>
              </div>
              <div className='blog__single-content'>
                <h4>{item.title}</h4>
                <div className='blog-content-text'>
                  {item.content.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className={styles.comingSoon}>
                  <span className={styles.comingSoonIcon}><i className='fa-solid fa-images' /></span>
                  <div>
                    <strong>Photo Album Coming Soon</strong>
                    <span>We are gathering photos from {item.title}. Please check back soon!</span>
                  </div>
                </div>
              </div>
              <div className='blog__single-cta'>
                <Link href='/our-gallery'>
                  <i className='fa-solid fa-arrow-left' /> Back to Gallery
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryDetail;
