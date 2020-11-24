import React from 'react';


import ratingsAPIs from '../../services/ratings/apis';

import Table from './Table';

import {
  mapRowToEditData
} from './Table/rowData';


const Container = (props) => {
  const { title, contactId } = props;


  const queryRowsData = query => {
    return new Promise((resolve, reject) => {
      ratingsAPIs.getMoviesOfRating(contactId).then(
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

    // return ratingsAPIs.addMovieForRating(contactId, data);
    return new Promise((resolve, reject) => {
      ratingsAPIs.addMovieForRating(contactId, data).then(
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

    // return ratingsAPIs.scoreMovie(contactId, movieId, data);
    return new Promise((resolve, reject) => {
      const data = { scoreByUser };

      ratingsAPIs.scoreMovie(contactId, movieId, data).then(
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
