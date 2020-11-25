import React from 'react';


import ratingsAPIs from '../../services/ratings/apis';

import Table from './Table';

import {
  mapRowToEditData
} from './Table/rowData';


const Container = (props) => {
  const { title, ratingId } = props;


  const queryRowsData = query => {
    return new Promise((resolve, reject) => {
      ratingsAPIs.getMoviesOfRating(ratingId).then(
        apiData => {
          resolve({data: apiData});
        },
        error => {
          // TODO: reject(error);
          console.log(error);

          resolve({data: []});
        }
      );
    });
  };

  const onRowAdd = newData => {
    const data = mapRowToEditData(newData);

    // return ratingsAPIs.addMovieForRating(ratingId, data);
    return new Promise((resolve, reject) => {
      ratingsAPIs.addMovieForRating(ratingId, data).then(
        apiData => {
          resolve(apiData);
        },
        error => {
          // TODO: reject(error);
          console.log(error);

          resolve(data);
        }
      );
    });
  };

  const onRowUpdate = (newData, oldData) => {
    const data = mapRowToEditData(newData);

    const scoreByUser = data.scoreByUser;

    const movieId = oldData.movieId;

    // return ratingsAPIs.scoreMovie(ratingId, movieId, data);
    return new Promise((resolve, reject) => {
      const data = { scoreByUser };

      ratingsAPIs.scoreMovie(ratingId, movieId, data).then(
        apiData => {
          resolve(apiData);
        },
        error => {
          // TODO: reject(error);
          console.log(error);

          resolve(mapRowToEditData(oldData));
        }
      );
    });
  };


  return (
    <Table
      title={ title }
      data={ queryRowsData }
      onRowAdd={ onRowAdd }
      onRowUpdate={ onRowUpdate }
    />
  );
};


export default Container;
