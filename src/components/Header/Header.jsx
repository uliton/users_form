import React from 'react';
import { ButtonSignUp } from '../../ui/ButtonSignUp';

import styles from './Header.module.css';

export const Header = () => (
  <div className={styles.container}>
    <span className={styles.title}>
      Test assignment for front-end developer
    </span>
    <span className={styles.description}>
      What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
    </span>
    <a href="#form" style={{ "textDecoration": 'none' }}>
      <ButtonSignUp status={true} />
    </a>
  </div>
);
