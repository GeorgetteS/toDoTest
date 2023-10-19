import React from 'react';

import styles from './Textarea.module.scss';

export const Textarea = ({ value = '', onChange, placeholder }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}></textarea>
  );
};
