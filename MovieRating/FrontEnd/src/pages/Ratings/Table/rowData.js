
export const defaultEditData = {
  ratingId: '',
  category: ''
};

export const mapRowToEditData = rowData => ((({
  ratingId,
  category
}) => ({
  ratingId,
  category
}))(rowData));
