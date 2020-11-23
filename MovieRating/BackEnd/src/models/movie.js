
const newMovie = (movieId, dto) => {
  return {
    movieId,
    totalScore: 0,
    numOfRatedUsers: 0,
    scoreByUser: -1,
    ...dto
  };
};


const scoreMovie = (movie, scoreByUser) => {
  if (scoreByUser >= 0) {
    let totalScore = movie.totalScore;
    let numOfRatedUsers = movie.numOfRatedUsers;

    totalScore += scoreByUser;
    ++numOfRatedUsers;

    return {
      ...movie,
      totalScore,
      numOfRatedUsers,
      scoreByUser
    };
  } else {
    return { ...movie, scoreByUser };
  }
}


const movieModel = {
  newMovie,
  scoreMovie
};


export default movieModel;
