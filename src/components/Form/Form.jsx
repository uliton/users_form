import React, { useState } from 'react';
import { regExp } from '../../rules/rules';
import { setUser } from '../../api/api';
import { RadioButtons } from '../RadioButtons';
import { ButtonSignUp } from '../../ui/ButtonSignUp';
// import { TextField } from '@mui/material';
import successImage from '../../images/success-image.svg';

import styles from './Form.module.css';
import { Uploader } from '../../ui/Uploader/Uploader';
// import { Input } from '../Input/Input';
import { TextField } from '@mui/material';

export const Form = ({ success, setSuccess }) => {
  const [name, setName] = useState('');
  const [nameHelperText, setNameHelperText] = useState('Enter your name');

  const [email, setEmail] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('Enter your email');

  const [phone, setPhone] = useState('');
  const [phoneHelperText, setPhoneHelperText] = useState('+38 (XXX) XXX - XX - XX');

  const [positionId, setPositionId] = useState('');

  const [photo, setPhoto] = useState({});
  const [photoErrorText, setPhotoErrorText] = useState('');

  const [successErrorText, setSuccessErrorText] = useState('');

  const onFocus = (event) => {
    if (!event) {
      setPhone('+380');
    }
  }

  const nameErrorChecking = () => {
    if (!name.match(regExp.name)) {
      setNameHelperText('Incorrect input');
    };

    if (name.length < 2) {
      setNameHelperText('Name is too small');
    };

    if (name.length > 60) {
      setNameHelperText('Name is too big');
    };
  };

  const emailErrorChecking = () => {
    if (!email.match(regExp.email)) {
      setEmailHelperText('Incorrect input');
    };
  };

  const phoneErrorChecking = () => {
    if (!phone.match(regExp.phone)) {
      setPhoneHelperText('Incorrect input');
    };

    if (phone.length < 13) {
      setPhoneHelperText('Phone number is too small');
    };

    if (phone.length > 13) {
      setPhoneHelperText('Phone number is too big');
    };
  };

  const fileErrorChecking = (params) => {
    let img = new Image();
    img.src = window.URL.createObjectURL(params);
    img.onload = () => {
      if(img.width < 70 && img.height < 70){
        setPhotoErrorText(`Your photo should be more then 70x70px. 
        But it is ${img.width}x${img.height}px.`);
      };
    };

    if (!params.type.match(regExp.photo)) {
      setPhotoErrorText('Need only JPG file.');
    };

    if (params.size > 5242880) {
      setPhotoErrorText('Photo is too big. More then 5Mb.');
    };
  };

  const onSubmit = () => {
    nameErrorChecking();
    emailErrorChecking();
    phoneErrorChecking();
    fileErrorChecking(photo);
    
    if (nameHelperText === 'Enter your name'
      && emailHelperText === 'Enter your email'
      && phoneHelperText === '+38 (XXX) XXX - XX - XX'
      && photoErrorText === '') {

      setUser(name, email, phone, positionId, photo).then(result => {

        if (result.success) {
          setSuccess(true);
        } else {
          setSuccessErrorText(result.message);
        }
      })
    }
  }

  return (
    <>
      {!success ? (
        <div className={styles.container} id="form">
          <span className={styles.title}>
            Working with GET request
          </span>

          <span className={styles.success_error}>
            {successErrorText}
          </span>
      
          <div className={styles.form}>
            <div className={styles.inputs}>

              {nameHelperText === 'Enter your name' ? (
                <TextField
                  id="outlined-basic"
                  label="Your name"
                  helperText={nameHelperText}
                  variant="outlined"
                  className={styles.input}
                  value={name}
                  onChange={event => {
                    setName(event.target.value);
                  }}
                />
              ) : (
                <TextField
                  error
                  id="outlined-basic"
                  helperText={nameHelperText}
                  variant="outlined"
                  className={styles.input}
                  value={name}
                  onChange={event => {
                    setName(event.target.value);
                    setNameHelperText('Enter your name');
                  }}
                />
              )}

              {emailHelperText === 'Enter your email' ? (
                <TextField
                  id="outlined-basic"
                  label="Email"
                  helperText={emailHelperText}
                  variant="outlined"
                  className={styles.input}
                  value={email}
                  onChange={event => {
                    setEmail(event.target.value);
                  }}
                />
              ) : (
                <TextField
                  error
                  id="outlined-basic"
                  helperText={emailHelperText}
                  variant="outlined"
                  className={styles.input}
                  value={email}
                  onChange={event => {
                    setEmail(event.target.value);
                    setEmailHelperText('Enter your email');
                  }}
                />
              )}

              {phoneHelperText === '+38 (XXX) XXX - XX - XX' ? (
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  helperText={phoneHelperText}
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
              ) : (
                <TextField
                  error
                  id="outlined-basic"
                  helperText={phoneHelperText}
                  variant="outlined"
                  className={styles.input}
                  value={phone}
                  onChange={event => {
                    setPhone(event.target.value);
                    setPhoneHelperText('+38 (XXX) XXX - XX - XX');
                  }}
                />
              )}
            </div>

            <p className={styles.position}>
              Select your position
            </p>
            <RadioButtons setPositionId={setPositionId} />
          </div>

          <div className={styles.upload}>
            <Uploader
              setPhoto={setPhoto}
              errorText={photoErrorText}
            />
          </div>

          <div className={styles.button}>
            <ButtonSignUp 
              status={name && email && phone && positionId && photo}
              onSubmit={onSubmit}
            />
          </div>

        </div>
      ) : (
      <div className={styles.container} id="form">
        <span className={styles.title}>
          User successfully registered
        </span>

        <img src={successImage} alt="success" className={styles.success_image} />
        </div>
      )}
    </>
  );
};
