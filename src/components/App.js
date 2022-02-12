import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className='page'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile-popup'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className='form__fieldset form__fieldset_type_input'>
          <label htmlFor='user-name' className='form__label'>
            <input
              type='text'
              required
              id='user-name'
              name='user-name'
              placeholder='Ваше имя'
              minLength={2}
              maxLength={40}
              className='form__input user-name-input'
            />
            <span className='form__input-error user-name-input-error' />
          </label>
          <label htmlFor='user-profession' className='form__label'>
            <input
              type='text'
              required
              id='user-profession'
              name='user-profession'
              placeholder='Ваша профессия'
              minLength={2}
              maxLength={200}
              className='form__input user-profession-input'
            />
            <span className='form__input-error user-profession-input-error' />
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title={'Новое место'}
        name={'card-popup'}
        isOpen={isAddPlacePopupOpen}
        submitCaption={'Создать'}
        onClose={closeAllPopups}
      >
        <fieldset className='form__fieldset form__fieldset_type_input'>
          <label htmlFor='card-name' className='form__label'>
            <input
              type='text'
              required
              id='card-name'
              name='card-name'
              placeholder='Название'
              minLength={2}
              maxLength={30}
              className='form__input card-name-input'
            />
            <span className='form__input-error card-name-input-error' />
          </label>
          <label htmlFor='card-link' className='form__label'>
            <input
              type='url'
              required
              id='card-link'
              name='card-link'
              placeholder='Ссылка на картинку'
              className='form__input card-link-input'
            />
            <span className='form__input-error card-link-input-error' />
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar-popup'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className='form__fieldset form__fieldset_type_input'>
          <label htmlFor='avatar-link' className='form__label'>
            <input
              type='url'
              required
              id='avatar-link'
              name='avatar-link'
              placeholder='Ссылка на картинку'
              className='form__input avatar-link-input'
            />
            <span className='form__input-error avatar-link-input-error' />
          </label>
        </fieldset>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
