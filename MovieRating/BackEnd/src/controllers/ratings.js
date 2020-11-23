/* The movie ratings' controller */

import ratingService from '../services/ratings';


const apiVersion = 'v1';


export const getAllRatings = async (req, res, next) => {
  try {
    const data = await ratingService.getAllRatings();

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const createRating = async (req, res, next) => {
  try {
    const ratingDTO = req.body;

    const data = await ratingService.createRating(ratingDTO);

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
