$(function () {
  // ---- ---- shop-slider ---- ---- //
  $('.blog__slider-list').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      '<svg class="slick-arrow slick-arrow__left" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">      <path d="M2.50962 7.78867L15 0.57735L27.4904 7.78867V22.2113L15 29.4227L2.50962 22.2113V7.78867Z" stroke="#9F6B08"/>      <path d="M9.64645 14.6464C9.45118 14.8417 9.45118 15.1583 9.64645 15.3536L12.8284 18.5355C13.0237 18.7308 13.3403 18.7308 13.5355 18.5355C13.7308 18.3403 13.7308 18.0237 13.5355 17.8284L10.7071 15L13.5355 12.1716C13.7308 11.9763 13.7308 11.6597 13.5355 11.4645C13.3403 11.2692 13.0237 11.2692 12.8284 11.4645L9.64645 14.6464ZM20 14.5L10 14.5V15.5L20 15.5V14.5Z" fill="#9F6B08"/>      </svg>      ',
    nextArrow:
      '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="slick-arrow slick-arrow__right">  <path d="M2.50962 7.78867L15 0.57735L27.4904 7.78867V22.2113L15 29.4227L2.50962 22.2113V7.78867Z" stroke="#9F6B08"/> <path d="M20.3536 15.3536C20.5488 15.1583 20.5488 14.8417 20.3536 14.6464L17.1716 11.4645C16.9763 11.2692 16.6597 11.2692 16.4645 11.4645C16.2692 11.6597 16.2692 11.9763 16.4645 12.1716L19.2929 15L16.4645 17.8284C16.2692 18.0237 16.2692 18.3403 16.4645 18.5355C16.6597 18.7308 16.9763 18.7308 17.1716 18.5355L20.3536 15.3536ZM10 15.5H20V14.5H10V15.5Z" fill="#9F6B08"/></svg>',
  });
});
// ---- ---- click menu ---- ---- //
const button = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-btn__icon');
const menuListLeft = document.querySelector('.menu__list--left');
const menuListRight = document.querySelector('.menu__list--right');

button.onclick = function () {
  menuListLeft.classList.toggle('active');
  menuListRight.classList.toggle('active');
  menuIcon.classList.toggle('active');
};

// ---- ---- scroll  ---- ---- //
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
// ---- ---- modals  ---- ---- //
const btns = document.querySelectorAll('.blog__slider-more');
const modalOverlay = document.querySelector('.blog__modal-box');
const modals = document.querySelectorAll('.blog__modal-item');
const btnClose = document.querySelectorAll('.blog__modal-btn');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('blog__modal-item--visible');
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add('blog__modal-item--visible');
    modalOverlay.classList.add('blog__modal-box--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('blog__modal-box--visible');
    modals.forEach((el) => {
      el.classList.remove('blog__modal-item--visible');
    });
  }
});
btnClose.forEach((el) => {
  el.addEventListener('click', () => {
    modals.forEach((el) => {
      el.classList.remove('blog__modal-item--visible');
    });
    modalOverlay.classList.remove('blog__modal-box--visible');
  });
});
