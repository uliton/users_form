import React from 'react';
import preloader from '../../images/Preloader.svg';

import styles from './Loader.module.css';

export const Loader = () => (
  <img src={preloader} alt="preloader" className={styles.loader}/>
)