import MoviesEntry from './MoviesEntry';

export const ratingsColumns = [
  { title: 'RatingId', field: 'ratingId', editable: 'never', sorting: false, render: rowData => <MoviesEntry rowData={ rowData } /> },
  { title: 'Category', field: 'category', editable: 'onAdd' }
];
