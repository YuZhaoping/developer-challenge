
const contractsMovies = new Map();


const init = async ({ self, config }) => {
  // Nothing to do.
};


const crypto = require('crypto');

function generateContractAddr(ratingId) {
  // TODO, just simulating for test by md5
  return crypto.createHash('md5').update(ratingId).digest('hex');
}

function newMovie() {
  return {
    totalScore: 0,
    ratedUserCount: 0,
    scoreByUser: -1
  };
}

function accumulateMovieScore(movie, scoreByUser) {
  if (scoreByUser >= 0) {
    let totalScore = movie.totalScore;
    let ratedUserCount = movie.ratedUserCount;

    totalScore += scoreByUser;
    ++ratedUserCount;

    return {
      totalScore,
      ratedUserCount,
      scoreByUser
    };
  } else {
    return { ...movie, scoreByUser };
  }
}


const createRatingContract = async ({ ratingId }) => {
  const contractAddress = generateContractAddr(ratingId);

  return { contractAddress };
};


const ratingMoviesOf = (contractAddress) => {
  const movies = contractsMovies.get(contractAddress);
  return movies || [];
};


const addRatingMovie = async (contractAddress, { movieId }) => {
  const movies = ratingMoviesOf(contractAddress);

  const movieIndex = movies.length;

  movies.push(newMovie());

  contractsMovies.set(contractAddress, movies);

  return { movieIndex };
};


const getRatingMovie = async (contractAddress, movieIndex) => {
  const movies = ratingMoviesOf(contractAddress);

  return movies[movieIndex];
};


const rateMovie = async (contractAddress, movieIndex, score) => {
  const movies = ratingMoviesOf(contractAddress);

  const movie = accumulateMovieScore(movies[movieIndex], score);

  movies.splice(movieIndex, 1, movie);

  return movie;
};


const ethereumAgent = {
  init,
  createRatingContract,
  addRatingMovie,
  getRatingMovie,
  rateMovie
};


export default ethereumAgent;
