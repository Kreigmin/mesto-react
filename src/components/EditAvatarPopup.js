import React, { useRef } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const avatarLinkRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarLinkRef.current.value,
    });
    avatarLinkRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="change_avatar"
      color="dark"
      title="Обновить аватар"
      marginSize="large"
      btnName="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          type="url"
          className="form__input form__input_card-link_value"
          id="avatar-link-input"
          name="avatarImage"
          autoComplete="off"
          placeholder="Ссылка на аватар"
          required
          ref={avatarLinkRef}
        />
        <span className="form__input-error avatar-link-input-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
