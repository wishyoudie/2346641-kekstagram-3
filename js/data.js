// Create and manage data functions
import { getRandomInteger } from './util';

function createPhotosArray (numberOfPhotos) {
  const res = [];

  for (let i = 0; i < numberOfPhotos; i++) {
    res[i] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Very nice photo with id ${i}`,
      likes: getRandomInteger(15, 200),
      comments: getRandomInteger(0, 200),
    };
  }
  return res;
}

export {createPhotosArray};
