import React from 'react';
import styles from './index.module.scss';

const HLayout = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default HLayout;
