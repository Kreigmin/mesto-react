import React from "react";
import "../index.css";

function PopupWithForm(props) {
  console.log(props.children);
  return (
    <div
      className={`popup popup_type_${props.name} popup_bg-alfa_${props.color}`}
    >
      <div className="popup__container">
        <button
          className="close-btn close-edit-popup popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <form className="form profileChangeForm" name={props.name} noValidate>
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
