import React from 'react';
import CartItem from './CartItem';
import styles from './CartLists.module.css';

export default function CartLists({ cartList, handleRemoveCartItem }) {
  return (
    <div className={styles.cartLists}>
      {cartList.map((item) => (
        <CartItem
          key={item.listId}
          item={item}
          onRemoveClick={() => handleRemoveCartItem(item)}
        />
      ))}
    </div>
  );
}
