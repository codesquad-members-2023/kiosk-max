import styles from "../style/PaymentModal.module.css";
import indicator from "../assets/indicator.png";
import { basketList } from "./Basket";
import { useEffect, useRef, useState } from "react";
import { ReceiptData } from "../App";

type PaymentModalProps = {
  showIndicator: () => void;
  closeModal: () => void;
  cancelPayment: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
  basketList: basketList[];
  setReceiptData: React.Dispatch<React.SetStateAction<ReceiptData | undefined>>;
};

export const PaymentModal = ({
  showIndicator,
  closeModal,
  cancelPayment,
  dialogRef,
  basketList,
  setReceiptData,
}: PaymentModalProps) => {
  const [isCashModalOpen, setIsCashModalOpen] = useState(false);
  const cashModalRef = useRef<HTMLDialogElement>(null);

  const getOrdersId = async (paymentId: number, inputPrice = 0) => {
    const obj = {
      orders: {
        paymentId: paymentId,
        amount: inputPrice,
      },
      orderItem: basketList.map((item) => {
        return {
          itemId: item.id,
          count: item.count,
          options: Object.values(item.options).map((option) => option.id),
        };
      }),
    };

    const response = await fetch("http://43.201.168.11:8080/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await response.json();

    return data.ordersId;
  };

  const paymentCard = async () => {
    closeModal();
    showIndicator();
    const ordersId = await getOrdersId(1);
    setReceiptData(await getReceipt(ordersId));
  };

  const getReceipt = async (ordersId: number) => {
    const res = await fetch(`http://43.201.168.11:8080/api/orders/${ordersId}`);
    const data = await res.json();

    return data;
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
        <img
          className={styles.paymentImg}
          src="https://kiosk-team01-bucket.s3.ap-northeast-2.amazonaws.com/images/payments/cash.png"
          alt="현금결제"
        />
        현금결제
      </button>
      <button className={styles.paymentButton} onClick={paymentCard}>
        <img
          className={styles.paymentImg}
          src="https://kiosk-team01-bucket.s3.ap-northeast-2.amazonaws.com/images/payments/card.png"
          alt="카드결제"
        />
        카드결제
      </button>
      {isCashModalOpen && (
        <CashModal
          cashModalRef={cashModalRef}
          basketList={basketList}
          setReceiptData={setReceiptData}
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
        <img className={styles.indicatorImg} src={indicator} alt="인디케이터" />
        <p className={styles.indicatorText}>카드 결제 중 ...</p>
      </div>
    </div>
  );
};

const CashModal = ({
  cashModalRef,
  basketList,
  closeCashModal,
  setReceiptData,
}: {
  cashModalRef: React.RefObject<HTMLDialogElement>;
  basketList: basketList[];
  closeCashModal: () => void;
  setReceiptData: React.Dispatch<React.SetStateAction<ReceiptData | undefined>>;
}) => {
  const totalPrice = basketList.reduce((a, b) => {
    return a + b.count * b.price;
  }, 0);
  const [inputPrice, setInputPrice] = useState(0);

  const increasePrice = (price: number) => {
    setInputPrice((prev) => prev + price);
  };

  const paymentButton = async () => {
    const orderId = await getOrdersId(2);
    setReceiptData(await getReceipt(orderId));
  };

  const getOrdersId = async (paymentId: number) => {
    const obj = {
      orders: {
        paymentId: paymentId,
        amount: inputPrice,
      },
      orderItem: basketList.map((item) => {
        return {
          itemId: item.id,
          count: item.count,
          options: Object.values(item.options).map((option) => option.id),
        };
      }),
    };

    const response = await fetch(
      "http://43.201.168.11:8080/test-api/orders-success",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    const data = await response.json();

    return data.ordersId;
  };

  const getReceipt = async (ordersId: number) => {
    const res = await fetch(`http://43.201.168.11:8080/api/orders/${ordersId}`);
    const data = await res.json();

    return data;
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
        disabled={inputPrice <= totalPrice}
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
