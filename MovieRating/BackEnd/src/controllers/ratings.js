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


export const getMoviesOfRating = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;

    const data = await ratingService.getMoviesOfRating(contactId);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const addMovieForRating = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;

    const movieDTO = req.body;

    const data = await ratingService.addMovieForRating(contactId, movieDTO);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};


export const scoreMovie = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;
    const movieId = req.params.movieId;

    const movieDTO = req.body;

    const data = await ratingService.scoreMovie(contactId, movieId, movieDTO);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};
