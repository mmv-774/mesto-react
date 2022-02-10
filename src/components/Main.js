import React from 'react';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className='content'>
      <section className='profile horizontal-aligned-block'>
        <div className='profile__avatar-overlay'>
          <img src='#' alt='Аватар пользователя.' className='profile__avatar' />
          <button className='profile__btn profile__btn_action_avatar-edit' onClick={onEditAvatar}></button>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'></h1>
          <button
            type='button'
            className='profile__btn profile__btn_action_edit animated-element'
            onClick={onEditProfile}
          ></button>
          <p className='profile__subtitle'></p>
        </div>
        <button
          type='button'
          className='profile__btn profile__btn_action_add animated-element'
          onClick={onAddPlace}
        ></button>
      </section>
      <div className='cards horizontal-aligned-block'></div>
    </main>
  );
}

export default Main;
