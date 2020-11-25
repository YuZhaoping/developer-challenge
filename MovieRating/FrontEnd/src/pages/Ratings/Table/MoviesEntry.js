import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';


import { ratingsBasePath } from '../../routes';


const MoviesEntry = ({ rowData }) => {
  const ratingId = rowData ? rowData.ratingId: '';

  return (
    <Link
      component={ RouterLink }
      to={ `${ratingsBasePath}/${ratingId}` }
    >
      { ratingId }
    </Link>
  );
};


export default MoviesEntry;
