/* The movie ratings' service */

import modelSupplier from '../models/mock/supplier';

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
  const ratingId = createIdByName(ratingDTO.category);

  const rating = {
    ratingId,
    ...ratingDTO
  };

  await ratingsDataStore.saveRating(rating);

  return rating;
};


const getMoviesOfRating = async (ratingId) => {
  return await ratingsDataStore.findMoviesByRatingId(ratingId);
};


const addMovieForRating = async (ratingId, movieDTO) => {
  const movieId = createIdByName(movieDTO.title);

  const movie = movieModel.newMovie(movieId, movieDTO);

  await ratingsDataStore.addMovieForRating(ratingId, movie);

  return movie;
};


const scoreMovie = async (ratingId, movieId, scoreByUser) => {
  let movie = await ratingsDataStore.findRatingMovieByIds(ratingId, movieId);

  if (movie) {
    movie = movieModel.scoreMovie(movie, scoreByUser);

    await ratingsDataStore.updateRatingMovie(ratingId, movie);

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
