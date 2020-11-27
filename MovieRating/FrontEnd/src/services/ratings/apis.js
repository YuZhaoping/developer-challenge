import baseUrl from './baseUrl';

import {
  doGet,
  doCreate,
  doUpdate
} from '../api/helpers';


export const getAllRatings = () => {
  const url = baseUrl;

  return doGet(url);
};

export const creatRating = (data) => {
  const url = baseUrl;

  return doCreate(url, data);
};


const moviesBaseUrl = (ratingId) => (`${baseUrl}/${ratingId}/movies`);


export const getMoviesOfRating = (ratingId) => {
  const url = moviesBaseUrl(ratingId);

  return doGet(url);
};

export const addMovieForRating = (ratingId, data) => {
  const url = moviesBaseUrl(ratingId);;

  return doCreate(url, data);
};


export const rateMovie = (ratingId, movieId, data) => {
  const moviesUrl = moviesBaseUrl(ratingId);
  const url = `${moviesUrl}/${movieId}`;

  return doUpdate(url, data, true);
};


const ratingsAPIs = {
  getAllRatings,
  creatRating,
  getMoviesOfRating,
  addMovieForRating,
  rateMovie
};


export default ratingsAPIs;
