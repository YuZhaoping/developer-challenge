
import ratingsDataStore from '../repositories/memory-store';


const init = async ({ config, expressApp }) => {
  await ratingsDataStore.init({ config });

  const providers = {
    ratingsDataStore
  };

  return providers;
};


const loaders = {
  init
};


export default loaders;
