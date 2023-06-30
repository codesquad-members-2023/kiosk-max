import styles from './PaymentModal.module.css';

export default function PaymentModal({
  handleCloseButton,
  handleCardButtonClick,
  handleCashButton,
}) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.close}
        onClick={handleCloseButton}
      >
        X
      </button>
      <div>
        <img
          src="https://img.freepik.com/free-vector/illustration-of-credit-card-icon_53876-5915.jpg?w=826&t=st=1687795086~exp=1687795686~hmac=3913b1df4f63876ff621f90c2d6750adf20b9209e929a0e50a5419d772c04c52"
          alt=""
        />
        <button type="button" onClick={() => handleCardButtonClick()}>
          카드결제
        </button>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/dollar_53876-25498.jpg?w=826&t=st=1687795207~exp=1687795807~hmac=96d2a959568589883270360017b770e1af4444a4e403802eb88cfc880a6ef2d9"
          alt=""
        />
        <button type="button" onClick={() => handleCashButton()}>
          현금결제
        </button>
      </div>
    </div>
  );
}
