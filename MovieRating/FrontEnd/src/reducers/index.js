/**
 * App reducers
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';


import {
  errorsProfile,
  errorsList
} from './errors';


const reducers = (history) => combineReducers({
  router: connectRouter(history),
  errorsProfile,
  errorsList
});


export default reducers;
