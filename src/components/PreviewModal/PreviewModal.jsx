import React, { useEffect } from "react";
import "./PreviewModal.css";

function PreviewModal({ closeModal, activePhoto, activeModal }) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_opened" : null}`}
    >
      <div className="modal__content">
      <button onClick={closeModal} className="modal__close-button"></button>
        <div
          style={{ backgroundImage: `url(${activePhoto.image})` }}
          className="preview-modal__photo"
        ></div>
        <p className="preview-modal__caption">
          photo courtesy of {activePhoto.source}
        </p>
      </div>
    </div>
  );
}

export default PreviewModal;
