import baseUrl from './baseUrl';

import {
  doGet,
  doCreate
} from '../api/helpers';


export const getAllRatings = () => {
  const url = baseUrl;

  return doGet(url);
};

export const creatRating = (data) => {
  const url = baseUrl;

  return doCreate(url, data);
};


const api = {
  getAllRatings,
  creatRating
};

export default api;
