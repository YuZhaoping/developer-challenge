/**
 * The models' supplier
 */

import movieModel from './movie';


const initModels = async (props) => {
  await movieModel.init(props);
};


const supplier = {
  initModels,
  movieModel
};


export default supplier;
