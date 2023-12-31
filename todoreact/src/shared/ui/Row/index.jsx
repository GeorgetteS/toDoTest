import React from 'react';

export const Row = ({ children, className, flex }) => {
  return (
    <div className={className} style={flex && { display: 'flex' }}>
      {children}
    </div>
  );
};
