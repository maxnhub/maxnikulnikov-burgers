function renderPopup(title, text){
  const popup = document.querySelector('.popup');

  popup.classList.add('popup--active');

  popup.querySelector('.popup__title').textContent = title;
  popup.querySelector('.popup__text').textContent = text;

  popup.querySelector('.popup__exit').addEventListener('click' , e=>{
    e.preventDefault();

    popup.classList.remove('popup--active');
  })
}