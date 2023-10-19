import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export const Button = ({ children, className, onClick, disabled }) => {
  return (
    <button className={cn(styles.button, className)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
