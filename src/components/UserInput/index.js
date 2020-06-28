import React, { useState } from 'react';
import styles from './index.module.scss';

const UserInput = ({ onStart }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    onStart(value);
  };

  const canSubmit = value && value > 0;

  return (
    <div className={styles.container}>
      <span className="p15 mr-10">Countdown:</span>
      <input
        className="p15 mr-10"
        type="text"
        placeholder="(Min)"
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={!canSubmit} className="p15" onClick={handleSubmit}>
        START
      </button>
    </div>
  );
};

export default UserInput;
