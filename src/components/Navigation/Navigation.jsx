import React from 'react';
import { Logo } from '../../ui/Logo';
import { ButtonUsers } from '../../ui/ButtonUsers';
import { ButtonSignUp } from '../../ui/ButtonSignUp';

import styles from './Navigation.module.css';

export const Navigation = () => (
  <div className={styles.header}>
    <Logo />
    <div className={styles.buttonContainer}>
      <a href="#users" style={{ "textDecoration": 'none' }}>
        <ButtonUsers />
      </a>
      <a href="#form" style={{ "textDecoration": 'none' }}>
        <ButtonSignUp status={true} />
      </a>
    </div>
  </div>
);
