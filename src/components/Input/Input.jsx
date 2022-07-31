/* eslint-disable react-hooks/exhaustive-deps */
import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import styles from './Input.module.css';

export const Input = ({ value, setValue, errorText, type }) => {
  const placeholder = {
    name: 'Your name',
    email: 'Email',
    phone: 'Phone',
  };

  const defaultHelperText = {
    name: 'Enter your name',
    email: 'Enter your email',
    phone: '+38 (XXX) XXX - XX - XX',
  };

  const [helperText, setHelperText] = useState('');

  useEffect(() => {
    setHelperText(defaultHelperText[type]);
  }, []);

  useEffect(() => {
    if (errorText) {
      setHelperText(errorText);
    }
  }, [errorText]);

  if (helperText !== defaultHelperText[type]) {
    return (
      <TextField
        error
        id="outlined-basic"
        // label="Your name"
        helperText={helperText}
        variant="outlined"
        className={styles.input}
        value={value}
        onChange={event => {
          setValue(event.target.value);
          setHelperText(defaultHelperText[type]);
        }}
      />
    );
  };

  return (
    <TextField
      id="outlined-basic"
      label={placeholder[type]}
      helperText={helperText}
      variant="outlined"
      className={styles.input}
      value={value}
      onFocus={() => {
        if (type === 'phone' && !value) {
          setValue('+380');
        };
      }}
      onChange={event => {
        setValue(event.target.value);
      }}
    />
  );
};
