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


const moviesBaseUrl = (contactId) => (`${baseUrl}/${contactId}/movies`);


export const getMoviesOfRating = (contactId) => {
  const url = moviesBaseUrl(contactId);

  return doGet(url);
};

export const addMovieForRating = (contactId, data) => {
  const url = moviesBaseUrl(contactId);;

  return doCreate(url, data);
};


export const scoreMovie = (contactId, movieId, data) => {
  const moviesUrl = moviesBaseUrl(contactId);
  const url = `${moviesUrl}/${movieId}`;

  return doUpdate(url, data, true);
};


const ratingsAPIs = {
  getAllRatings,
  creatRating,
  getMoviesOfRating,
  addMovieForRating,
  scoreMovie
};


export default ratingsAPIs;
