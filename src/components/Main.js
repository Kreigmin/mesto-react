import React, { useEffect, useState } from "react";
import pen from "../images/pen.svg";
import api from "../utils/Api.js";
import "../index.css";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);

  useEffect(() => {
    api.getCards().then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
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
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-btn"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__job">{userDescription}</p>
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
          {cards.map((card) => {
            return (
              <li className="card" key={card._id}>
                <button className="card__full-img-btn">
                  <img className="card__image" src={card.link} alt="" />
                </button>
                <div className="card__footer">
                  <h2 className="card__title">{card.name}</h2>
                  <div className="card__like-container">
                    <button
                      className="card__like"
                      type="button"
                      aria-label="Нравится"
                    ></button>
                    <p className="card__like-number">{card.likes.length}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
