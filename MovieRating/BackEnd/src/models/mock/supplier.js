/**
 * The models' supplier
 */

import ratingModel from './rating';
import movieModel from './movie';


const initModels = async (props) => {
  await ratingModel.init(props);
  await movieModel.init(props);
};


const supplier = {
  initModels,
  ratingModel,
  movieModel
};


export default supplier;
