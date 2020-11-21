/* The movie ratings' controller */

import ratingService from '../services/ratings';


export const getMovieRatings = async (req, res, next) => {
  try {
    const movieRatings = ratingService.getAllMovieRatings();
    res.json({ movieRatings });
  } catch (e) {
    next(e);
  }
};

export const createMovieRating = async (req, res, next) => {
  try {
    const movieRatingDTO = req.body.movieRating;
    const movieRating = ratingService.createMovieRating(movieRatingDTO);
    res.json({ movieRating });
  } catch (e) {
    next(e);
  }
};
