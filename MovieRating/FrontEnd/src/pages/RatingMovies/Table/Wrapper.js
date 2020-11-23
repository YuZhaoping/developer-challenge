import React from 'react';


import MaterialTable from 'material-table';


import {
  ratingMoviesColumns
} from './columns';


const TableWrapper = (props) => {
  const {
    title,
    data,
    onRowAdd,
    onRowUpdate
  } = props;

  return (
    <MaterialTable
      title={ title }
      columns={ ratingMoviesColumns }
      data={ data }
      editable={{
        onRowAdd: onRowAdd,
        onRowUpdate: onRowUpdate
      }}
      options={{
        paging: false,
      }}
    />
  );
};


export default TableWrapper;
