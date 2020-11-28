
Array.prototype.asyncForEach = async function(callback, thisArg) {
  thisArg = thisArg || this;
  for (let i = 0, l = this.length; i !== l; ++i) {
    await callback.call(thisArg, this[i], i, this);
  }
};


let dataStore;
let ethereumAgent;


const init = async (props) => {
  dataStore = props.dataStore;
  ethereumAgent = props.ethereumAgent;
};


const getAllRatings = async () => (await dataStore.findAllRatings());


const createRating = async (ratingDTO) => {
  const rating = await dataStore.createRating(ratingDTO);

  const ratingId = rating.ratingId;
  const { contractAddress } = await ethereumAgent.createRatingContract({ ratingId });

  await dataStore.updateRating(ratingId, { contractAddress });

  rating.contractAddress = contractAddress;

  return rating;
};


const getMoviesOfRating = async (ratingId) => {
  const movies = await dataStore.findMoviesByRatingId(ratingId);

  if (movies && movies.length > 0) {
    const contractAddress = await dataStore.getRatingContractAddress(ratingId);

    if (contractAddress) {
      await movies.asyncForEach(async (movie, index) => {
        const movieIndex = movie.movieIndex;

        if (isNaN(movieIndex)) {
          return;
        }

        const record = await ethereumAgent.getRatingMovie(contractAddress, movieIndex);
        if (!record) {
          return;
        }

        const movieWithRecord = { ...movie, ...record };

        movies.splice(index, 1, movieWithRecord);
      });
    }
  }

  return movies;
};


const ratingModel = {
  init,
  getAllRatings,
  createRating,
  getMoviesOfRating
};


export default ratingModel;
