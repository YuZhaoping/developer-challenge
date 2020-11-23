
export const defaultEditData = {
  movieId: '',
  title: '',
  posterUrl: '',
  majorStaffs: '',
  briefIntro: '',
  totalScore: 0,
  numOfRatedUsers: 0,
  scoreByUser: -1
};

export const mapRowToEditData = rowData => ((({
  movieId,
  title,
  posterUrl,
  majorStaffs,
  briefIntro,
  totalScore,
  numOfRatedUsers,
  scoreByUser
}) => ({
  movieId,
  title,
  posterUrl,
  majorStaffs,
  briefIntro,
  totalScore,
  numOfRatedUsers,
  scoreByUser
}))(rowData));
