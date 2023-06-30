import styles from './CartItem.module.css';

export default function CartItem({ item, onRemoveClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.quantity}>{item.quantity}</div>
      <button type="button" className={styles.close} onClick={onRemoveClick}>
        X
      </button>
      <div className={styles.item}>
        <img src={item.img} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}
