import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.Loading}>
      <span className={styles.loader} />
      <span className={styles.loader2}>Loading</span>
    </div>
  );
}
