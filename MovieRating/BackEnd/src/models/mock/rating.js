
let dataStore;

const init = async (props) => {
  dataStore = props.dataStore;
}


const getAllRatings = async () => {
  return await dataStore.findAllRatings();
};


const crypto = require('crypto');

function generateRatingId(category) {
  // TODO, just simulating for test by md5
  return crypto.createHash('md5').update(category).digest('hex');
}


const createRating = async (ratingDTO) => {
  const ratingId = generateRatingId(ratingDTO.category);

  const rating = {
    ratingId,
    ...ratingDTO
  };

  await dataStore.createRating(rating);

  return rating;
}


const getMoviesOfRating = async (ratingId) => {
  return await dataStore.findMoviesByRatingId(ratingId);
};


const ratingModel = {
  init,
  getAllRatings,
  createRating,
  getMoviesOfRating
};


export default ratingModel;
