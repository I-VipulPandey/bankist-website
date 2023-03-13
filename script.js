'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// open model function
const openModal = function (e) {

  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// close model function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// selecting all buttons that can open model
btnsOpenModal.forEach(function (btn) {
    btn.addEventListener('click',openModal)
  })

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close model by esc key

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  } 
});
