const express = require('express');
const router = express.Router();

import {
  getMovieRatings,
  createMovieRating,
  getMoviesOfRating,
  addMovieForRating,
  scoreMovie
} from '../controllers/ratings';


router.route('/movie_ratings')
  .get(getMovieRatings)
  .post(createMovieRating);


router.route('/movie_ratings/:contactId/movies')
  .get(getMoviesOfRating)
  .post(addMovieForRating);


router.route('/movie_ratings/:contactId/movies/:movieId')
  .patch(scoreMovie);


router.all('/',
function(req, res, next) {
  res.json({'message': 'TODO'});
});

module.exports = router;
