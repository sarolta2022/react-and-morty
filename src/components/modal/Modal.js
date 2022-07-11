import React from "react";
import styles from "./modal.module.css";

function Modal({ children, closeModal }) {
  return (
    <div className={styles.modal}>
      <button onClick={closeModal} className={styles.closeBtn}>
        X
      </button>
      {children}
    </div>
  );
}

export default Modal;
