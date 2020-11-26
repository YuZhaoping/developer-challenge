
import memoryStore from '../repositories/memory-store';


const init = async ({ config, expressApp }) => {
  const dataStore = memoryStore;

  await dataStore.init({ dataStore, config });

  const ratingsModelSupplier = dataStore.getModelSupplier();

  const providers = {
    ratingsDataStore: dataStore,
    ratingsModelSupplier
  };

  return providers;
};


const loaders = {
  init
};


export default loaders;
