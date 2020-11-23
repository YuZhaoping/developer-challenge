import React from 'react';


import api from '../../services/ratings/api';

import Table from './Table';

import {
  mapRowToEditData
} from './Table/rowData';


const Container = (props) => {
  const { title, contactId } = props;


  const queryRowsData = query => {
    return new Promise((resolve, reject) => {
      api.getMoviesOfRating(contactId).then(
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

    return new Promise((resolve, reject) => {
      return api.addMovieForRating(contactId, data);
    });
  };

  const onRowUpdate = (newData, oldData) => {
    const data = mapRowToEditData(newData);

    const scoreByUser = data.scoreByUser;

    const movieId = oldData.movieId;

    return new Promise((resolve, reject) => {
      const data = { scoreByUser };

      return api.scoreMovie(contactId, movieId, data);
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
