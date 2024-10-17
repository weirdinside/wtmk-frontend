import "./ModalWithForm.css";

import Modal from "../Modal/Modal";

function ModalWithForm({
  closeModal,
  isOpen,
  onSubmit,
  formTitle = "Form",
  submitText = "submit",
  children,
}) {
  function submitForm(e){
    if(e){
      e.preventDefault();
      onSubmit();
    }
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <form onSubmit={(e) => submitForm(e)} className="modal__form">
        <h1 className="modal__title">{formTitle}</h1>
        {children}
        <button type="submit" className="modal__submit">
          {submitText}
        </button>
      </form>
    </Modal>
  );
}

export default ModalWithForm;
