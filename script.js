const burgerBtn = document.querySelector('.header__burger-body');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup__body');
const crossBtn = document.querySelector('.popup__cross');

burgerBtn.addEventListener('click', openPopup);
crossBtn.addEventListener('click', closePopup);

function openPopup() {
  popup.classList.add('active');
  document.body.style.overflow = 'hidden'
}

function closePopup() {
  popup.classList.remove('active');
  document.body.style.overflow = ''
}

window.addEventListener('mouseup', (event) => {
  if ((event.target != popupBody)) {
    closePopup();
  }
});