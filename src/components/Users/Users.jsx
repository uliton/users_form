import React from 'react';
import { User } from '../../ui/User';
import { ButtonShowMore } from '../../ui/ButtonShowMore'

import styles from './Users.module.css';

export const Users = () => (
  <div className={styles.container}>
    <span className={styles.title}>
      Working with POST request
    </span>

    <div className={styles.grid}>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>

    <div className={styles.button}>
      <ButtonShowMore />
    </div>

  </div>
);
