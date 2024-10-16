import React from "react";
import "./WarningModal.css";

function WarningModal({ activeModal, closeModal }) {
  const isOpen = activeModal === "warning";

  function handleClickAway(e) {
    if (e.target.classList.contains("warning-modal")) {
      e.stopPropagation();
      closeModal();
    }
  }

  return (
    <div
      onClick={handleClickAway}
      className={`warning-modal ${isOpen ? "active" : null}`}
    >
      <div className="warning-modal__content">
        <h1 className="warning-modal__title">We're sorry...</h1>
        <p className="warning-modal__subtitle">
          This feature is not available yet!
        </p>
        <button onClick={closeModal} className="warning-modal__exit">
          back to wtmk
        </button>
      </div>
    </div>
  );
}

export default WarningModal;
