/* The movie ratings' service */

let ratingModel;
let movieModel;


const init = async ({ providers }) => {
  const modelSupplier = providers.ratingsModelSupplier;

  ratingModel = modelSupplier.ratingModel;
  movieModel = modelSupplier.movieModel;
};


const getAllRatings = async () => (await ratingModel.findAllRatings());

const createRating = async (ratingDTO) => (await ratingModel.createRating(ratingDTO));

const getMoviesOfRating = async (ratingId) => (
  await ratingModel.getMoviesOfRating(ratingId)
);

const addMovieForRating = async (ratingId, movieDTO) => (
  await movieModel.addMovieForRating(ratingId, movieDTO)
);

const rateMovie = async (ratingId, movieId, scoreByUser) => {
  const movie = await movieModel.getMovieOfRating(ratingId, movieId);
  return movie ? await movieModel.rateMovie(ratingId, movie, scoreByUser) : {};
};


const ratingService = {
  init,
  getAllRatings,
  createRating,
  getMoviesOfRating,
  addMovieForRating,
  rateMovie
};


export default ratingService;
