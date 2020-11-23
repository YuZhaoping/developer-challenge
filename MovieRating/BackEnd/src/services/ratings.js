/* The movie ratings' service */

import memoryDataStore from '../repositories/memory-store';

var ratingsDataStore = memoryDataStore;


const init = async ({ providers }) => {
  ratingsDataStore = providers.ratingsDataStore;
};


const getAllMovieRatings = async () => {
  return await ratingsDataStore.findAllRatings();
};


const crypto = require('crypto');

function createIdByCategory(category) {
  // TODO, just simulating for test by md5
  return crypto.createHash('md5').update(category).digest('hex');
}

const createMovieRating = async (movieRatingDTO) => {
  const category = movieRatingDTO.category;

  const contactId = createIdByCategory(category);

  const movieRating = {
    contactId,
    ...movieRatingDTO
  };

  await ratingsDataStore.saveRating(movieRating);

  return movieRating;
};


const ratingService = {
  init,
  getAllMovieRatings,
  createMovieRating
};


export default ratingService;
