import styles from './MenuItem.module.css';

export default function MenuItem({
  menu,
  setModalType,
  handleItemSelect,
  isPopularDrink,
}) {
  const handleClickWrapper = (key) => {
    setModalType('menu');
    handleItemSelect(key);
  };

  return (
    <div
      className={`${styles.item} ${isPopularDrink ? styles.sticker : ''}`}
      onClick={() => handleClickWrapper(menu.id)}
    >
      <img src={menu.img} alt={menu.name} />
      <p className={styles.name}>{menu.name}</p>
      <p className={styles.price}>{menu.price}</p>
    </div>
  );
}
