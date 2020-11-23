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

  const onRowClick = (event, rowData) => {
    // TODO
  };

  const onRowAdd = newData => {
    const data = mapRowToEditData(newData);
    return api.creatRating(data);
  };


  return (
    <Table
      title={ title }
      data={ queryRowsData }
      onRowClick={ onRowClick }
      onRowAdd={ onRowAdd }
    />
  );
};


export default Container;
