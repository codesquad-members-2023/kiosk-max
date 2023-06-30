import styles from './Dim.module.css';

export default function Dim({ cartInAnimate }) {
  return (
    <div
      className={
        cartInAnimate
          ? `${styles.dim} ${styles.cartInAnimate}`
          : `${styles.dim}`
      }
    />
  );
}
