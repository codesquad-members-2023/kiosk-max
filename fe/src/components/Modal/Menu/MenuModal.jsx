import { useState } from 'react';
import styles from './MenuModal.module.css';
import Info from './Info/Info';
import Decision from './Decision/Decision';
import Dim from '../Dim/Dim';

const initCartItem = (item) => {
  return {
    listId: Date.now(),
    drinkId: item.id,
    name: item.name,
    img: item.img,
    price: item.price,
    quantity: 1,
    size: item.options.find((option) => option.type === 'size').values[0].id,
    temperature: item.options.find((option) => option.type === 'temperature')
      .values[0].id,
  };
};

export default function MenuModal({
  selectedItem,
  setModalType,
  handleAddCartItem,
}) {
  const [cartItem, setCartItem] = useState(initCartItem(selectedItem));
  const [cartInAnimate, setCartInAnimate] = useState(false);

  return (
    <div>
      <Dim cartInAnimate={cartInAnimate} />
      <div
        className={
          cartInAnimate
            ? `${styles.wrapper} ${styles.cartInAnimate}`
            : `${styles.wrapper}`
        }
      >
        <div className={styles.container}>
          <Info
            selectedItem={selectedItem}
            cartItem={cartItem}
            setCartItem={setCartItem}
            cartInAnimate={cartInAnimate}
          />
          <Decision
            setModalType={setModalType}
            cartItem={cartItem}
            setCartItem={setCartItem}
            handleAddCartItem={handleAddCartItem}
            setCartInAnimate={setCartInAnimate}
          />
        </div>
      </div>
    </div>
  );
}
