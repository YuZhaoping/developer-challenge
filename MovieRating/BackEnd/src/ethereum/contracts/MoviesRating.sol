pragma solidity >=0.4.24 <0.6.0;

contract MoviesRating {

  struct Movie {
    bytes12 movieId;
    uint totalScore;
    uint ratedUserCount;
  }

  Movie[] public movies;


  address public initiator;

  bytes12 public ratingId;


  constructor(bytes12 ratingId_) public {
    initiator = msg.sender;
    ratingId = ratingId_;
  }


  function addMovie(bytes12 movieId_) public returns (uint movieIndex) {
    /* require(
      msg.sender == initiator,
      "Only initiator can add movie for rating."
    ); */

    uint movieIndex_ = movies.length;

    movies.push(Movie({
      movieId: movieId_,
      totalScore: 0,
      ratedUserCount: 0
    }));

    return movieIndex_;
  }


  function getMoviesCount() public view returns (uint count) {
    count = movies.length;

    return count;
  }

  function getMovie(uint movieIndex) public view returns (bytes12 movieId, uint totalScore, uint ratedUserCount) {
    require(validMovieIndex(movieIndex), "Movie index out of bounds.");

    bytes12 movieId_ = movies[movieIndex].movieId;
    uint totalScore_ = movies[movieIndex].totalScore;
    uint ratedUserCount_ = movies[movieIndex].ratedUserCount;

    return (movieId_, totalScore_, ratedUserCount_);
  }


  function rateMovie(uint movieIndex, uint score) public returns (uint totalScore, uint ratedUserCount) {
    require(validMovieIndex(movieIndex), "Movie index out of bounds.");

    require(
      score >=0 && score <= 100,
      "Invalid movie score."
    );

    movies[movieIndex].totalScore += score;
    movies[movieIndex].ratedUserCount += 1;

    uint totalScore_ = movies[movieIndex].totalScore;
    uint ratedUserCount_ = movies[movieIndex].ratedUserCount;

    return (totalScore_, ratedUserCount_);
  }

  function validMovieIndex(uint movieIndex) public view returns (bool) {
    return (movieIndex >=0 && movieIndex < movies.length);
  }

}
