// Server interaction module

import {showAlert} from './util.js';

const SERVER_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

export const getData = function (onSuccess) {
  fetch(`${SERVER_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось получить данные с сервера.');
      }
    })
    .catch(() => {
      showAlert('Не удалось получить данные с сервера.');
    })
    .then((pictures) => onSuccess(pictures));
};

export const postData = function (body, onSuccess, onFail, finalAct = () => {}) {
  fetch(
    SERVER_URL,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  })
    .catch(() => onFail())
    .finally(() => finalAct());
};
