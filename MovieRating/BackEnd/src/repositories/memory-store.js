
const ratings = [];

const ratingsMovies = new Map();


const init = async () => {
  // Nothing to do.
};


const findAllRatings = async () => {
  return ratings;
};

const saveRating = async (rating) => {
  if (ratings.findIndex(element => (element.contactId === rating.contactId)) < 0) {
    ratings.push(rating);
  }
};


const findMoviesByContactId = async (contactId) => {
  const movies = ratingsMovies.get(contactId);
  return movies || [];
};


const addMovieForRating = async (contactId, movie) => {
  const movies = await findMoviesByContactId(contactId);

  if (movies.findIndex(element => (element.movieId === movie.movieId)) < 0) {
    movies.push(movie);

    ratingsMovies.set(contactId, movies);
  }

  return movie;
};


const findRatingMovieByIds = async (contactId, movieId) => {
  const movies = ratingsMovies.get(contactId);

  if (movies) {
    return movies.find(element => (element.movieId === movieId));
  }
};


const updateRatingMovie = async (contactId, movie) => {
  const movies = ratingsMovies.get(contactId);

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
  findAllRatings,
  saveRating,
  findMoviesByContactId,
  addMovieForRating,
  findRatingMovieByIds,
  updateRatingMovie
};


export default dataStore;
