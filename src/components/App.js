import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <body className='page'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        title={'Редактировать профиль'}
        name={'profile-popup'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className='form__fieldset form__fieldset_type_input'>
          <label for='user-name' className='form__label'>
            <input
              type='text'
              required
              id='user-name'
              name='user-name'
              placeholder='Ваше имя'
              minlength='2'
              maxlength='40'
              className='form__input user-name-input'
            />
            <span className='form__input-error user-name-input-error'></span>
          </label>
          <label for='user-profession' className='form__label'>
            <input
              type='text'
              required
              id='user-profession'
              name='user-profession'
              placeholder='Ваша профессия'
              minlength='2'
              maxlength='200'
              className='form__input user-profession-input'
            />
            <span className='form__input-error user-profession-input-error'></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title={'Новое место'} name={'card-popup'} isOpen={isAddPlacePopupOpen} submitCaption={'Создать'}>
        <fieldset className='form__fieldset form__fieldset_type_input'>
          <label for='card-name' className='form__label'>
            <input
              type='text'
              required
              id='card-name'
              name='card-name'
              placeholder='Название'
              minlength='2'
              maxlength='30'
              className='form__input card-name-input'
            />
            <span className='form__input-error card-name-input-error'></span>
          </label>
          <label for='card-link' className='form__label'>
            <input
              type='url'
              required
              id='card-link'
              name='card-link'
              placeholder='Ссылка на картинку'
              className='form__input card-link-input'
            />
            <span className='form__input-error card-link-input-error'></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title={'Обновить аватар'} name={'avatar-popup'} isOpen={isEditAvatarPopupOpen}>
        <fieldset className='form__fieldset form__fieldset_type_input'>
          <label for='avatar-link' className='form__label'>
            <input
              type='url'
              required
              id='avatar-link'
              name='avatar-link'
              placeholder='Ссылка на картинку'
              className='form__input avatar-link-input'
            />
            <span className='form__input-error avatar-link-input-error'></span>
          </label>
        </fieldset>
      </PopupWithForm>
    </body>
  );
}

export default App;
