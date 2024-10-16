import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css"

function RegisterModal({closeModal, setActiveModal, activeModal}){
  const isOpen = activeModal === 'register';

  function handleSubmit(){
    setActiveModal('warning')
  }

    return (
    <ModalWithForm
       onSubmit={handleSubmit}
      closeModal={closeModal}
      setActiveModal={setActiveModal}
      isOpen={isOpen}
      submitText="sign up"
      formTitle="sign up"
    >
      <input placeholder="Username" className="register-modal__input"></input>
      <input placeholder="Password" className="register-modal__input"></input>
      <p className="register-modal__or-text">or</p>
      <button onClick={()=>{
        setActiveModal('login')
      }} className="register-modal__login">log in</button>
    </ModalWithForm>
    )
}

export default RegisterModal;