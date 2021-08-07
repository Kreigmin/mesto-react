import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import "../index.css";

function DeleteCardPopup(props) {
  function handleSubmit(evt) {
    evt.preventDefault();

    props.onRenderLoading(true);
    props.onDeleteCard();
  }

  return (
    <PopupWithForm
      name="delete_card"
      color="dark"
      title="Вы уверены?"
      marginSize="medium"
      btnName={props.isSubmitting ? "Удаление..." : "Да"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default DeleteCardPopup;
