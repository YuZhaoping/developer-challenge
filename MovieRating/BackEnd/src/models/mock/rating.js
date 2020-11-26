
let dataStore;

const init = async (props) => {
  dataStore = props.dataStore;
}


const findAllRatings = async () => {
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

  await dataStore.saveRating(rating);

  return rating;
}


const ratingModel = {
  init,
  findAllRatings,
  createRating
};


export default ratingModel;