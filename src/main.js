const pressButton = document.querySelector('.nav-button');
const list = document.querySelector('.nav-list');
const logo = document.querySelector('.logo-link');
const buttonShowForm = document.querySelector('.coloboration-button');
const form = document.querySelector('.form');
const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const buttonCloseForm = document.querySelector('.form-close');
const sendMessage = document.querySelector('.send-form');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const fadeItems = document.querySelectorAll('.item-fade-in');
const portfolioImg = document.querySelectorAll('.portfolio-img');

const animateButtonAndList = () => {
  pressButton.classList.add('button-animation');
  list.classList.add('ul-ani');
  setTimeout(() => {
    pressButton.classList.add('button-end');
  }, 1000);
};
const handleButtonClick = () => {
  console.log(window.innerWidth);
  if (window.innerWidth <= 576) {
    logo.classList.add('hide');
    animateButtonAndList();
  } else {
    animateButtonAndList();
  }
};
const openModal = () => {
  form.style.display = 'flex';
  popup.style.display = 'block';
  body.classList.add('body-lock');
};
const closeModal = () => {
  form.style.display = 'none';
  popup.style.display = 'none';
  sendMessage.style.display = 'none';
  body.classList.remove('body-lock');
  form.reset();
};
const handleSendForm = (e) => {
  e.preventDefault();
  form.style.display = 'none';
  sendMessage.style.display = 'block';
  setTimeout(() => {
    closeModal();
  }, 2000);
};
const handleHover = (e) => {
  const i = [...portfolioItems].indexOf(e.currentTarget);
  if (i === -1) return;
  if (e.type === 'mouseenter') {
    portfolioImg[i].classList.add('img-transform-in');
  }
  if (e.type === 'mouseleave') {
    portfolioImg[i].classList.remove('img-transform-in');
  }
};

portfolioItems.forEach((item) => {
  item.addEventListener('mouseenter', handleHover);
  item.addEventListener('mouseleave', handleHover);
});
form.addEventListener('submit', handleSendForm);
pressButton.addEventListener('click', handleButtonClick);
buttonShowForm.addEventListener('click', openModal);
buttonCloseForm.addEventListener('click', closeModal);
popup.addEventListener('click', closeModal);
