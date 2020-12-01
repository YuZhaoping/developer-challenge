/* The movie ratings' controller */

import ratingService from '../services/ratings';

import RestApiError from '../errors/RestApiError';


const apiVersion = 'v1';


export const handleRestApiError = (err, req, res, next) => {
  let apiError;
  if (err instanceof RestApiError) {
    apiError = err;
  } else {
    apiError = new RestApiError(err.message, err);
  }

  const statusCode = apiError.getStatusCode();
  const error = apiError.simplify();

  res.status(statusCode).json({ apiVersion, error });
};


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
    const ratingId = req.params.ratingId;

    const data = await ratingService.getMoviesOfRating(ratingId);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const addMovieForRating = async (req, res, next) => {
  try {
    const ratingId = req.params.ratingId;

    const movieDTO = req.body;

    const data = await ratingService.addMovieForRating(ratingId, movieDTO);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};


export const rateMovie = async (req, res, next) => {
  try {
    const ratingId = req.params.ratingId;
    const movieId = req.params.movieId;

    const movieDTO = req.body;
    const scoreByUser = parseInt(movieDTO.scoreByUser);

    const data = await ratingService.rateMovie(ratingId, movieId, scoreByUser);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};
