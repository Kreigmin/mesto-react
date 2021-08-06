import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRenderLoading("Сохранение...");
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="edit_profile"
      color="dark"
      title="Редактировать профиль"
      marginSize="large"
      btnName={props.buttonName}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          type="text"
          className="form__input form__input_name_value"
          id="name-input"
          name="profileName"
          value={name}
          autoComplete="off"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          onChange={handleNameChange}
        />
        <span className="form__input-error name-input-error"></span>
      </div>
      <div className="form__field">
        <input
          type="text"
          className="form__input form__input_job_value"
          id="about-me-input"
          name="profileJob"
          value={description}
          autoComplete="off"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          onChange={handleDescriptionChange}
        />
        <span className="form__input-error about-me-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
