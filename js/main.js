// Entry point
import {drawPictures} from './draw.js';
import {validateForm} from './form.js';
import {getData} from './api.js';

export const form = document.querySelector('#upload-select-image');

validateForm();
getData(drawPictures);
