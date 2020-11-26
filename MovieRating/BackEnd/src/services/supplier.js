/**
 * The services' supplier
 */

import modelSupplier from '../models/mock/supplier';

import ratingService from './ratings';


const initServices = async (props) => {
  await modelSupplier.initModels(props);

  await ratingService.init(props);
};


const supplier = {
  initServices,
  getRatingService: () => (ratingService)
};


export default supplier;
