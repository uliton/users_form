import React from 'react';
import { Logo } from '../../ui/Logo';
import { ButtonUsers } from '../../ui/ButtonUsers';
import { ButtonSignUp } from '../../ui/ButtonSignUp';

import styles from './Navigation.module.css';

export const Navigation = () => (
  <div className={styles.header}>
    <Logo />
    <div className={styles.buttonContainer}>
      <a href="#users">
        <ButtonUsers />
      </a>
      <a href="#form">
        <ButtonSignUp />
      </a>
    </div>
  </div>
);
