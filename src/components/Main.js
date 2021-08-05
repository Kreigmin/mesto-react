import React, { useContext } from "react";
import pen from "../images/pen.svg";
import "../index.css";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          >
            <button
              className="profile__change-avatar-btn"
              type="button"
              aria-label="Изменить аватар"
              onClick={props.onEditAvatar}
            >
              <img
                className="profile__avatar-pen"
                src={pen}
                alt="изображение ручки"
              />
            </button>
          </div>
          <div className="profile__text">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-btn"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
