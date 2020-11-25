/**
 * Pages' routes
 */
import RatingsPage from './Ratings';
import RatingMoviesPage from './RatingMovies';


export const ratingsBasePath = '/app/ratings';

const routes = [
  {
    path: `${ratingsBasePath}/:ratingId`,
    component: RatingMoviesPage
  },
  {
    path: ratingsBasePath,
    component: RatingsPage
  }
];


export const defaultPath = ratingsBasePath;

export default routes;
