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
  // there was an error in this component that i encountered when labeling the button as a submission
  // since there is no form tag to surround it, it would not work unless an 'onClick' was present
  // as sign in is not implemented, i found this to be ok (and omission of the form semantic tag) -
  // when implemented, the markup would look like this:

  {
    /*
    <h1 className="modal__title">{formTitle}</h1>
    <form className="modal__form">
        {children}
        <button onClick={onSubmit} type="submit" className="modal__submit">
        {submitText}
      </button>
    </form>
  */
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h1 className="modal__title">{formTitle}</h1>
      {children}
      <button onClick={onSubmit} type="submit" className="modal__submit">
        {submitText}
      </button>
    </Modal>
  );
}

export default ModalWithForm;
