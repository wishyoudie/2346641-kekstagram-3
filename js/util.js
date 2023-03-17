// Utility funtions

function getRandomInteger (left, right) {
  if (right < left || left < 0) {
    throw new Error(`Invalid parameters given: ${  left  }, ${  right}`);
  }
  if (right === left) {
    return left;
  }

  return Math.floor(left + (right - left + 1) * Math.random());
}

function doesLengthFit (str, len) {
  return (str.length <= len);
}

export {getRandomInteger, doesLengthFit};
