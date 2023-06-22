import { useState } from "react";
import { MenuItem } from "../../mockData";
import styles from "../../style/Content.module.css";

type SelectModalType = {
  modalData: MenuItem;
  setIsModalOpen: (value: Boolean) => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export const SelectModal = ({
  modalData,
  setIsModalOpen,
  dialogRef,
}: SelectModalType) => {
  const [menuCount, setMenuCount] = useState(1);

  const increase = () => {
    if (menuCount + 1 < 99) {
      setMenuCount(menuCount + 1);
    }
  };

  const decrease = () => {
    if (menuCount - 1 > 0) {
      setMenuCount(menuCount - 1);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      onClose={() => setIsModalOpen(false)}
    >
      <button
        className={styles.closeButton}
        onClick={() => {
          dialogRef.current?.close();
          setIsModalOpen(false);
          setMenuCount(1);
        }}
      >
        X
      </button>
      <div className={styles.modalContent}>
        <div className={styles.modalMenu} key={modalData.name}>
          {modalData.isSignature ? (
            <div className={styles.signature}>인기</div>
          ) : (
            ""
          )}
          <img
            src="https://media.basecamp.team/media/travelagent/99/imagecontent/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png"
            alt="이미지"
          />
          <div className={styles.ModalTextDiv}>{`${modalData.name}`}</div>
          <div className={styles.ModalTextDiv}>{`${modalData.price}원`}</div>
        </div>
        <div className={styles.menuOptions}>
          {Object.keys(modalData.options).map((optionKey, index) => (
            <div key={index} className={styles.option}>
              {modalData.options[optionKey].map((optionValue, index) => (
                <button key={index} className={styles.optionButton}>
                  {optionValue}
                </button>
              ))}
            </div>
          ))}
          <div className={styles.counter}>
            <button onClick={decrease}>-</button>
            <div className={styles.countNumber}>{menuCount}</div>
            <button onClick={increase}>+</button>
          </div>
        </div>
      </div>
      <button className={styles.addButton}>담기</button>
    </dialog>
  );
};
