import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className='card' onClick={handleClick}>
      <img className='card__photo' src={card.link} alt={card.name} />
      <button type='button' className='card__btn card__btn_action_delete' hidden={!isOwn} />
      <div className='card__description'>
        <h3 className='card__title'>{card.name}</h3>
        <div className='card__like-container'>
          <button type='button' className={`card__btn card__btn_action_like ${isLiked && 'card__btn_active_like'}`} />
          <span className='card__like-count'>{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
