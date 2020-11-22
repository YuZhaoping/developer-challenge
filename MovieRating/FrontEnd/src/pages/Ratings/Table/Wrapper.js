import React from 'react';


import MaterialTable from 'material-table';


import {
  ratingsColumns
} from './columns';


const TableWrapper = (props) => {
  const {
    title,
    data,
    onRowClick,
    onRowAdd
  } = props;

  return (
    <MaterialTable
      title={ title }
      columns={ ratingsColumns }
      data={ data }
      onRowClick={ onRowClick }
      editable={{
        onRowAdd: onRowAdd
      }}
      options={{
        paging: false,
      }}
    />
  );
};


export default TableWrapper;
