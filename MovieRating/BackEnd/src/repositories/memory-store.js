
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


const dataStore = {
  init,
  findAllRatings,
  saveRating
};


export default dataStore;
