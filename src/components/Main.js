import React, { useContext, useEffect, useState } from "react";
import pen from "../images/pen.svg";
import api from "../utils/Api.js";
import "../index.css";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.sendLikeToServer(card._id, !isLiked, card.likes).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

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
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
