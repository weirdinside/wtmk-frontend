import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ onSubmit, closeModal, setActiveModal, activeModal }) {
  const isOpen = activeModal === "register";

  return (
    <ModalWithForm
      onSubmit={onSubmit}
      closeModal={closeModal}
      setActiveModal={setActiveModal}
      submitText="sign up"
      formTitle="sign up"
      isOpen={isOpen}
    >
      <input placeholder="Username" className="register-modal__input"></input>
      <input placeholder="Password" className="register-modal__input"></input>
      <p className="register-modal__or-text">or</p>
      <button
        type="button"
        onClick={() => {
          setActiveModal("login");
        }}
        className="register-modal__login"
      >
        log in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
