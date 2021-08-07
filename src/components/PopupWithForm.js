import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} popup_bg-alfa_${props.color} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="close-btn close-edit-popup popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <form className="form" name={props.name} onSubmit={props.onSubmit}>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <fieldset className="form__fieldset">
            <button
              className={`form__submit-btn form__submit-btn_margin_${props.marginSize}`}
              type="submit"
              aria-label="Сохранить"
            >
              {props.btnName}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
