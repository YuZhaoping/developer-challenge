import React from 'react';


import Table from './Table';

import {
  mapRowToEditData
} from './Table/rowData';


const Container = (props) => {
  const { title, contactId } = props;


  const queryRowsData = query => {
    return new Promise((resolve, reject) => {
      resolve({data: []});
    });
  };

  const onRowAdd = newData => {
    const data = mapRowToEditData(newData);

    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  const onRowUpdate = (newData, oldData) => {
    const data = mapRowToEditData(newData);

    const movieId = oldData.movieId;

    return new Promise((resolve, reject) => {
      resolve(data);
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
