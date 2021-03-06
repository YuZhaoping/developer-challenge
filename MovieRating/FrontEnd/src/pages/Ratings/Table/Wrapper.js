import React from 'react';


import MaterialTable from 'material-table';


import {
  ratingsColumns
} from './columns';


const TableWrapper = (props) => {
  const {
    title,
    data,
    onRowAdd
  } = props;

  return (
    <MaterialTable
      title={ title }
      columns={ ratingsColumns }
      data={ data }
      editable={{
        onRowAdd: onRowAdd
      }}
      options={{
        actionsColumnIndex: -1,
        paging: false
      }}
    />
  );
};


export default TableWrapper;
