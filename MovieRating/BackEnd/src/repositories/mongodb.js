const mongoose = require('mongoose');

import modelSupplier from '../models/ethereum/supplier';


const RatingSchema = () => (new mongoose.Schema({
  category: String,
  contractAddress: String,
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'MovieModel'
  }]
}));

const MovieSchema = () => (new mongoose.Schema({
  ratingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'RatingModel'
  },
  movieIndex: Number,
  title: String,
  posterUrl: String,
  majorStaffs: String,
  briefIntro: String
}));


let RatingModel;
let MovieModel;


const init = async ({ self, config, ethereumAgent }) => {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
  };

  await mongoose.connect(config.mongodb.url, options);

  mongoose.Promise = global.Promise;

  RatingModel = mongoose.model('RatingModel', RatingSchema());
  MovieModel = mongoose.model('MovieModel', MovieSchema());

  if (config.mongodb.cleanOnStart) {
    await RatingModel.deleteMany({});
    await MovieModel.deleteMany({});
  }

  await modelSupplier.initModels({
    dataStore: self,
    config,
    ethereumAgent
  });
};


const getModelSupplier = () => {
  return modelSupplier;
};


function normalizeRating (obj) {
  return {
    ratingId: obj.id,
    contractAddress: obj.contractAddress,
    category: obj.category
  };
}


const findAllRatings = async () => {
  const ratings = [];

  const projection = {
    movies: false,
    __v: false
  };

  const cursor = RatingModel.find({}, projection).cursor();

  for (let obj = await cursor.next(); obj != null; obj = await cursor.next()) {
    ratings.push(normalizeRating(obj));
  }

  return ratings;
};


const createRating = async (ratingDTO) => {
  const rating = await RatingModel.create(ratingDTO);

  return normalizeRating(rating);
};


const updateRating = async (ratingId, updates) => {
  await RatingModel.findByIdAndUpdate(ratingId, updates).exec();
};


const getRatingContractAddress = async (ratingId) => {
  const rating = await RatingModel.findById(ratingId).exec();

  if (rating) {
    return rating.contractAddress;
  }
};


function normalizeMovie (obj) {
  const { id: movieId, movieIndex, title, posterUrl, majorStaffs, briefIntro } = obj;

  return { movieId, movieIndex, title, posterUrl, majorStaffs, briefIntro };
}


const findMoviesByRatingId = async (ratingId) => {
  const rating = await RatingModel.findById(ratingId).populate('movies');

  const movies = [];

  rating.movies.forEach((movie) => {
    movies.push(normalizeMovie(movie));
  });

  return movies;
};


const addMovieForRating = async (ratingId, movieDTO) => {
  const movie = await MovieModel.create({ ratingId, ...movieDTO });

  const rating = await RatingModel.findById(ratingId);
  rating.movies.push(movie);
  await rating.save();

  return normalizeMovie(movie);
};


const findRatingMovieByIds = async (ratingId, movieId) => {
  const movie = await MovieModel.findById(movieId).exec();

  return normalizeMovie(movie);
};


const updateRatingMovie = async (movieId, updates) => {
  await MovieModel.findByIdAndUpdate(movieId, updates).exec();
};


const dataStore = {
  init,
  getModelSupplier,
  findAllRatings,
  createRating,
  updateRating,
  getRatingContractAddress,
  findMoviesByRatingId,
  addMovieForRating,
  findRatingMovieByIds,
  updateRatingMovie
};


export default dataStore;
