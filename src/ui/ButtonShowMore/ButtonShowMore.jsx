import React from 'react';

import styles from './ButtonShowMore.module.css';

export const ButtonShowMore = ({ page, setPage }) => (
  <button
    type="button"
    className={styles.button}
    onClick={() => {
      setPage(page + 1);
    }}
  >
    Show more
  </button>
);
