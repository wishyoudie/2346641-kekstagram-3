// Utility funtions

export const getRandomInteger = function (left, right) {
  if (right < left || left < 0) {
    throw new Error(`Invalid parameters given: ${  left  }, ${  right}`);
  }
  if (right === left) {
    return left;
  }

  return Math.floor(left + (right - left + 1) * Math.random());
};

export const lengthFits = function (str, len) {
  return (str.length <= len);
};

export const isDescriptionValid = function (value) {
  return value.length >= 20 && value.length <= 140;
};

export const addHideHandler = function (element, hideHandler) {
  element.addEventListener('click', hideHandler);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      hideHandler();
    }
  });
};

export const getEffectString = function (effect, nval) {
  switch (effect) {
    case 'chrome': {
      return `grayscale(${nval})`;
    }
    case 'sepia': {
      return`sepia(${nval})`;
    }
    case 'marvin': {
      return `invert(${nval}%)`;
    }
    case 'phobos': {
      return `blur(${nval * 3}px)`;
    }
    case 'heat': {
      return `brightness(${nval * 3})`;
    }
    default: {
      return '';
    }
  }
};
