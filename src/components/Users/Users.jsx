/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api/api';
import { User } from '../../ui/User';
import { ButtonShowMore } from '../../ui/ButtonShowMore'
import { Loader } from '../../ui/Loader';

import styles from './Users.module.css';

export const Users = ({ success }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    getUsers(page).then(result => {
      if (result.success) {
        setUsers([
          ...result.users,
        ]);
      };
    });
  }, [success]);

  useEffect(() => {
    
    getUsers(page).then(result => {
      if (result.success) {
        setUsers([
              ...users,
              ...result.users,
        ])
      };
      
      if (totalPages === 0) {
        setTotalPages(result.total_pages);
      };
    });
  },[page]);

  if (users.length === 0) {
    return (
      <div className={styles.container} id="users">
      <span className={styles.title}>
        Working with POST request
      </span>

      <Loader />

      <div className={styles.button}>
        <ButtonShowMore
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
    )
  }

  return (
    <div className={styles.container} id="users">
      <span className={styles.title}>
        Working with POST request
      </span>

      <div className={styles.grid}>
        {users.map(user => (
          <User
            key={user.id}
            photo={user.photo}
            name={user.name}
            position={user.position}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>

      {totalPages > page && (
        <div className={styles.button}>
          <ButtonShowMore
            page={page}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};
