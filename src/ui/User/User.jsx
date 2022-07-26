import React from 'react';
import img from '../../images/Снимок.png';
import emptyImg from '../../images/photo-cover.svg';

import styles from './User.module.css';

export const User = () => (
  <div className={styles.container}>
    <img src={img || emptyImg} alt="person" className={styles.photo} />

    <div>
      Sasha
    </div>

    <div>
      Position
      <br />
      Email
      <br />
      Pnone number
    </div>

  </div>
);
