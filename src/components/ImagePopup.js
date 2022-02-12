function ImagePopup() {
  return (
    <div id='photo-popup' className='photo popup photo-popup'>
      <figure className='photo__figure'>
        <button type='button' className='popup__btn animated-element popup__close' />
        <img className='photo__img' src='#' alt />
        <figcaption className='photo__caption' />
      </figure>
    </div>
  );
}

export default ImagePopup;
