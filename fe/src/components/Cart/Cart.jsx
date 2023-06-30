import { useState, useEffect } from 'react';
import styles from './Cart.module.css';
import CartLists from './CartLists';
import Dim from '../Modal/Dim/Dim';
import PaymentModal from '../Modal/Payment/PaymentModal';
import Loading from '../Loading/Loading';
import CashModal from '../Modal/Payment/CashModal';
import Recipe from '../Recipe/Recipe';
import ErrorMessage from '../Modal/ErrorMessage/ErrorMessage';
import Timer from './Timer';

export default function Cart({
  cartList,
  setCartList,
  handleRemoveCartItem,
  modalType,
  setModalType,
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [tempList, setTempList] = useState([]);
  const [orderPrice, setOrderPrice] = useState(0);
  const [recipeData, setRecipeData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (cartList.length > 0) {
      setIsCartOpen(true);
    } else {
      setIsCartOpen(false);
    }
  }, [cartList]);

  useEffect(() => {
    setResetTimer((prevResetTimer) => prevResetTimer + 1);
  }, [cartList]);

  useEffect(() => {
    const price = tempList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setOrderPrice(price);
  }, [tempList]);

  const drinkList = tempList.map((cartItem) => {
    return {
      drinkId: cartItem.drinkId,
      name: cartItem.name,
      quantity: cartItem.quantity,
      orderPrice: cartItem.price * cartItem.quantity,
      options: [{ id: cartItem.size }, { id: cartItem.temperature }],
    };
  });

  const postData = {
    totalAmount: orderPrice,
    drinks: [...drinkList],
  };

  const cardData = {
    ...postData,
    payment: 'CARD',
  };

  const handlePaymentButtonClick = () => {
    setModalType('payment');
    setTempList(cartList);
    setCartList([]);
  };

  const handleCloseButtonClick = () => {
    setCartList(tempList);
    setTempList([]);
    setModalType('');
  };

  const handleCashButtonClick = () => {
    setModalType('cash');
    setCartList(tempList);
  };

  const handleCardButtonClick = () => {
    setTempList([]);

    fetch('http://52.79.68.54:8080/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        setRecipeData(data);
        setModalType('recipe');
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setModalType('error');
      });

    setModalType('card');
  };

  return (
    <div>
      {isCartOpen && (
        <div className={styles.cart}>
          <CartLists
            cartList={cartList}
            handleRemoveCartItem={handleRemoveCartItem}
          />
          <Timer
            initialCount={120}
            onTimeOut={() => setCartList([])}
            resetKey={resetTimer}
          />

          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.cancel}
              onClick={() => setCartList([])}
            >
              취소
            </button>
            <button
              type="button"
              className={styles.payment}
              onClick={handlePaymentButtonClick}
            >
              결제하기
            </button>
          </div>
        </div>
      )}
      {modalType === 'payment' && (
        <>
          <Dim />
          <PaymentModal
            handleCloseButton={handleCloseButtonClick}
            handleCardButtonClick={handleCardButtonClick}
            handleCashButton={handleCashButtonClick}
          />
        </>
      )}
      {modalType === 'card' && recipeData ? (
        <Recipe
          setModalType={setModalType}
          recipeData={recipeData}
          setRecipeData={setRecipeData}
        />
      ) : (
        modalType === 'card' && (
          <>
            <Dim />
            <Loading />
          </>
        )
      )}
      {modalType === 'cash' && (
        <>
          <Dim />
          <CashModal
            setModalType={setModalType}
            orderPrice={orderPrice}
            postData={postData}
            setRecipeData={setRecipeData}
            setCartList={setCartList}
          />
        </>
      )}
      {modalType === 'recipe' && recipeData ? (
        <Recipe
          setModalType={setModalType}
          recipeData={recipeData}
          setRecipeData={setRecipeData}
        />
      ) : (
        <div className={styles.nothing} />
      )}

      {modalType === 'error' && (
        <ErrorMessage
          setModalType={setModalType}
          setRecipeData={setRecipeData}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
}
