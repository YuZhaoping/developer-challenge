
let dataStore;
let ethereumAgent;


const init = async (props) => {
  dataStore = props.dataStore;
  ethereumAgent = props.ethereumAgent;
};


const addMovieForRating = async (ratingId, movieDTO) => {
  const movie = await dataStore.addMovieForRating(ratingId, movieDTO);

  const contractAddress = await dataStore.getRatingContractAddress(ratingId);

  if (contractAddress) {
    const { movieIndex } = await ethereumAgent.addRatingMovie(contractAddress, {
      movieId: movie.movieId
    });

    if (!isNaN(movieIndex)) {
      await dataStore.updateRatingMovie(movie.movieId, { movieIndex });

      movie.movieIndex = movieIndex;
    }
  }

  return movie;
};


const getMovieOfRating = async (ratingId, movieId) => {
  return await dataStore.findRatingMovieByIds(ratingId, movieId);
};


const rateMovie = async (ratingId, movie, score) => {
  const movieIndex = movie.movieIndex;
  if (isNaN(movieIndex)) {
    return movie;
  }

  const contractAddress = await dataStore.getRatingContractAddress(ratingId);

  if (contractAddress) {
    const record = await ethereumAgent.rateMovie(contractAddress, movieIndex, score);

    if (record) {
      const movieWithRecord = { ...movie, ...record };

      return movieWithRecord;
    }
  }

  return movie;
};


const movieModel = {
  init,
  addMovieForRating,
  getMovieOfRating,
  rateMovie
};


export default movieModel;
