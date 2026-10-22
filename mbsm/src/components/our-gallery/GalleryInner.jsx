"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { galleryItems, galleryCategories as categories, galleryImageSrc } from "./galleryData";
import { FilterPills, Pagination } from "./GalleryControls";
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
          <div className='col-12 col-md-10'>
            <div className={`section__header mb-60 text-center ${styles.header}`} data-aos='fade-up' data-aos-duration={1000}>
              <span className='sub-title'>
                <i className='icon-donation' />
                Where there's less, we give our best!
              </span>
              <h2 className='title-animation_inner'>
                Moments of <span>Devotion</span>
              </h2>
              <p className={styles.tagline}>
                We owe something to the society we live in, and we do this seva with a sense of duty towards it.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div data-aos='fade-up' data-aos-duration={1000}>
          <FilterPills
            options={categories.map(category => ({ key: category, label: category }))}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>

        {currentItems.length === 0 && (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}><i className='fa-solid fa-images' /></span>
            <span className={styles.emptyBadge}>Coming Soon</span>
            <p>Photos for this category will be added soon. Please check back later!</p>
          </div>
        )}

        <div className='row gutter-30 justify-content-center'>
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
        <Pagination page={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
      </div>
      <div className='spade'>
        <img src='/assets/images/help/spade.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default GalleryInner;
