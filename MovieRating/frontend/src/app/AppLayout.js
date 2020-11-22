import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


import Container from '@material-ui/core/Container';


import pagesRoutes, { defaultPath } from '../pages/routes';


const AppLayout = () => {

  return (
    <Container component='main'>
      <Switch>
        {pagesRoutes.map((route, index) => (
          <Route
            key={ index }
            path={ route.path }
            component={ route.component }
          />
        ))}
        <Redirect to={ defaultPath } />
      </Switch>
    </Container>
  );
};


export default AppLayout;
