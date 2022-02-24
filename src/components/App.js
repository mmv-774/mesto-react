import { useState, useEffect } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/api.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) => console.log(error));
  }, []);

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

  function handleUpdateUser(promise) {
    promise
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) => console.log(error))
      .finally(closeAllPopups);
  }

  function handleUpdateUserInfo(userInfo) {
    handleUpdateUser(api.patchUserInfo(userInfo));
  }

  function handleUpdateUserAvatar({ avatar }) {
    handleUpdateUser(api.patchAvatar(avatar));
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUserInfo}
        />
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
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateUserAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
