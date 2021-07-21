import React from "react";
import "../index.css";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button className="card__full-img-btn" onClick={handleClick}>
        <img className="card__image" src={props.card.link} alt="" />
      </button>
      <div className="card__footer">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like"
            type="button"
            aria-label="Нравится"
          ></button>
          <p className="card__like-number">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className="card__delete-btn"
        type="button"
        aria-label="Удалить"
      ></button>
    </li>
  );
}

export default Card;
