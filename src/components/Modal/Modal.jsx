import React from "react";
import { useEffect } from "react";
import "./Modal.css";

function Modal({ isOpen, closeModal, children }) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  function handleOverlay(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : null}`}
      onClick={handleOverlay}
    >
      <div className="modal__container">
        {children}
        <button className="modal__close" type="button" onClick={closeModal} />
      </div>
    </div>
  );
}

export default Modal;
