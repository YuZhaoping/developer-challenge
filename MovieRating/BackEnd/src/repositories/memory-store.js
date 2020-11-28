
import modelSupplier from '../models/mock/supplier';


const ratings = [];

const ratingsMovies = new Map();


const init = async ({ self, config }) => {
  await modelSupplier.initModels({ dataStore: self, config });
};

const getModelSupplier = () => {
  return modelSupplier;
};


const findAllRatings = async () => {
  return ratings;
};

const createRating = async (rating) => {
  if (ratings.findIndex(element => (element.ratingId === rating.ratingId)) < 0) {
    ratings.push(rating);
  }
};


const findMoviesByRatingId = async (ratingId) => {
  const movies = ratingsMovies.get(ratingId);
  return movies || [];
};


const addMovieForRating = async (ratingId, movie) => {
  const movies = await findMoviesByRatingId(ratingId);

  if (movies.findIndex(element => (element.movieId === movie.movieId)) < 0) {
    movies.push(movie);

    ratingsMovies.set(ratingId, movies);
  }

  return movie;
};


const findRatingMovieByIds = async (ratingId, movieId) => {
  const movies = ratingsMovies.get(ratingId);

  if (movies) {
    return movies.find(element => (element.movieId === movieId));
  }
};


const updateRatingMovie = async (ratingId, movie) => {
  const movies = ratingsMovies.get(ratingId);

  if (movies) {
    const index = movies.findIndex(element => (element.movieId === movie.movieId));

    if (index >= 0) {
      movies.splice(index, 1, movie);
    }
  }

  return movie;
};


const dataStore = {
  init,
  getModelSupplier,
  findAllRatings,
  createRating,
  findMoviesByRatingId,
  addMovieForRating,
  findRatingMovieByIds,
  updateRatingMovie
};


export default dataStore;
