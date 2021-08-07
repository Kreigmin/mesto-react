import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_bg-alfa_black popup_type_image ${
        props.card.link ? "popup_opened" : ""
      }`}
    >
      <figure className="image-popup">
        <button
          className="close-btn close-image-popup popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img
          className="image-popup__full-img"
          src={props.card.link ? props.card.link : "#"}
          alt={props.card.name ? props.card.name : ""}
        />
        <figcaption className="image-popup__caption">
          {props.card.name ? props.card.name : ""}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
