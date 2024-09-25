import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ closeModal, setActiveModal, activeModal, onSubmit }) {
  const isOpen = activeModal === "login";

  return (
    <ModalWithForm
      closeModal={closeModal}
      setActiveModal={setActiveModal}
      isOpen={isOpen}
      onSubmit={onSubmit}
      submitText="log in"
      formTitle="Log In"
    >
      <input placeholder="Username" className="modal__input"></input>
      <input placeholder="Password" className="modal__input"></input>
      <p className="modal__or-text">or</p>
      <button className="modal__signup">sign up</button>
    </ModalWithForm>
  );
}

export default LoginModal;
