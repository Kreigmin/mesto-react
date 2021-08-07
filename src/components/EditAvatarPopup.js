import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  onRenderLoading,
  isSubmitting,
}) {
  const avatarLinkRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onRenderLoading(true);
    onUpdateAvatar({
      avatar: avatarLinkRef.current.value,
    });
  }

  useEffect(() => {
    avatarLinkRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="change_avatar"
      color="dark"
      title="Обновить аватар"
      marginSize="large"
      btnName={isSubmitting ? "Cохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
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
