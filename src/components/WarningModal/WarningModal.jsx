import React from "react";
import "./WarningModal.css";
import Modal from "../Modal/Modal";

function WarningModal({ activeModal, closeModal }) {
  const isOpen = activeModal === "warning";

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="warning-modal__title">We're sorry...</h1>
      <p className="warning-modal__subtitle">
        This feature is not available yet!
      </p>
      <button onClick={closeModal} className="warning-modal__exit">
        back to wtmk
      </button>
    </Modal>
  );
}

export default WarningModal;
