
export const defaultEditData = {
  movieId: '',
  title: '',
  posterUrl: '',
  majorStaffs: '',
  briefIntro: '',
  totalScore: 0,
  ratedUserCount: 0,
  scoreByUser: -1
};

export const mapRowToEditData = rowData => ((({
  movieId,
  title,
  posterUrl,
  majorStaffs,
  briefIntro,
  totalScore,
  ratedUserCount,
  scoreByUser
}) => ({
  movieId,
  title,
  posterUrl,
  majorStaffs,
  briefIntro,
  totalScore,
  ratedUserCount,
  scoreByUser
}))(rowData));
