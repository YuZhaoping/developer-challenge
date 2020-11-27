
let dataStore;

const init = async (props) => {
  dataStore = props.dataStore;
}


const crypto = require('crypto');

function generateMovieId(title) {
  // TODO, just simulating for test by md5
  return crypto.createHash('md5').update(title).digest('hex');
}


const newMovie = (movieId, dto) => {
  return {
    movieId,
    totalScore: 0,
    ratedUserCount: 0,
    scoreByUser: -1,
    ...dto
  };
};

const addMovieForRating = async (ratingId, movieDTO) => {
  const movieId = generateMovieId(movieDTO.title);

  const movie = newMovie(movieId, movieDTO);

  await dataStore.addMovieForRating(ratingId, movie);

  return movie;
};


const getMovieOfRating = async (ratingId, movieId) => {
  return await dataStore.findRatingMovieByIds(ratingId, movieId);
}


const accumulateMovieScore = (movie, scoreByUser) => {
  if (scoreByUser >= 0) {
    let totalScore = movie.totalScore;
    let ratedUserCount = movie.ratedUserCount;

    totalScore += scoreByUser;
    ++ratedUserCount;

    return {
      ...movie,
      totalScore,
      ratedUserCount,
      scoreByUser
    };
  } else {
    return { ...movie, scoreByUser };
  }
}

const rateMovie = async (ratingId, movie, scoreByUser) => {
  movie = accumulateMovieScore(movie, scoreByUser);

  await dataStore.updateRatingMovie(ratingId, movie);

  return movie;
}


const movieModel = {
  init,
  addMovieForRating,
  getMovieOfRating,
  rateMovie
};


export default movieModel;
