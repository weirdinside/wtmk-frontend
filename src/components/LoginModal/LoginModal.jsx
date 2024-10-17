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
      submitText="sign in"
      formTitle="sign in"
    >
      <input placeholder="Username" className="login-modal__input"></input>
      <input placeholder="Password" className="login-modal__input"></input>
      <p className="login-modal__or-text">or</p>
      <button
        type="button"
        onClick={() => {
          setActiveModal("register");
        }}
        className="login-modal__signup"
      >
        sign up
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
