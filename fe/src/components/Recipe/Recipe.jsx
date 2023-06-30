import { useState, useEffect } from 'react';
import styles from './Recipe.module.css';

export default function Recipe({ setModalType, recipeData, setRecipeData }) {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 1);
      setTimer(timer - 1);

      if (timer === 1) {
        setModalType('');
        setRecipeData(null);
      }
    }, 1000);
  }, [timer]);

  return (
    <div className={styles.container}>
      <div className={styles.recipe}>
        <h2 className={styles.orderNumber}>
          주문번호
          <span>
            {recipeData.dailyOrderId < 10
              ? `0${recipeData.dailyOrderId}`
              : recipeData.dailyOrderId}
          </span>
        </h2>

        <div className={styles.orderLists}>
          <ul>
            {recipeData.drinks.map((drink) => {
              return (
                <li key={drink.index}>
                  {drink.name} {drink.quantity}
                  <span className={styles.option}>
                    {` (${drink.optionResponses.join('/')})`}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.result}>
          <p>결제방식: {recipeData.payment}</p>
          {recipeData.receivedAmount !== 0 ? (
            <p>투입금액: {recipeData.receivedAmount}</p>
          ) : (
            <div />
          )}
          <p>총 결제금액: {recipeData.totalAmount}</p>
          {recipeData.change >= 0 ? <p>잔돈: {recipeData.change}</p> : <div />}
        </div>
      </div>
      <p className={styles.timeText}>이 화면은 10초뒤에 자동으로 사라집니다</p>
      <div className={styles.time}>{timer}</div>
    </div>
  );
}
