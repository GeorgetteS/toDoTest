import React from 'react';

import styles from './Close.module.scss';

export const Close = ({ onClick }) => {
  return (
    <button className={styles.close} onClick={onClick}>
      <span className={styles.closeIcon}>&times;</span>
    </button>
  );
};
