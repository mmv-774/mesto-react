import React from 'react';

function Card({ card }) {
  return (
    <article className='card'>
      <img className='card__photo' src={card.link} alt={card.name} />
      <button type='button' className='card__btn card__btn_action_delete' />
      <div className='card__description'>
        <h3 className='card__title'>{card.name}</h3>
        <div className='card__like-container'>
          <button type='button' className='card__btn card__btn_action_like' />
          <span className='card__like-count'>{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
