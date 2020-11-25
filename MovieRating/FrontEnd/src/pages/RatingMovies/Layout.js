/**
 * Rating movies' page layout
 */
import React from 'react';
import { withRouter } from "react-router";


import Container from './Container';


import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column'
  },

  title: {
    display: 'flex',
    flexDirection: 'row'
  },

  content: {
    flexGrow: 1
  }
}));


const title = 'Rating Movies';

const Layout = (props) => {
  const { match } = props;

  const ratingId = match.params.ratingId;

  const classes = useStyles();


  return (
    <div className={ classes.root } >

      <div className={ classes.title } >
        <Typography variant='h6' >
          { `Rate the '${ratingId}' movies:` }
        </Typography>
      </div>

      <div className={ classes.content } >
        <Container
          title={ title }
          ratingId={ ratingId }
        />
      </div>

    </div>
  );
};


export default withRouter(Layout);
