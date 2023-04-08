// Entry point
import {createPicturesArray} from './data.js';
import {drawPictures} from './draw.js';
import {initFormValidation} from './upload-image.js';

drawPictures(createPicturesArray(25));
initFormValidation();
