import styles from './Decision.module.css';
import Cancel from '../../Cancel/Cancel';

export default function Decision({
  setModalType,
  cartItem,
  handleAddCartItem,
  setCartInAnimate,
}) {
  const handleClickWrapper = () => {
    handleAddCartItem(cartItem);
    setCartInAnimate(true);

    setTimeout(() => {
      setModalType('');
    }, 1000);
  };

  return (
    <div className={styles.decision}>
      <Cancel className={styles.cancel} setModalType={() => setModalType('')} />
      <button
        className={styles.add}
        type="button"
        onClick={() => handleClickWrapper()}
      >
        담기
      </button>
    </div>
  );
}
