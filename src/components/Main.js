import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.setLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  return (
    <main className='content'>
      <section className='profile horizontal-aligned-block'>
        <div className='profile__avatar-overlay'>
          <img className='profile__avatar' src={`${currentUser.avatar}`} alt='Аватар пользователя.' />
          <button className='profile__btn profile__btn_action_avatar-edit' onClick={onEditAvatar}></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'>{currentUser.name}</h1>
          <button
            type='button'
            className='profile__btn profile__btn_action_edit animated-element'
            onClick={onEditProfile}
          ></button>
          <p className='profile__subtitle'>{currentUser.about}</p>
        </div>
        <button
          type='button'
          className='profile__btn profile__btn_action_add animated-element'
          onClick={onAddPlace}
        ></button>
      </section>
      <div className='cards horizontal-aligned-block'>
        {cards.map((card) => (
          <Card
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            key={card._id}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
