/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import emptyImg from '../../images/photo-cover.svg';
import { Tooltip } from '@mui/material';

import styles from './User.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

export const User = ({ photo, name, position, email, phone}) => {
  const [photoDisplay, setPhotoDisplay] = useState(photo);

  useEffect(() => {
    const photoChecker = async () => {
      fetch(photo).catch(_error => {
        setPhotoDisplay(emptyImg);
      });
    };

    photoChecker();
  }, [])

  return (
    <div className={styles.container}>
      <img src={photoDisplay} alt={name} className={styles.photo} />
  
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
};
