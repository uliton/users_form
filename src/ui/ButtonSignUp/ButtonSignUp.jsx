import React from 'react';

import styles from './ButtonSignUp.module.css';

export const ButtonSignUp = ({ status, onSubmit }) => (
  <>
    {status ? (
      <button
        type="button"
        className={styles.button}
        onClick={onSubmit}
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
