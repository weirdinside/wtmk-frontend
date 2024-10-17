import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import "./PreviewModal.css";

function PreviewModal({ closeModal, activeModal, activePhoto }) {
  const isOpen = activeModal === "preview";

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div
        style={{ backgroundImage: `url(${activePhoto.image})` }}
        className="preview-modal__photo"
      ></div>
      <p className="preview-modal__caption">
        photo courtesy of {activePhoto.source}
      </p>
    </Modal>
  );
}

export default PreviewModal;
