import React from 'react';


import api from '../../services/ratings/api';

import Table from './Table';

import {
  mapRowToEditData
} from './Table/rowData';


const Container = (props) => {
  const { title } = props;


  const queryRowsData = query => {
    return new Promise((resolve, reject) => {
      api.getAllRatings().then(
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

    // return api.creatRating(data);
    return new Promise((resolve, reject) => {
      api.creatRating(data).then(
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


  return (
    <Table
      title={ title }
      data={ queryRowsData }
      onRowAdd={ onRowAdd }
    />
  );
};


export default Container;
