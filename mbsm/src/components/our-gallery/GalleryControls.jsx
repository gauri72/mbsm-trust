"use client";
import styles from "./GalleryControls.module.css";

// Category pills shared by Our Gallery and the album pages
export const FilterPills = ({ options, value, onChange }) => (
  <ul className={styles.filters}>
    {options.map(option => (
      <li key={option.key}>
        <button
          type='button'
          className={`${styles.filter} ${value === option.key ? styles.filterActive : ""}`}
          aria-pressed={value === option.key}
          onClick={() => onChange(option.key)}
        >
          {option.label}
        </button>
      </li>
    ))}
  </ul>
);

export const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label='Pages'>
      <button
        type='button'
        className={styles.pageArrow}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label='Previous page'
      >
        <i className='fa-solid fa-angle-left' />
      </button>
      <button
        type='button'
        className={styles.pageArrow}
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label='Next page'
      >
        <i className='fa-solid fa-angle-right' />
      </button>
    </nav>
  );
};
