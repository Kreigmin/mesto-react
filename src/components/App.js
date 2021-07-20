import React, { useState } from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="edit_profile"
        color="dark"
        title="Редактировать профиль"
        marginSize="large"
        btnName="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <div className="form__field">
              <input
                type="text"
                className="form__input form__input_name_value"
                id="name-input"
                name="profileName"
                value=""
                autoComplete="off"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="form__input-error name-input-error"></span>
            </div>
            <div className="form__field">
              <input
                type="text"
                className="form__input form__input_job_value"
                id="about-me-input"
                name="profileJob"
                value=""
                autoComplete="off"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="form__input-error about-me-input-error"></span>
            </div>
          </>
        }
      />
      <PopupWithForm
        name="add_card"
        color="dark"
        title="Новое место"
        marginSize="large"
        btnName="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <div className="form__field">
              <input
                type="text"
                className="form__input form__input_card-name_value"
                id="card-name-input"
                name="cardName"
                value=""
                autoComplete="off"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="form__input-error card-name-input-error"></span>
            </div>
            <div className="form__field">
              <input
                type="url"
                className="form__input form__input_card-link_value"
                id="card-link-input"
                name="cardImage"
                value=""
                autoComplete="off"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="form__input-error card-link-input-error"></span>
            </div>
          </>
        }
      />

      <PopupWithForm
        name="delete_card"
        color="dark"
        title="Вы уверены?"
        marginSize="medium"
        btnName="Да"
      />

      <PopupWithForm
        name="change_avatar"
        color="dark"
        title="Обновить аватар"
        marginSize="large"
        btnName="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <div className="form__field">
              <input
                type="url"
                className="form__input form__input_card-link_value"
                id="avatar-link-input"
                name="avatarImage"
                value=""
                autoComplete="off"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="form__input-error avatar-link-input-error"></span>
            </div>
          </>
        }
      />
      <ImagePopup />

      <template className="card-template">
        <li className="card">
          <button className="card__full-img-btn">
            <img className="card__image" src="#" alt="" />
          </button>
          <div className="card__footer">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button
                className="card__like"
                type="button"
                aria-label="Нравится"
              ></button>
              <p className="card__like-number"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
