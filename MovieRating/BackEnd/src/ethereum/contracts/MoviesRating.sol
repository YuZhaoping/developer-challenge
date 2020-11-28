pragma solidity >=0.4.24 <0.6.0;

contract MoviesRating {

  struct Movie {
    bytes32 movieId;
    uint totalScore;
    uint ratedUserCount;
  }

  Movie[] public movies;


  address public initiator;

  bytes32 public ratingId;


  constructor(bytes32 ratingId_) public {
    initiator = msg.sender;
    ratingId = ratingId_;
  }


  function addMovie(bytes32 movieId) public returns (uint movieIndex) {
    require(
      msg.sender == initiator,
      "Only initiator can add movie for rating."
    );

    movieIndex = movies.length;

    movies.push(Movie({
      movieId: movieId,
      totalScore: 0,
      ratedUserCount: 0
    }));
  }


  function getMoviesCount() public view returns (uint count) {
    count = movies.length;
  }

  function getMovie(uint movieIndex) public view returns (bytes32 movieId, uint totalScore, uint ratedUserCount) {
    require(validMovieIndex(movieIndex), "Movie index out of bounds.");

    movieId = movies[movieIndex].movieId;
    totalScore = movies[movieIndex].totalScore;
    ratedUserCount = movies[movieIndex].ratedUserCount;
  }


  function rateMovie(uint movieIndex, uint score) public returns (uint totalScore, uint ratedUserCount) {
    require(validMovieIndex(movieIndex), "Movie index out of bounds.");

    require(
      score >=0 && score <= 100,
      "Invalid movie score."
    );

    movies[movieIndex].totalScore += score;
    movies[movieIndex].ratedUserCount += 1;

    totalScore = movies[movieIndex].totalScore;
    ratedUserCount = movies[movieIndex].ratedUserCount;
  }

  function validMovieIndex(uint movieIndex) public view returns (bool) {
    return (movieIndex >=0 && movieIndex < movies.length);
  }

}
