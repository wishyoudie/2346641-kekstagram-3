// Entry point
import {createPicturesArray} from './data.js';
import {drawPictures} from './draw.js';
import {imageFormValidate} from './img-form-validate.js';

export const form = document.querySelector('#upload-select-image');

drawPictures(createPicturesArray(25));
imageFormValidate();
