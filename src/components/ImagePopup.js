import React from "react";
import "../index.css";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_bg-alfa_black popup_type_image ${
        props.card[0] ? "popup_opened" : ""
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
          src={props.card[0] ? props.card[1].link : "#"}
          alt="#"
        />
        <figcaption className="image-popup__caption"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
