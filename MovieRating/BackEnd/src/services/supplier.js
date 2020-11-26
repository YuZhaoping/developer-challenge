/**
 * The services' supplier
 */

import ratingService from './ratings';


const initServices = async (props) => {
  await ratingService.init(props);
};


const supplier = {
  initServices,
  getRatingService: () => (ratingService)
};


export default supplier;
