import React from 'react';
import { connect } from 'react-redux';


import publishError from '../../actions/errors';

import ratingsAPIs from '../../services/ratings/apis';

import Table from './Table';

import {
  mapRowToEditData
} from './Table/rowData';


const Container = (props) => {
  const { title, ratingId, publishError } = props;


  const handleError = (error) => {
    console.log(error);
    publishError(error);
  }


  const queryRowsData = query => {
    return new Promise((resolve, reject) => {
      ratingsAPIs.getMoviesOfRating(ratingId).then(
        apiData => {
          resolve({data: apiData});
        },
        error => {
          handleError(error);

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
          handleError(error);

          resolve(data);
        }
      );
    });
  };

  const onRowUpdate = (newData, oldData) => {
    const data = mapRowToEditData(newData);

    const scoreByUser = data.scoreByUser;

    const movieId = oldData.movieId;

    // return ratingsAPIs.rateMovie(ratingId, movieId, data);
    return new Promise((resolve, reject) => {
      const data = { scoreByUser };

      ratingsAPIs.rateMovie(ratingId, movieId, data).then(
        apiData => {
          resolve(apiData);
        },
        error => {
          handleError(error);

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


const mapStateToProps = () => ({
  todo: 'TODO'
});

export default connect(mapStateToProps, {
  publishError
})(Container);
