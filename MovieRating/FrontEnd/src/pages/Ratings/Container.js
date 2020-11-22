import React from 'react';


import Table from './Table';

import {
  mapRowToEditData
} from './Table/rowData';


const Container = (props) => {
  const { title } = props;


  const queryRowsData = query => {
    return new Promise((resolve, reject) => {
      resolve({data: []});
    });
  };

  const onRowClick = (event, rowData) => {
    // TODO
  };

  const onRowAdd = newData => {
    const data = mapRowToEditData(newData);

    return new Promise((resolve, reject) => {
      resolve(data);
    });
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
