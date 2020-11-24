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


export const getMoviesOfRating = (contactId) => {
  const url = `${baseUrl}/${contactId}/movies`;

  return doGet(url);
};

export const addMovieForRating = (contactId, data) => {
  const url = `${baseUrl}/${contactId}/movies`;

  return doCreate(url, data);
};


export const scoreMovie = (contactId, movieId, data) => {
  const url = `${baseUrl}/${contactId}/movies/${movieId}`;

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
