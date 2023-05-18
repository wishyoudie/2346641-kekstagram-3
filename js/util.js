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
      return `invert(${nval * 100}%)`;
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

export const showAlert = function (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 2500);
};
