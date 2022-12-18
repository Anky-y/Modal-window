'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);

const btnsShowModal = document.querySelectorAll(`.show-modal`);

const modalClose = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const modalOpen = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
// a blank text
//second blank text
//third line of blank text
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener(`click`, modalOpen);

btnCloseModal.addEventListener(`click`, modalClose);

overlay.addEventListener(`click`, modalClose);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    modalClose();
  }
});
