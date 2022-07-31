import React, { useEffect, useState } from 'react';

import styles from './Uploader.module.css';

export const Uploader = ({ setPhoto, errorText }) => {
  const [fileName, setFileName] = useState('');
  const [photoErrorText, setPhotoErrorText] = useState('');

  useEffect(() => {
    setPhotoErrorText(errorText);
  }, [errorText]);

  const fileInfo = (info) => {
    setFileName(info.name);
    setPhoto(info);
    setPhotoErrorText('');
  };

  return (
    <>
      <input
        type="file"
        id="file"
        style={{ display: 'none' }}
        onChange={event => {
          fileInfo(event.target.files[0]);
        }}
      />
      <label htmlFor="file" className={styles.uploader}>
        <span className={styles.uploader_button}>
          Upload
        </span>
        <span className={styles.uploader_label}>
          {fileName || 'Upload your photo'}
        </span>
      </label>
      
      <span className={styles.upload_error}>
        {photoErrorText}
      </span>
    </>
  );
};
