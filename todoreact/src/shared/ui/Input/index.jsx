import React from 'react';

import styles from './Input.module.scss';

export const Input = ({ type = 'text', value, onChange, placeholder }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
