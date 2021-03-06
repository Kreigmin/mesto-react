import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace,
  onRenderLoading,
  isSubmitting,
}) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [nameValidation, setNameValidation] = useState({
    nameValidationMessage: "",
    isNameValid: true,
  });
  const [linkValidation, setLinkValidation] = useState({
    linkValidationMessage: "",
    isLinkValid: true,
  });

  function handleNameChange(evt) {
    setName(evt.target.value);
    if (!evt.target.validity.valid) {
      setNameValidation({
        nameValidationMessage: evt.target.validationMessage,
        isNameValid: false,
      });
    } else {
      setNameValidation({
        nameValidationMessage: "",
        isNameValid: true,
      });
    }
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);

    if (!evt.target.validity.valid) {
      setLinkValidation({
        linkValidationMessage: evt.target.validationMessage,
        isLinkValid: false,
      });
    } else {
      setLinkValidation({
        linkValidationMessage: "",
        isLinkValid: true,
      });
    }
  }

  function closePopupAndClearInputsError() {
    onClose();
    setNameValidation({
      nameValidationMessage: "",
      isNameValid: true,
    });
    setLinkValidation({
      linkValidationMessage: "",
      isLinkValid: true,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onRenderLoading(true);
    onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add_card"
      color="dark"
      title="Новое место"
      marginSize="large"
      btnName={isSubmitting ? "Создание..." : "Создать"}
      isOpen={isOpen}
      onClose={closePopupAndClearInputsError}
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          type="text"
          className="form__input form__input_card-name_value"
          id="card-name-input"
          name="cardName"
          value={name}
          autoComplete="off"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          onChange={handleNameChange}
        />
        <span
          className={`form__input-error card-name-input-error ${
            !nameValidation.isNameValid ? "form__input-error_active" : ""
          }`}
        >
          {nameValidation.nameValidationMessage}
        </span>
      </div>
      <div className="form__field">
        <input
          type="url"
          className="form__input form__input_card-link_value"
          id="card-link-input"
          name="cardImage"
          value={link}
          autoComplete="off"
          placeholder="Ссылка на картинку"
          required
          onChange={handleLinkChange}
        />
        <span
          className={`form__input-error card-link-input-error ${
            !linkValidation.isLinkValid ? "form__input-error_active" : ""
          }`}
        >
          {linkValidation.linkValidationMessage}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
