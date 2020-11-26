
let dataStore;

const init = async (props) => {
  dataStore = props.dataStore;
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


const scoreMovie = (movie, scoreByUser) => {
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


const movieModel = {
  init,
  newMovie,
  scoreMovie
};


export default movieModel;
