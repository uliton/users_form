import React from 'react';
import logo from '../../images/Logo.svg';

import styles from './Logo.module.css';

export const Logo = () => (
  <img src={logo} alt="logo" className={styles.logo} />
)