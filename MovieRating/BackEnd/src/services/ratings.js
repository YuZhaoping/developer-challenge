/* The movie ratings' service */

import modelSupplier from '../models/supplier';

import memoryDataStore from '../repositories/memory-store';

var ratingsDataStore = memoryDataStore;


const movieModel = modelSupplier.movieModel;


const init = async ({ providers }) => {
  ratingsDataStore = providers.ratingsDataStore;
};


const getAllRatings = async () => {
  return await ratingsDataStore.findAllRatings();
};


const crypto = require('crypto');

function createIdByName(name) {
  // TODO, just simulating for test by md5
  return crypto.createHash('md5').update(name).digest('hex');
}


const createRating = async (ratingDTO) => {
  const contactId = createIdByName(ratingDTO.category);

  const rating = {
    contactId,
    ...ratingDTO
  };

  await ratingsDataStore.saveRating(rating);

  return rating;
};


const getMoviesOfRating = async (contactId) => {
  return await ratingsDataStore.findMoviesByContactId(contactId);
};


const addMovieForRating = async (contactId, movieDTO) => {
  const movieId = createIdByName(movieDTO.title);

  const movie = movieModel.newMovie(movieId, movieDTO);

  await ratingsDataStore.addMovieForRating(contactId, movie);

  return movie;
};


const scoreMovie = async (contactId, movieId, movieDTO) => {
  let movie = await ratingsDataStore.findRatingMovieByIds(contactId, movieId);

  if (movie) {
    const scoreByUser = movieDTO.scoreByUser;

    movie = movieModel.scoreMovie(movie, scoreByUser);

    await ratingsDataStore.updateRatingMovie(contactId, movie);

    return movie;
  } else {
    return {};
  }
};


const ratingService = {
  init,
  getAllRatings,
  createRating,
  getMoviesOfRating,
  addMovieForRating,
  scoreMovie
};


export default ratingService;
