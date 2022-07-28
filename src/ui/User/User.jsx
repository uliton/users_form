import React from 'react';
import emptyImg from '../../images/photo-cover.svg';
import { Box, Tooltip } from '@mui/material';

import styles from './User.module.css';

export const User = ({ photo, name, position, email, phone}) => (
  <div className={styles.container}>
    <img src={photo || emptyImg} alt="person" className={styles.photo} />

    <Tooltip title={name} followCursor>
      <span className={styles.name}>
        {name}
      </span>
    </Tooltip>

    <div className={styles.info}>
      <Tooltip title={position} followCursor>
        <div>
          {position}
        </div>
      </Tooltip>
      <Tooltip title={email} followCursor>
        <a href={`mailto:${email}`} className={styles.link}>
          {email}
        </a>
      </Tooltip>
      <Tooltip title={phone} followCursor>
        <a href={`tel:${phone}`} className={styles.link}>
          {phone}
        </a>
      </Tooltip>
    </div>
  </div>
);
