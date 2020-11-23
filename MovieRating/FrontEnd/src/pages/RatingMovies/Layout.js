/**
 * Rating movies' page layout
 */
import React from 'react';
import { withRouter } from "react-router";


const Layout = (props) => {
  const { match } = props;

  const contactId = match.params.contactId;


  return (
    <div>
      { `TODO: ${contactId} movies' page layout` }
    </div>
  );
};


export default withRouter(Layout);
