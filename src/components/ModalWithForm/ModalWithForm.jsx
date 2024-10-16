import "./ModalWithForm.css";

function ModalWithForm({
  closeModal,
  isOpen,
  onSubmit,
  formTitle = "Form",
  submitText = "submit",
  children
}) {

  function handleClickAway(e){
    if(e.target.classList.contains('modal')){
      e.stopPropagation();
      closeModal();
    }
  }

  return (
    <div onClick={handleClickAway} className={`modal ${isOpen ? "modal_opened" : null}`}>
      <div className="modal__content">
        <button onClick={closeModal} className="modal__close-button"></button>
        <h1 className="modal__title">{formTitle}</h1>
        {children}
        <button onClick={onSubmit} className="modal__submit">{submitText}</button>
      </div>
    </div>
  );
}

export default ModalWithForm;
