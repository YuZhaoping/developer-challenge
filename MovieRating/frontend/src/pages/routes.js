/**
 * Pages' routes
 */
import RatingsPage from './Ratings';
import RatingMoviesPage from './RatingMovies';


const ratingsBasePath = '/app/ratings';

const routes = [
  {
    path: `${ratingsBasePath}/:id`,
    component: RatingMoviesPage
  },
  {
    path: ratingsBasePath,
    component: RatingsPage
  }
];


export const defaultPath = ratingsBasePath;

export default routes;
