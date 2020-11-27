const express = require('express');
const router = express.Router();

import {
  getAllRatings,
  createRating,
  getMoviesOfRating,
  addMovieForRating,
  rateMovie
} from '../controllers/ratings';


router.route('/movie_ratings')
  .get(getAllRatings)
  .post(createRating);


router.route('/movie_ratings/:ratingId/movies')
  .get(getMoviesOfRating)
  .post(addMovieForRating);


router.route('/movie_ratings/:ratingId/movies/:movieId')
  .patch(rateMovie);


router.all('/',
function(req, res, next) {
  res.json({'message': 'TODO'});
});

module.exports = router;
