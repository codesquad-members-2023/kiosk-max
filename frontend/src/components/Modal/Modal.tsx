import React from "react";
import MenuOptionForm from "./MenuOptionForm.tsx";
import PaymentForm from "./PaymentForm.tsx";
import CashForm from "./CashForm.tsx";
import IModalProps from "../../types/Modal.ts";
import EActiveModal from "../../constants/EActiveModal.ts";
import styles from "./Modal.module.css";

function Modal({ activeModal, setActiveModal }: IModalProps) {
  const modalComponents: Record<EActiveModal, JSX.Element | null> = {
    MENU_OPTIONS: <MenuOptionForm />,
    PAYMENT: <PaymentForm />,
    CASH: <CashForm />,
    NONE: null,
  };

  return (
    <dialog open className={styles.modal}>
      {activeModal !== "CASH" && (
        <button
          className={styles.modal__cancel_button}
          type="button"
          onClick={() => setActiveModal(EActiveModal.NONE)}>
          X
        </button>
      )}
      {modalComponents[activeModal]}
    </dialog>
  );
}

export default Modal;
