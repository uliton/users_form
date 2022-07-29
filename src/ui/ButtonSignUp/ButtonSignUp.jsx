import React from 'react';

import styles from './ButtonSignUp.module.css';

export const ButtonSignUp = ({ status }) => (
  <>
    {status ? (
      <button
        type="submit"
        className={styles.button}
      >
        Sign up
      </button>
    ) : (
      <button className={styles.button} disabled>
          Sign up
        </button>
    )}
  </>
);
