import React from 'react';
import { User } from '../../ui/User';
import { ButtonShowMore } from '../../ui/ButtonShowMore'

import { getUsers } from '../../api/users';
import { useState } from 'react';
import { useEffect } from 'react';

import styles from './Users.module.css';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [noMoreUsers, setNoMoreUsers] = useState(false);

  useEffect(() => {
    getUsers(page).then(result => {
      setUsers([
        ...users,
        ...result.users,
      ])
    }).catch(() => {
      setNoMoreUsers(true);
    })
  },[page]);


  console.log(users);

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
      
      {noMoreUsers && (
        <div className={styles.no_more_users}>
          There is no more users!
        </div>
      )}

      <div className={styles.button}>
        <ButtonShowMore
          page={page}
          setPage={setPage}
        />
      </div>
  
    </div>
  );
};
