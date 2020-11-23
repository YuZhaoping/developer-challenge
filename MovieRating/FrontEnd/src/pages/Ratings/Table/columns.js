import MoviesEntry from './MoviesEntry';

export const ratingsColumns = [
  { title: 'ContactId', field: 'contactId', editable: 'never', sorting: false, render: rowData => <MoviesEntry rowData={ rowData } /> },
  { title: 'Category', field: 'category', editable: 'onAdd' }
];
