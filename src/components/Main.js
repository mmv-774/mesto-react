import React, { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className='content'>
      <section className='profile horizontal-aligned-block'>
        <div className='profile__avatar-overlay'>
          <img className='profile__avatar' src={`${userAvatar}`} alt='Аватар пользователя.' />
          <button className='profile__btn profile__btn_action_avatar-edit' onClick={onEditAvatar}></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'>{userName}</h1>
          <button
            type='button'
            className='profile__btn profile__btn_action_edit animated-element'
            onClick={onEditProfile}
          ></button>
          <p className='profile__subtitle'>{userDescription}</p>
        </div>
        <button
          type='button'
          className='profile__btn profile__btn_action_add animated-element'
          onClick={onAddPlace}
        ></button>
      </section>
      <div className='cards horizontal-aligned-block'>
        {cards.map((card) => (
          <Card card={card} key={card._id} />
        ))}
      </div>
    </main>
  );
}

export default Main;
