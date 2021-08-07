import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [currentCard, setCurrentCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [buttonName, setButtonName] = useState("");

  function renderLoading(buttonName) {
    setButtonName(buttonName);
  }

  // useEffect(() => {
  //   api
  //     .getUserInfo()
  //     .then((data) => {
  //       setCurrentUser(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   api
  //     .getCards()
  //     .then((data) => {
  //       setCards(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    Promise.all([api.getCards(), api.getUserInfo()])
      .then((data) => {
        const initialCards = data[0];
        const userInfo = data[1];
        setCards(initialCards);
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, card.likes, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete() {
    api
      .deleteCard(currentCard._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== currentCard._id));
        setCurrentCard([]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setButtonName("Удалить");
      });
  }

  function handleUpdateUser(info) {
    api
      .sendProfileDataToServer(info.name, info.about)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setButtonName("Сохранить");
      });
  }

  function handleUpdateAvatar(info) {
    api
      .changeAvatar(info.avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setButtonName("Сохранить");
      });
  }

  function handleAddPlaceSubmit(info) {
    api
      .addNewCardToServer(info.name, info.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setButtonName("Создать");
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    setButtonName("Сохранить");
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    setButtonName("Сохранить");
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    setButtonName("Создать");
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(!isDeleteCardPopupOpen);
    setButtonName("Да");
  }

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
  }

  function handleCurrentCard(card) {
    setCurrentCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {/* пытался сделать для лого Route и Link, но при попытке сдать работу выдавало ошибку,
       что react-router-dom модуль не найден, поэтому убрал его */}
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onUpdateUser={handleUpdateUser}
          cards={cards}
          onCardLike={handleCardLike}
          onDeleteCardClick={handleDeleteCardClick}
          onCurrentCard={handleCurrentCard}
        />
        <Footer />
      </div>
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        onRenderLoading={renderLoading}
        buttonName={buttonName}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        onRenderLoading={renderLoading}
        buttonName={buttonName}
      />

      <DeleteCardPopup
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
        onDeleteCard={handleCardDelete}
        onRenderLoading={renderLoading}
        buttonName={buttonName}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        onRenderLoading={renderLoading}
        buttonName={buttonName}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
