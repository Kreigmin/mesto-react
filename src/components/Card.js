import React, { useContext } from "react";
import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onDeleteCardClick();
    props.onCurrentCard(props.card);
  }

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `card__delete-btn ${
    isOwn ? "card__delete-btn_state_visible" : "card__delete-btn_state_hidden"
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_state_active" : "card__like_state_inactive"
  }`;

  return (
    <li className="card">
      <button className="card__full-img-btn" onClick={handleClick}>
        <img className="card__image" src={props.card.link} alt="" />
      </button>
      <div className="card__footer">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="Нравится"
          ></button>
          <p className="card__like-number">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
        type="button"
        aria-label="Удалить"
      ></button>
    </li>
  );
}

export default Card;
