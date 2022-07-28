import React from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ButtonSignUp } from '../../ui/ButtonSignUp';

import styles from './Form.module.css';

export const Form = () => (
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
          />
          <TextField
            id="outlined-basic"
            label="Email"
            helperText="Enter your email"
            variant="outlined"
            className={styles.input}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            helperText="+38 (XXX) XXX - XX - XX"
            variant="outlined"
            className={styles.input}
          />
        </div>

        <p className={styles.position}>
        Select your position
        </p>

        <RadioGroup
            // defaultValue={1}
            // aria-labelledby="position-group"
            className={styles.radio_buttons}
        >
          <FormControlLabel
            value="Frontend developer"
            label="Frontend developer"
            control={<Radio sx={{
              '&.Mui-checked': {
                color: '#00BDD3',
              },
            }}/>}
            className={styles.radio_button}
          />
          <FormControlLabel
            value="Backend developer"
            label="Backend developer"
            control={<Radio sx={{
              '&.Mui-checked': {
                color: '#00BDD3',
              },
            }}/>}
            className={styles.radio_button}
          />
          <FormControlLabel
            value="Designer"
            label="Designer"
            control={<Radio sx={{
              '&.Mui-checked': {
                color: '#00BDD3',
              },
            }}/>}
            className={styles.radio_button}
          />
          <FormControlLabel
            value="QA"
            label="QA"
            control={<Radio sx={{
              '&.Mui-checked': {
                color: '#00BDD3',
              },
            }}/>}
            className={styles.radio_button}
          />
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
