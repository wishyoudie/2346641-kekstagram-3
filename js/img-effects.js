// Add effects on image when uploading module
import { getEffectString } from './util.js';
import {
  imageUploadPreview,
  effectsContainer,
  sliderElement,
  sliderValueElement,
  sliderContainer
} from './elements.js';

let currentFilter = '';

export const resetImageEffects = function () {
  imageUploadPreview.style.filter = '';
  imageUploadPreview.classList.remove(...imageUploadPreview.classList);
  imageUploadPreview.classList.add('effects__preview--none');
  sliderContainer.style.display = 'none';
};

const updateImageFilter = function (nval) {
  imageUploadPreview.style.filter = getEffectString(currentFilter, nval);
};

const effectRadioListener = function (btn) {
  imageUploadPreview.classList.remove(...imageUploadPreview.classList);
  sliderContainer.style.display = 'none';
  if (btn.target.value !== 'none') {
    currentFilter = btn.target.value;
    imageUploadPreview.classList.add(`effects__preview--${currentFilter}`);
    sliderContainer.style.display = '';
    updateImageFilter(sliderElement.noUiSlider.get());
  } else {
    currentFilter = 'none';
    resetImageEffects();
  }
  sliderElement.noUiSlider.set(1);
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});
sliderElement.noUiSlider.on('update', () => {
  const val = sliderElement.noUiSlider.get();
  updateImageFilter(val);
  sliderValueElement.value = val;
});
sliderValueElement.value = 1;
sliderContainer.style.display = 'none';
imageUploadPreview.classList.add('effects__preview--none');
effectsContainer.addEventListener('change', effectRadioListener);
