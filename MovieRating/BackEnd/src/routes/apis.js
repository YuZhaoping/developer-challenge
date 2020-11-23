const express = require('express');
const router = express.Router();

import {
  getMovieRatings,
  createMovieRating
} from '../controllers/ratings';


router.route('/movie_ratings')
  .get(getMovieRatings)
  .post(createMovieRating);


router.all('/',
function(req, res, next) {
  res.json({'message': 'TODO'});
});

module.exports = router;
