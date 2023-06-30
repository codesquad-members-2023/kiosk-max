import { useState, useEffect } from 'react';
import styles from './Timer.module.css';

export default function Timer({ initialCount, onTimeOut, resetKey }) {
  const [countDownTime, setCountDownTime] = useState(initialCount);

  useEffect(() => {
    setCountDownTime(initialCount);
  }, [resetKey]);

  useEffect(() => {
    if (countDownTime > 0) {
      const timerId = setTimeout(() => {
        setCountDownTime((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
    onTimeOut();
  }, [countDownTime, onTimeOut]);

  return <p className={styles.timer}>{countDownTime}초 남음</p>;
}
