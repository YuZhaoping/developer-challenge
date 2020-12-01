import React from 'react';
import { connect } from 'react-redux';

import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';

import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';

import makeStyles from '@material-ui/core/styles/makeStyles';


import { removeError } from '../actions/errors';


const useStyles = makeStyles(theme => ({
  snackbar: {
    backgroundColor: 'inherit',
    color: theme.palette.error.dark,
  },
  errorIcon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  closeIcon: {
    fontSize: 20,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));


const MessageBar = (props) => {
  const { message, onClose } = props;

  const classes = useStyles();


  return (
    <SnackbarContent
      className={ classes.snackbar }
      aria-describedby="error-message-bar"
      message={
        <span id="error-message-bar" className={ classes.message }>
          <ErrorIcon className={ classes.errorIcon } />
          { message }
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={ onClose }>
          <CloseIcon className={ classes.closeIcon } />
        </IconButton>,
      ]}
    />
  );
};


const ErrorMessage = (props) => {
  const { error, removeError } = props;

  const onClose = () => {
    error && removeError(error);
  }

  return (
    <div>
      { error &&
        <MessageBar
          message={ error.toString() }
          onClose={ onClose }
        />
      }
    </div>
  );
};


const mapStateToProps = ({ errorsProfile }) => {
  const { currentError, isNew } = errorsProfile;

  return { error: (isNew ? currentError : null) };
};

export default connect(mapStateToProps, {
  removeError
})(ErrorMessage);
