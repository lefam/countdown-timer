import React, { useEffect, useState } from 'react';
import UserInput from './components/UserInput';
import Timer from './components/Timer';
import HLayout from './components/HLayout';
import styles from './App.module.scss';

function App() {
  const [startValueInMins, setStartValueInMins] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    if (!startValueInMins || paused) return;

    console.log('starting timer...');

    const timer = setInterval(() => {
      if (!paused) {
        setCurrentValue((prev) => Math.max(prev - 1, 0));
      }
    }, speed);

    return () => {
      console.log('ending timer');
      clearInterval(timer);
    };
  }, [startValueInMins, paused, speed]);

  const handleStart = (value) => {
    setStartValueInMins(value);
    setCurrentValue(value * 60);
  };

  const handleTimerToggle = () => {
    console.log('timer toggle', paused);
    setPaused((prev) => !prev);
  };

  const speedButtonClass = (speedToActivate) => {
    return speed === speedToActivate
      ? `${styles.btn_speed} ${styles.btn_active}`
      : styles.btn_speed;
  };

  let status = '';

  if (startValueInMins > 0) {
    if (currentValue === 0) {
      status = "Time's up!";
    } else if (currentValue <= (startValueInMins * 60) / 2) {
      status = 'More than halfway there!';
    }
  }

  return (
    <div className={styles.container}>
      <UserInput onStart={handleStart} />
      <HLayout>
        <div className="p10">{status}</div>
      </HLayout>
      <HLayout>
        <Timer value={Math.ceil(currentValue)} onToggle={handleTimerToggle} />
        {currentValue > 0 && (
          <button className="align-self-center" onClick={handleTimerToggle}>
            {paused ? 'Play' : 'Pause'}
          </button>
        )}
      </HLayout>
      <HLayout>
        <button
          className={speedButtonClass(1000)}
          onClick={() => setSpeed(1000)}
        >
          1X
        </button>
        <button className={speedButtonClass(750)} onClick={() => setSpeed(750)}>
          1.5X
        </button>
        <button className={speedButtonClass(500)} onClick={() => setSpeed(500)}>
          2X
        </button>
      </HLayout>
    </div>
  );
}

export default App;
