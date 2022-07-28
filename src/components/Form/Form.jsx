import React from 'react';
import { useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ButtonSignUp } from '../../ui/ButtonSignUp';

import styles from './Form.module.css';
import { getPositions } from '../../api/users';
import { useEffect } from 'react';

export const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getPositions().then(result => {
      setPositions([...result.positions])
    })
  }, [])
  
  console.log(positions);

  
  const onFocus = (event) => {
    if (!event) {
      setPhone('+380');
    }
  }

  return (
    <div className={styles.container} id="form">
      <span className={styles.title}>
        Working with GET request
      </span>
  
      <form action="">
        <div className={styles.form}>
          <div className={styles.inputs}>
            <TextField
              id="outlined-basic"
              label="Your name"
              helperText="Enter your name"
              variant="outlined"
              className={styles.input}
              value={userName}
              onChange={event => {
                setUserName(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              helperText="Enter your email"
              variant="outlined"
              className={styles.input}
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Phone"
              helperText="+38 (XXX) XXX - XX - XX"
              variant="outlined"
              className={styles.input}
              value={phone}
              onFocus={event => {
                onFocus(event.target.value);
              }}
              onChange={event => {
                setPhone(event.target.value);
              }}
            />
          </div>
  
          <p className={styles.position}>
          Select your position
          </p>
  
          <RadioGroup className={styles.radio_buttons}>
            {positions.map(position => (
              <FormControlLabel
                key={position.id}
                value={position.name}
                label={position.name}
                control={<Radio sx={{
                  '&.Mui-checked': {
                    color: '#00BDD3',
                  },
                }}/>}
                className={styles.radio_button}
            />
            ))}
          </RadioGroup>
        </div>
  
        <div className={styles.uploader}>
          <button id="uploader" className={styles.uploader_button}>Upload</button>
          <label htmlFor="uploader" className={styles.uploader_label}>Upload your photo</label>
        </div>
  
        <div className={styles.button}>
          <ButtonSignUp />
        </div>
      </form>
  
    </div>
  );
};
