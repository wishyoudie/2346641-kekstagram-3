// Entry point
import './elements.js';
import './form.js';
import {getData} from './api.js';
import {drawPictures} from './draw.js';

getData(drawPictures);
