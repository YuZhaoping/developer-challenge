
import memoryStore from './memory-store';
import mongoStore from './mongodb';


const init = async ({ config, ethereumAgent }) => {
  let dataStore = memoryStore;

  if (!config.mockdb.enabled && config.mongodb.url) {
    dataStore = mongoStore;
  }

  try {
    await dataStore.init({
      self: dataStore,
      config,
      ethereumAgent
    });

  } catch (err) {
    // TODO
    console.log(err);

    if (dataStore !== memoryStore) {
      console.log('Use the mock data store instead.');

      dataStore = memoryStore;

      await dataStore.init({
        self: dataStore,
        config,
        ethereumAgent
      });

    } else {
      throw err;
    }
  }

  return dataStore;
};


const loader = {
  init
};


export default loader;
