const Swagger = require('swagger-client');
const { URL } = require('url');

const path = require('path');
const archiver = require('archiver');

const fetch = require('node-fetch');
const FormData = require('form-data');


import config from './config';


let swaggerClient; // Initialized in init()


function contactsDir() {
  const parentDir = path.relative(process.cwd(), path.resolve(__dirname, '../'));
  return `${parentDir}/contracts/`;
}

async function loadContactsArchive() {
  const archive = archiver('zip');

  archive.directory(contactsDir(), '');

  await archive.finalize();

  return archive;
}

function archiveFormData(archive) {
  const form = new FormData();

  const options = {
    filename: 'smartcontract.zip',
    contentType: 'application/zip',
    knownLength: archive.pointer()
  };

  form.append('file', archive, options);

  return form
}


const compileRequestURL = () => {
  const url = new URL(config.KALEIDO_REST_GATEWAY_URL);
  url.username = config.KALEIDO_AUTH_USERNAME;
  url.password = config.KALEIDO_AUTH_PASSWORD;
  url.pathname = "/abis";

  const contractSourceFile = config.CONTRACT_MAIN_SOURCE_FILE;
  const contractClassName = `${config.CONTRACT_MAIN_SOURCE_FILE}:${config.CONTRACT_CLASS_NAME}`;

  url.searchParams.append('compiler', '0.5');
  url.searchParams.append('source', contractSourceFile);
  url.searchParams.append('contract', contractClassName);

  return url;
};


function checkStatus(res) {
  if (res.ok) { // res.status >= 200 && res.status < 300
    return res;
  } else {
    // TODO
    console.log(res);
    throw new Error(res.statusText);
  }
}

const requestCompileContacts = async () => {
  const requestUrl = compileRequestURL();

  const contactsArchive = await loadContactsArchive();

  const form = archiveFormData(contactsArchive);
  const formHeaders = form.getHeaders();

  const options = {
    method: 'POST',
    body: form,
    headers: {
      ...formHeaders,
      'Accept': 'application/json'
    }
  };

  return fetch(requestUrl.href, options).then(checkStatus)
    .then(res => res.json());
};

const init = async () => {
  const res = await requestCompileContacts();

  // TODO
  console.log(res);

  // Acquire the OpenAPI for Swagger
  const openAPI = res.openapi;

  // Store a singleton swagger client for us to use
  swaggerClient = await Swagger(openAPI, {
    requestInterceptor: req => {
      req.headers.authorization = `Basic ${Buffer.from(`${config.KALEIDO_AUTH_USERNAME}:${config.KALEIDO_AUTH_PASSWORD}`).toString("base64")}`;
    }
  });
};


const createRatingContract = async ({ ratingId }) => {
  try {
    const res = await swaggerClient.apis.default.constructor_post({
      body: {
        // Here we set the constructor parameters
        ratingId_: ratingId
      },
      "kld-from": config.FROM_ADDRESS,
      "kld-sync": "true"
    });

    // TODO
    console.log(res);

    return { contractAddress: res.body.contractAddress };
  } catch (err) {
    // TODO
    console.log(err);
  }
};

const addRatingMovie = async (contractAddress, { movieId }) => {
  console.log(`addRatingMovie(\'${contractAddress}\', \'${movieId}\')`);
  try {
    const res = await swaggerClient.apis.default.addMovie_post({
      address: contractAddress,
      body: {
        movieId_: movieId
      },
      "kld-from": config.FROM_ADDRESS,
      "kld-sync": "true"
    });

    // TODO
    console.log(res);

    // TODO return { movieIndex: res.body.movieIndex };
    let { moviesCount } = await getRatingMoviesCount(contractAddress);
    if (!isNaN(moviesCount)) {
      moviesCount = parseInt(moviesCount);
      return { movieIndex: moviesCount-1 };
    }

  } catch (err) {
    // TODO
    console.log(err);
  }
};

const getRatingMoviesCount = async (contractAddress) => {
  console.log(`getRatingMoviesCount(\'${contractAddress}\')`);
  try {
    const res = await swaggerClient.apis.default.getMoviesCount_get({
      address: contractAddress,
      "kld-from": config.FROM_ADDRESS,
      "kld-sync": "true"
    });

    // TODO
    console.log(res);

    return { moviesCount: res.body.count };
  } catch (err) {
    // TODO
    console.log(err);
  }
};

const getRatingMovie = async (contractAddress, movieIndex) => {
  console.log(`getRatingMovie(\'${contractAddress}\', ${movieIndex})`);
  try {
    const res = await swaggerClient.apis.default.getMovie_post({
      address: contractAddress,
      body: {
        movieIndex
      },
      "kld-from": config.FROM_ADDRESS,
      "kld-sync": "true"
    });

    // TODO
    console.log(res);

    return {
      totalScore: res.body.totalScore,
      ratedUserCount: res.body.ratedUserCount
    };
  } catch (err) {
    // TODO
    console.log(err);
  }
};

const rateMovie = async (contractAddress, movieIndex, score) => {
  console.log(`rateMovie(\'${contractAddress}\', ${movieIndex}, ${score})`);
  try {
    const res = await swaggerClient.apis.default.rateMovie_post({
      address: contractAddress,
      body: {
        movieIndex,
        score
      },
      "kld-from": config.FROM_ADDRESS,
      "kld-sync": "true"
    });

    // TODO
    console.log(res);

    /* TODO
    return {
      totalScore: res.body.totalScore,
      ratedUserCount: res.body.ratedUserCount
    };*/
    return await getRatingMovie(contractAddress, movieIndex);

  } catch (err) {
    // TODO
    console.log(err);
  }
};


const agent = {
  init,
  createRatingContract,
  addRatingMovie,
  getRatingMoviesCount,
  getRatingMovie,
  rateMovie
};


export default agent;
