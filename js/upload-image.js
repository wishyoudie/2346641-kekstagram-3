// Upload image form validation, handlers etc module
import '../pristine/pristine.min.js';
import {isDescriptionValid, addHideHandler} from './util.js';

const form = document.querySelector('#upload-select-image');
const overlay = document.querySelector('.img-upload__overlay');
const fileChooser = form.querySelector('#upload-file');

const hideOverlay = function () {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
};

const showOverlay = function () {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addHideHandler('#upload-cancel', hideOverlay);
};

const hideSuccessMessage = function () {
  const message = document.querySelector('.success');
  document.body.removeChild(message);
};

const showSuccessMessage = function () {
  const message = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(message);
  addHideHandler('.success__button', hideSuccessMessage);
};

const initFormValidation = function () {
  fileChooser.addEventListener('change', () => {
    showOverlay();
  });
  form.method = 'POST';
  form.action = 'https://27.javascript.pages.academy/kekstagram-simple';
  const pristine = new Pristine(form, {
    classTo: 'img-upload__text',
    successClass: 'form--valid',
    errorClass: 'form--invalid',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'form__error',
    errorTextTag: 'span'
  });

  pristine.addValidator(form.querySelector('.text__description'), isDescriptionValid, 'Длина должна быть 20-140 символов');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      hideOverlay();
      showSuccessMessage();
    }
  });
};

export {initFormValidation};
