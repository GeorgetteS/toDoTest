import React from 'react';
import { useState } from 'react';

import styles from './Checkbox.module.scss';

export const Checkbox = ({ label, withStatus, onChange }) => {
  const [checked, setChecked] = useState(withStatus);

  const handleClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange && onChange(newChecked);
  };

  return (
    <div className={styles.checkbox} onClick={handleClick}>
      <div className={`${styles.checkboxIcon} ${checked ? styles.checked : ''}`}>
        {checked && (
          <svg viewBox="0 0 16 16">
            <polyline points="3.5 9 6.5 12 12.5 5"></polyline>
          </svg>
        )}
      </div>
      <div className={styles.checkboxLabel}>{label}</div>
    </div>
  );
};
