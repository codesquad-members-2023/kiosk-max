import styles from "../style/PaymentModal.module.css";
import cash from "../assets/cash.svg";
import card from "../assets/card.svg";
import indicator from "../assets/icon.png";
import { basketList } from "./Basket";
import { useEffect, useRef, useState } from "react";

export const PaymentModal = ({
  showIndicator,
  closeModal,
  cancelPayment,
  dialogRef,
  basketList,
}: {
  showIndicator: () => void;
  closeModal: () => void;
  cancelPayment: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
  basketList: basketList[];
}) => {
  const [isCashModalOpen, setIsCashModalOpen] = useState(false);
  const cashModalRef = useRef<HTMLDialogElement>(null);

  const paymentCard = () => {
    closeModal();
    showIndicator();
    console.log(basketList);
  };

  const paymentCash = () => {
    setIsCashModalOpen(true);
  };

  const closeCashModal = () => {
    setIsCashModalOpen(false);
  };

  useEffect(() => {
    if (isCashModalOpen) {
      cashModalRef.current?.showModal();
    }
  }, [isCashModalOpen]);

  return (
    <dialog ref={dialogRef} className={styles.modal} onClose={cancelPayment}>
      <button className={styles.closeButton} onClick={cancelPayment}>
        <div className={styles.closeLogo}></div>
      </button>

      <button className={styles.paymentButton} onClick={paymentCash}>
        <img className={styles.paymentImg} src={cash} />
        현금결제
      </button>
      <button className={styles.paymentButton} onClick={paymentCard}>
        <img className={styles.paymentImg} src={card} />
        카드결제
      </button>
      {isCashModalOpen && (
        <CashModal
          cashModalRef={cashModalRef}
          basketList={basketList}
          closeCashModal={closeCashModal}
        />
      )}
    </dialog>
  );
};

export const Indicator = () => {
  return (
    <div className={styles.indicator}>
      <div className={styles.indicatorWrapper}>
        <img className={styles.indicatorImg} src={indicator} />
        <p className={styles.indicatorText}>카드 결제 중 ...</p>
      </div>
    </div>
  );
};

const CashModal = ({
  cashModalRef,
  basketList,
  closeCashModal,
}: {
  cashModalRef: React.RefObject<HTMLDialogElement>;
  basketList: basketList[];
  closeCashModal: () => void;
}) => {
  const totalPrice = basketList.reduce((a, b) => {
    return a + b.count * b.price;
  }, 0);
  const [inputPrice, setInputPrice] = useState(0);

  const increasePrice = (price: number) => {
    setInputPrice((prev) => prev + price);
  };

  const paymentButton = () => {
    alert(1);
  };

  const payment = () => {
    const obj = {
      items: basketList,
      payments: "cash",
      amount: inputPrice,
      total: totalPrice,
    };
  };

  return (
    <dialog className={styles.cashModal} ref={cashModalRef}>
      <button
        className={styles.closeButton}
        onClick={() => {
          closeCashModal();
          setInputPrice(0);
        }}
      >
        <div className={styles.closeLogo}></div>
      </button>
      <div className={styles.buttonWrapper}>
        <IncreaseButton price={50000} increaseFun={increasePrice} />
        <IncreaseButton price={10000} increaseFun={increasePrice} />
        <IncreaseButton price={5000} increaseFun={increasePrice} />
        <IncreaseButton price={1000} increaseFun={increasePrice} />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.cashModalText}>투입금액 : {inputPrice} 원</div>
        <div className={styles.cashModalText}>주문금액 :{totalPrice} 원</div>
      </div>
      <button
        className={styles.cashPaymentButton}
        disabled={inputPrice >= totalPrice}
        onClick={inputPrice >= totalPrice ? paymentButton : undefined}
      >
        현금결제하기
      </button>
    </dialog>
  );
};

const IncreaseButton = ({
  price,
  increaseFun,
}: {
  price: number;
  increaseFun: (value: number) => void;
}) => {
  return (
    <button
      className={styles.increaseButton}
      onClick={() => increaseFun(price)}
    >
      {price}원
    </button>
  );
};
