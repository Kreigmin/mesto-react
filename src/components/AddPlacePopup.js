import React, { useState } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add_card"
      color="dark"
      title="Новое место"
      marginSize="large"
      btnName="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
        <span className="form__input-error card-name-input-error"></span>
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
        <span className="form__input-error card-link-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;