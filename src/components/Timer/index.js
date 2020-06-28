import React from 'react';
import { pad } from '../../helpers/format';
import styles from './index.module.scss';

const Timer = ({ value }) => {
  const mins = Math.floor(value / 60);
  const secs = value % 60;

  let className = `${styles.container} `;

  if (value <= 20) {
    className += `${styles.timerRed} `;
  }

  if (value <= 10) {
    className += styles.timerBlinking;
  }

  return (
    <div className={className}>
      <span className="mr-10">
        {pad(mins, 2)}:{pad(secs, 2)}
      </span>
    </div>
  );
};

export default Timer;
