import React from "react";
import "../index.css";

function ImagePopup() {
  return (
    <div className="popup popup_bg-alfa_black popup_type_image">
      <figure className="image-popup">
        <button
          className="close-btn close-image-popup popup__close"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img className="image-popup__full-img" src="#" alt="#" />
        <figcaption className="image-popup__caption"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
