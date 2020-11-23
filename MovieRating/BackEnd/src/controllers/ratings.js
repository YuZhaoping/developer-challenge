/* The movie ratings' controller */

import ratingService from '../services/ratings';


const apiVersion = 'v1';


export const getMovieRatings = async (req, res, next) => {
  try {
    const data = await ratingService.getAllMovieRatings();
    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const createMovieRating = async (req, res, next) => {
  try {
    const movieRatingDTO = req.body;
    const data = await ratingService.createMovieRating(movieRatingDTO);
    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};
