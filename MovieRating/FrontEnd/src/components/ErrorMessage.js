import React from 'react';
import { connect } from 'react-redux';


const ErrorMessage = (props) => {
  const { error, isNew } = props;


  return (
    <div>
      { error }
    </div>
  );
};


const mapStateToProps = ({ errorsProfile }) => {
  const { currentError, isNew } = errorsProfile;

  return { error: currentError, isNew };
};

export default connect(mapStateToProps, {
})(ErrorMessage);
