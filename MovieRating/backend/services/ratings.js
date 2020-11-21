/* The movie ratings' service */

const getAllMovieRatings = () => {
  return [];
};


const crypto = require('crypto');

function createIdByCategory(category) {
  // TODO, just simulating for test by md5
  return crypto.createHash('md5').update(category).digest('hex');
}

const createMovieRating = (movieRatingDTO) => {
  const category = movieRatingDTO.category;

  const contactId = createIdByCategory(category);

  const movieRating = {
    contactId,
    ...movieRatingDTO
  };

  return movieRating;
};


const ratingService = {
  getAllMovieRatings,
  createMovieRating
};

export default ratingService;
