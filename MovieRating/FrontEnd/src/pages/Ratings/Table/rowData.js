
export const defaultEditData = {
  contactId: '',
  category: ''
};

export const mapRowToEditData = rowData => ((({
  contactId,
  category
}) => ({
  contactId,
  category
}))(rowData));
