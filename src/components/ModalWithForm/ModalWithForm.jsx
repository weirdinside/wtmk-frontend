import "./ModalWithForm.css";

function ModalWithForm({
  closeModal,
  isOpen,
  onSubmit,
  formTitle = "Form",
  submitText = "submit",
  children
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : null}`}>
      <div className="modal__content">
        <button onClick={closeModal} className="modal__close-button"></button>
        <h1 className="modal__title">{formTitle}</h1>
        {children}
        <button className="modal__submit">{submitText}</button>
      </div>
    </div>
  );
}

export default ModalWithForm;
