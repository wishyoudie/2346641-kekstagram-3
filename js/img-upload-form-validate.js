// Upload image form validation, handlers etc module
import '../pristine/pristine.min.js';
import {isDescriptionValid} from './util.js';
import {showImageUploadOverlay, hideImageUploadOverlay, showSuccessMessage} from './img-upload-overlay.js';
import {form} from './main.js';

export const imageUploadFormValidate = function () {
  form.querySelector('#upload-file').addEventListener('change', () => {
    showImageUploadOverlay();
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
      hideImageUploadOverlay();
      showSuccessMessage();
    }
  });
};
