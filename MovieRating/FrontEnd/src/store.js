/**
 * Redux store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';


import reducers from './reducers';


const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const middlewares = [routeMiddleware];


export default function configureStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers(history),
    initialState,
    composeEnhancer(
      applyMiddleware(...middlewares)
    )
  );

  return store;
}


export { history };
