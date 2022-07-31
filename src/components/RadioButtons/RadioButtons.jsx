import React, { useEffect, useState } from 'react';
import { getPositions } from '../../api/api';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Loader } from '../../ui/Loader';

import styles from './RadioButtons.module.css';

export const RadioButtons = ({ setPositionId }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getPositions().then(result => {
      setPositions([...result.positions])
    });
  },[]);

  if (positions.length === 0) {
    return (
      <Loader />
    );
  };

  return (
    <RadioGroup className={styles.radio_buttons}>
      {positions.map(position => (
        <FormControlLabel
          key={position.id}
          value={position.id}
          label={position.name}
          control={<Radio sx={{
            '&.Mui-checked': {
              color: '#00BDD3',
            },
          }}/>}
          className={styles.radio_button}
          onChange={event => {
            setPositionId(event.target.value);
          }}
        />
      ))}
    </RadioGroup>
  );
};