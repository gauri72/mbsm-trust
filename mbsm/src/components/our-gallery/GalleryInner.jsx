"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { galleryItems, galleryCategories as categories, galleryImageSrc } from "./galleryData";
import styles from "./GalleryInner.module.css";

const GalleryInner = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredItems.length / cardsPerPage);
  const currentItems = filteredItems.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className='cause cause-three-alt'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header mb-60 text-center' data-aos='fade-up' data-aos-duration={1000}>
              <span className='sub-title'>
                <i className='icon-donation' />
                Where there's less, we give our best!
              </span>
              <h2 className='title-animation_inner'>
                Moments of <span>Devotion</span>
              </h2>
              <p>
                A journey of bhakti, where every moment is an offering to Sadguru Shree Shankar Maharaj.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className='row'>
          <div className='col-12'>
            <div className='cause__filter mb-50' data-aos='fade-up' data-aos-duration={1000}>
              <ul className='cause__filter-list'>
                {categories.map(category => (
                  <li key={category}>
                    <button
                      type='button'
                      className={selectedCategory === category ? "active" : ""}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {currentItems.length === 0 && (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}><i className='fa-solid fa-images' /></span>
            <span className={styles.emptyBadge}>Coming Soon</span>
            <p>Photos for this category will be added soon. Please check back later!</p>
          </div>
        )}

        <div className='row gutter-30'>
          {currentItems.map((item, index) => (
            <div key={item.slug} className='col-12 col-md-6 col-xl-3 col-xxl-3'>
              <div
                className='cause__slider-inner'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={(index % 4) * 150}
              >
                <div className={`cause__slider-single ${styles.card}`}>
                  <div className='thumb'>
                    <Link href={`/our-gallery/${item.slug}`} className={styles.thumbLink} aria-label={`View ${item.title} album`}>
                      <img src={galleryImageSrc(item.image)} alt={item.title} />
                    </Link>
                  </div>
                  <div className={`content ${styles.content}`}>
                    <h6><span>{item.title}</span></h6>
                    <p>{item.description}</p>
                    <Link href={`/our-gallery/${item.slug}`} className={styles.cta}>
                      View Album <i className='fa-solid fa-arrow-right' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='row'>
            <div className='col-12'>
              <div className='pagination-wrapper' data-aos='fade-up' data-aos-duration={1000}>
                <ul className='pagination main-pagination'>
                  <li>
                    <button
                      type='button'
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      <i className='fa-solid fa-angles-left' />
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                    <li key={pageNum}>
                      <button
                        type='button'
                        className={currentPage === pageNum ? "active" : ""}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      type='button'
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <i className='fa-solid fa-angles-right' />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='spade'>
        <img src='/assets/images/help/spade.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default GalleryInner;
