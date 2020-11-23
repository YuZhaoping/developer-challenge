import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';


import { ratingsBasePath } from '../../routes';


const MoviesEntry = ({ rowData }) => {
  const contactId = rowData ? rowData.contactId: '';

  return (
    <Link
      component={ RouterLink }
      to={ `${ratingsBasePath}/${contactId}` }
    >
      { contactId }
    </Link>
  );
};


export default MoviesEntry;
