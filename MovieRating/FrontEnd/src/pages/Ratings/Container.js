import React from 'react';
import { connect } from 'react-redux';


import publishError from '../../actions/errors';

import ratingsAPIs from '../../services/ratings/apis';

import Table from './Table';

import {
  mapRowToEditData
} from './Table/rowData';


const Container = (props) => {
  const { title, publishError } = props;


  const handleError = (error) => {
    console.log(error);
    publishError(error);
  }


  const queryRowsData = query => {
    return new Promise((resolve, reject) => {
      ratingsAPIs.getAllRatings().then(
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

    // return ratingsAPIs.creatRating(data);
    return new Promise((resolve, reject) => {
      ratingsAPIs.creatRating(data).then(
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


  return (
    <Table
      title={ title }
      data={ queryRowsData }
      onRowAdd={ onRowAdd }
    />
  );
};


const mapStateToProps = () => ({
  todo: 'TODO'
});

export default connect(mapStateToProps, {
  publishError
})(Container);
