
import ethereumLoader from '../ethereum/loader';
import dataStoreLoader from '../repositories/loader';


const init = async ({ config, expressApp }) => {
  const ethereumAgent = await ethereumLoader.init({ config });

  const dataStore = await dataStoreLoader.init({ config, ethereumAgent });

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
