import { useState, useEffect } from 'react';
import styles from './ErrorMessage.module.css';

export default function ErrorMessage({
  setModalType,
  setRecipeData,
  errorMessage,
}) {
  const [counts, setCounts] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      if (counts > 1);
      setCounts(counts - 1);

      if (counts === 1) {
        setModalType('');
        setRecipeData(null);
      }
    }, 1000);
  }, [counts]);

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <p className={styles.errorMessage}>{errorMessage}</p>
      </div>
      <p className={styles.timeText}>이 화면은 5초뒤에 자동으로 사라집니다</p>
      <div className={styles.time}>{counts}</div>
    </div>
  );
}
