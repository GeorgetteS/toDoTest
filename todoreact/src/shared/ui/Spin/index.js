import React from 'react';

import styles from './Spin.module.scss';

export const Spin = ({ size = 'medium', color = '#1890ff' }) => {
  const sizes = {
    small: '16px',
    medium: '24px',
    large: '32px',
  };

  return (
    <div className={styles.spinner} style={{ width: sizes[size], height: sizes[size] }}>
      <div className={styles.spinnerDot} style={{ backgroundColor: color }}></div>
      <div className={styles.spinnerDot} style={{ backgroundColor: color }}></div>
      <div className={styles.spinnerDot} style={{ backgroundColor: color }}></div>
      <div className={styles.spinnerDot} style={{ backgroundColor: color }}></div>
    </div>
  );
};
