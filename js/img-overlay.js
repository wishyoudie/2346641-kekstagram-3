// Upload image overlay logic module
import {form} from './main.js';
import {addHideHandler} from './util.js';

const overlay = document.querySelector('.img-upload__overlay');

export const hideImageOverlay = function () {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
};

export const showImageOverlay = function () {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addHideHandler('#upload-cancel', hideImageOverlay);
};


const hideSuccessMessage = function () {
  const message = document.querySelector('.success');
  document.body.removeChild(message);
};

export const showSuccessMessage = function () {
  const message = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(message);
  addHideHandler('.success__button', hideSuccessMessage);
};
