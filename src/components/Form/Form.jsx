import React, { useState } from 'react';
import { regExp } from '../../rules/rules';
import { setUser } from '../../api/api';
import { ButtonSignUp } from '../../ui/ButtonSignUp';
import { RadioButtons } from '../../ui/RadioButtons/RadioButtons';
import { TextField } from '@mui/material';
import successImage from '../../images/success-image.svg';

import styles from './Form.module.css';

export const Form = ({ success, setSuccess }) => {
  const [userName, setUserName] = useState('');
  const [userNameHelperText, setUserNameHelperText] = useState('Enter your name');

  const [email, setEmail] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('Enter your email');

  const [phone, setPhone] = useState('');
  const [phoneHelperText, setPhoneHelperText] = useState('+38 (XXX) XXX - XX - XX');

  const [positionId, setPositionId] = useState('');

  const [fileName, setFileName] = useState('');
  const [fileParams, setFileParams] = useState({});
  const [fileErrorText, setFileErrorText] = useState('');

  const [successErrorText, setSuccessErrorText] = useState('');

  const onFocus = (event) => {
    if (!event) {
      setPhone('+380');
    }
  }

  const fileInfo = (info) => {
    setFileName(info.name);
    setFileParams(info);
    setFileErrorText('');
  }

  const userNameErrorChecking = () => {
    if (!userName.match(regExp.name)) {
      setUserNameHelperText('Incorrect input');
    };

    if (userName.length < 2) {
      setUserNameHelperText('Name is too small');
    };

    if (userName.length > 60) {
      setUserNameHelperText('Name is too big');
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
        setFileErrorText(`Your photo should be more then 70x70px. 
        But it is ${img.width}x${img.height}px.`);
      };
    };

    if (!params.type.match(regExp.photo)) {
      setFileErrorText('Need only JPG file.');
    };

    if (params.size > 5242880) {
      setFileErrorText('Photo is too big. More then 5Mb.');
    };
  };

  const onSubmit = () => {
    userNameErrorChecking();
    emailErrorChecking();
    phoneErrorChecking();
    fileErrorChecking(fileParams);
    
    if (userNameHelperText === 'Enter your name'
      && emailHelperText === 'Enter your email'
      && phoneHelperText === '+38 (XXX) XXX - XX - XX'
      && fileName !== ''
      && fileErrorText === '') {

      setUser(userName, email, phone, positionId, fileParams).then(result => {

        if (result.success) {
          setSuccess(true);
        } else {
          setSuccessErrorText('Please, be correct on your inputs!');
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

          {successErrorText && (
            <span className={styles.success_error}>
              {successErrorText}
            </span>
          )}
      
          <div className={styles.form}>
            <div className={styles.inputs}>

              {userNameHelperText === 'Enter your name' ? (
                <TextField
                  id="outlined-basic"
                  label="Your name"
                  helperText={userNameHelperText}
                  variant="outlined"
                  className={styles.input}
                  value={userName}
                  onChange={event => {
                    setUserName(event.target.value);
                  }}
                />
              ) : (
                <TextField
                  error
                  id="outlined-basic"
                  label="Your name"
                  helperText={userNameHelperText}
                  variant="outlined"
                  className={styles.input}
                  value={userName}
                  onChange={event => {
                    setUserName(event.target.value);
                    setUserNameHelperText('Enter your name');
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
                  label="Email"
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
                  label="Phone"
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
            {fileErrorText && (
              <span className={styles.upload_error}>
                {fileErrorText}
              </span>
            )}
          </div>

          <div className={styles.button}>
            <ButtonSignUp 
              status={userName && email && phone && positionId && fileName}
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
