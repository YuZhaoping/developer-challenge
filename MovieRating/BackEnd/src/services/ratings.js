/* The movie ratings' service */

let ratingsDataStore;

let ratingModel;
let movieModel;


const init = async ({ providers }) => {
  ratingsDataStore = providers.ratingsDataStore;

  const modelSupplier = providers.ratingsModelSupplier;

  ratingModel = modelSupplier.ratingModel;
  movieModel = modelSupplier.movieModel;
};


const getAllRatings = async () => {
  return await ratingModel.findAllRatings();
};


const crypto = require('crypto');

function createIdByName(name) {
  // TODO, just simulating for test by md5
  return crypto.createHash('md5').update(name).digest('hex');
}


const createRating = async (ratingDTO) => {
  return await ratingModel.createRating(ratingDTO);
};


const getMoviesOfRating = async (ratingId) => {
  return await ratingModel.getMoviesOfRating(ratingId);
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
