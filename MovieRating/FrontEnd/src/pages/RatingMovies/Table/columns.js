export const ratingMoviesColumns = [
  { title: 'Poster', field: 'posterUrl', editable: 'onAdd', sorting: false, render: rowData => <img src={rowData.posterUrl} style={{width: 40}}/> },
  { title: 'Title', field: 'title', editable: 'onAdd' },
  { title: 'Major Staffs', field: 'majorStaffs', editable: 'onAdd', sorting: false },
  { title: 'Brief Intro', field: 'briefIntro', editable: 'onAdd', sorting: false },
  { title: 'Total Score', field: 'totalScore', editable: 'never', type: 'numeric' },
  { title: 'Rated User Count', field: 'ratedUserCount', editable: 'never', type: 'numeric' },
  { title: 'Your Score', field: 'scoreByUser', editable: 'onUpdate', type: 'numeric' }
];
