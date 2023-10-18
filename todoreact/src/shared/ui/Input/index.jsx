import React from 'react';

import styles from './Input.module.scss';

export const Input = ({ type = 'text', value, onChange, placeholder, onEnter, disabled }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnter();
    }
  };
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyPress}
      disabled={disabled}
    />
  );
};
